import React, { useState } from 'react';
import { TIMESHEET_ENTRIES } from '../data/constants';

const TimesheetPage: React.FC = () => {
  const [weekStart] = useState('Mar 10');
  const [weekEnd] = useState('16');

  const handlePrevWeek = () => {
    // Navigation logic would go here
  };

  const handleNextWeek = () => {
    // Navigation logic would go here
  };

  const statusColorMap: Record<string, { bg: string; color: string }> = {
    approved: { bg: '#EDE9FE', color: '#7C3AED' },
    pending: { bg: '#FEF3C7', color: '#B45309' },
    rejected: { bg: '#FDECEA', color: '#C0392B' },
  };

  return (
    <div className="pb">
      {/* Header with Week Navigator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)' }}>My Timesheet</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            onClick={handlePrevWeek}
            style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--white)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '13px', color: 'var(--ink2)' }}
          >‹</div>
          <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>
            {weekStart} – {weekEnd}, 2026
          </span>
          <div
            onClick={handleNextWeek}
            style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--white)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '13px', color: 'var(--ink2)' }}
          >›</div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="card">
        <div className="ts-nums">
          <div className="ts-n">
            <div className="ts-nv">88h</div>
            <div className="ts-nl">Total</div>
          </div>
          <div className="ts-n">
            <div className="ts-nv g">32h</div>
            <div className="ts-nl">Approved</div>
          </div>
          <div className="ts-n">
            <div className="ts-nv a">56h</div>
            <div className="ts-nl">Pending</div>
          </div>
        </div>
      </div>

      {/* Weekly Log Card */}
      <div className="card">
        <div className="ch">
          <span className="ct">Weekly Log</span>
        </div>
        <div style={{ padding: '16px', overflowX: 'auto' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th>Project</th>
                <th>Date</th>
                <th>Hours</th>
                <th>Notes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {TIMESHEET_ENTRIES.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: '500' }}>{row.project}</td>
                  <td>{row.date}</td>
                  <td style={{ fontWeight: '500' }}>{row.hours}</td>
                  <td>{row.notes}</td>
                  <td>
                    <span
                      className="bdg"
                      style={{
                        backgroundColor: statusColorMap[row.status]?.bg || '#F0F0F0',
                        color: statusColorMap[row.status]?.color || '#555',
                      }}
                    >
                      {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimesheetPage;
