import { useState } from 'react';
import { ATTENDANCE_WEEK, TIMESHEET_BARS, ASSIGNED_PROJECTS, UNASSIGNED_PROJECTS } from '../data/constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { toggleLike } from '../features/feed/feedSlice';
import PostItem from '../components/shared/PostItem';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.feed.posts);

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [perfTab, setPerfTab] = useState('assigned');
  const [postTab, setPostTab] = useState(0);
  const [postText, setPostText] = useState('');

  const toggleCheckIn = () => {
    setIsCheckedIn(!isCheckedIn);
  };

  const handlePost = () => {
    if (postText.trim()) {
      setPostText('');
      setPostTab(0);
    }
  };

  return (
    <div className="pb">
      {/* Greeting */}
      <div className="greet">
        <div className="greet-inner">
          <div>
            <div className="g-name">Good Morning, Fiza 👋</div>
            <div className="g-sub">You checked in at 09:39 AM yesterday · 3 missing punches · Timesheet 86% complete</div>
            <div className="g-btns">
              <button className="bp" onClick={toggleCheckIn}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {isCheckedIn ? 'Check Out' : 'Check In'}
              </button>
              <button className="bs-btn">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Apply Request
              </button>
            </div>
          </div>
          <div className="g-stats">
            <div className="g-stat"><div className="gsv g">8h 24m</div><div className="gsl">Avg today</div></div>
            <div className="g-stat"><div className="gsv">22</div><div className="gsl">Days present</div></div>
            <div className="g-stat"><div className="gsv">91%</div><div className="gsl">Performance</div></div>
          </div>
        </div>
      </div>

      {/* Two column grid */}
      <div className="grid-home">

        {/* LEFT: Attendance + Timesheet + Performance */}
        <div className="flex-col-gap">

          {/* Attendance Card */}
          <div className="card">
            <div className="ch">
              <div className="ct">This Week's Attendance</div>
              <div style={{ display: 'flex', gap: '12px', fontSize: '11px' }}>
                <span style={{ color: 'var(--green)' }}>● Present</span>
                <span style={{ color: '#CA8A04' }}>● Leave</span>
                <span style={{ color: 'var(--red)' }}>● Absent</span>
              </div>
            </div>
            <div className="att-week">
              {ATTENDANCE_WEEK.map(day => {
                const cls = day.status === 'present' ? 'p' : day.status === 'leave' ? 'l' : day.status === 'absent' ? 'a' : day.status === 'today' ? 't' : '';
                return <div key={day.day} className={`aw ${cls}`}><div className="aw-d">{day.day}</div><div className="aw-n">{day.date}</div></div>
              })}
            </div>
            <div className="att-mini-stats">
              <div className="ams"><div className="ams-v g">8h 24m</div><div className="ams-l">Avg today</div></div>
              <div className="ams"><div className="ams-v">22</div><div className="ams-l">Present</div></div>
              <div className="ams"><div className="ams-v a">1</div><div className="ams-l">Missing punch</div></div>
            </div>
          </div>

          {/* Timesheet Card */}
          <div className="card">
            <div className="ch"><div className="ct">My Timesheet</div><span className="cl">Log hours →</span></div>
            <div className="ts-nums">
              <div className="ts-n"><div className="ts-nv">88h</div><div className="ts-nl">Total</div></div>
              <div className="ts-n"><div className="ts-nv g">32h</div><div className="ts-nl">Approved</div></div>
              <div className="ts-n"><div className="ts-nv a">56h</div><div className="ts-nl">Pending</div></div>
            </div>
            <div className="ts-bars">
              {TIMESHEET_BARS.map(bar => (
                <div key={bar.day} className="ts-r">
                  <span className="ts-l">{bar.day}</span>
                  <div className="ts-tr">
                    <div className="ts-f" style={{ width: `${bar.percentage}%`, background: bar.isPartial ? 'var(--gs)' : 'var(--green)' }}></div>
                  </div>
                  <span className="ts-v" style={bar.isPartial ? { color: 'var(--green)' } : undefined}>{bar.hours}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Card - with 91% arc, Assigned/Unassigned tabs, project cards */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '15px 18px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Performance</div>
            </div>
            {/* Progress arc card */}
            <div style={{ margin: '12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--ink3)', marginBottom: '5px' }}>Your Progress</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1px', lineHeight: 1 }}>91%</div>
                <div style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '8px' }}>
                  Tasks: <span style={{ fontWeight: 600, color: 'var(--ink)' }}>2</span>
                  &nbsp;&nbsp;&nbsp;
                  Completed: <span style={{ fontWeight: 700, color: 'var(--green)' }}>91%</span>
                </div>
              </div>
              <div style={{ position: 'relative', width: '78px', height: '78px' }}>
                <svg viewBox="0 0 78 78" style={{ width: '78px', height: '78px', transform: 'rotate(-220deg)' }}>
                  <circle cx="39" cy="39" r="30" fill="none" stroke="#EDE9FE" strokeWidth="8" strokeLinecap="round" strokeDasharray="188" strokeDashoffset="0" />
                  <circle cx="39" cy="39" r="30" fill="none" stroke="var(--green)" strokeWidth="8" strokeLinecap="round" strokeDasharray="188" strokeDashoffset="56" />
                </svg>
              </div>
            </div>
            {/* Tabs: Assigned / Unassigned */}
            <div style={{ padding: '0 12px 14px' }}>
              <div style={{ display: 'flex', background: '#F3F0FF', borderRadius: '10px', padding: '3px', marginBottom: '12px' }}>
                <button className={`perf-tab ${perfTab === 'assigned' ? 'on' : ''}`} onClick={() => setPerfTab('assigned')}>Assigned</button>
                <button className={`perf-tab ${perfTab === 'unassigned' ? 'on' : ''}`} onClick={() => setPerfTab('unassigned')}>Unassigned</button>
              </div>
              {/* Project cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {(perfTab === 'assigned' ? ASSIGNED_PROJECTS : UNASSIGNED_PROJECTS).map((proj) => (
                  <div key={proj.code} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '13px 14px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'box-shadow 0.15s' }}>
                    {/* Icon */}
                    <div style={{ width: '40px', height: '40px', background: 'white', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="1.8" style={{ width: '18px', height: '18px' }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '5px' }}>Project Code: {proj.code}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '11.5px', color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '11px', height: '11px' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {proj.hours}
                        </span>
                        <span style={{ fontSize: '11.5px', color: 'var(--ink3)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '11px', height: '11px' }}><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/></svg>
                          {proj.task}
                        </span>
                      </div>
                    </div>
                    {/* Status */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '10px', color: 'var(--ink3)' }}>Status:</div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: proj.statusColor === 'green' ? 'var(--green)' : 'var(--amber)' }}>{proj.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Team Feed */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', position: 'sticky', top: 0 }}>
          <div className="ch"><div className="ct">Team Feed</div><span className="cl">See all →</span></div>
          {/* Post composer */}
          <div style={{ padding: '13px 15px', borderBottom: '1px solid var(--border)' }}>
            {/* Tab bar */}
            <div style={{ display: 'flex', gap: '2px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '7px', padding: '3px', marginBottom: '10px' }}>
              {['Post', 'Photo / Video', 'Document'].map((tab, i) => (
                <button key={tab} className={`hptab ${postTab === i ? 'on' : ''}`} onClick={() => setPostTab(i)}>{tab}</button>
              ))}
            </div>
            {/* Avatar + textarea */}
            <div style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
              <div className="uav" style={{ width: '27px', height: '27px', fontSize: '9px' }}>FI</div>
              <textarea className="pb-ta" style={{ width: '100%' }} placeholder="Share an update with your team..." value={postText} onChange={e => setPostText(e.target.value)} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--ink3)' }}>{postText.length} / 2000</span>
              <button className="pub-btn" onClick={handlePost}>Publish</button>
            </div>
          </div>
          {/* Feed posts */}
          <div style={{ overflowY: 'auto', maxHeight: '480px' }}>
            {posts.map(post => <PostItem key={post.id} post={post} onLike={id => dispatch(toggleLike(id))} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
