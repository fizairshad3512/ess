import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { toggleTask } from '../features/tasks/tasksSlice';
import type { TaskStatus } from '../types';

const statusBadgeClass: Record<TaskStatus, string> = {
  overdue: 'br',
  today: 'ba',
  done: 'bg',
  'on-track': 'bb',
  'in-review': 'bb',
};

const statusBadgeText: Record<TaskStatus, string> = {
  overdue: 'Overdue',
  today: 'Today',
  done: 'Done',
  'on-track': 'On track',
  'in-review': 'In review',
};

const TasksPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const overdueTasks = tasks.filter((t) => t.status === 'overdue' && !t.completed);

  const handleCheckboxChange = (taskId: string) => {
    dispatch(toggleTask(taskId));
  };

  const getDueTextWithColor = (task: any) => {
    const dueParts = task.due.split('·');
    if (dueParts.length === 1) {
      return <span>{task.due}</span>;
    }

    const dueText = dueParts[1]?.trim() || '';
    let dueColor = 'inherit';

    if (task.status === 'overdue') {
      dueColor = 'var(--red)';
    } else if (task.status === 'today') {
      dueColor = 'var(--amber)';
    }

    return (
      <>
        <span>{task.category}</span>
        <span> · </span>
        <span style={{ color: dueColor }}>{dueText}</span>
      </>
    );
  };

  return (
    <div className="pb">
      {/* Header */}
      <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>
        My Tasks
      </div>

      {/* All Tasks Card */}
      <div className="card">
        <div className="ch">
          <span className="ct">All Tasks</span>
          {overdueTasks.length > 0 && <span className="bdg br">{overdueTasks.length} overdue</span>}
        </div>
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="task">
              {/* Checkbox */}
              <div
                className={`tck ${task.completed ? 'done' : ''}`}
                onClick={() => handleCheckboxChange(task.id)}
                style={{ cursor: 'pointer' }}
              >
                {task.completed && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Task Content */}
              <div className="t-info">
                <p className={`t-name ${task.completed ? 'done' : ''}`}>
                  {task.name}
                </p>
                <p className="t-sub">
                  {getDueTextWithColor(task)}
                </p>
              </div>

              {/* Status Badge */}
              <span className={`bdg ${statusBadgeClass[task.status]}`}>
                {statusBadgeText[task.status]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
