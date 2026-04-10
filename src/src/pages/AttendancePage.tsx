import React, { useState } from 'react';
import { ATTENDANCE_RECORDS } from '../data/constants';

const AttendancePage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('March 2026');
  const months = ['March 2026', 'February 2026', 'January 2026'];

  const insights = [
    { label: 'Total Time Spent', value: '69h 32m', iconType: 'clock' },
    { label: 'Average Check-In Time', value: '09:39 AM', iconType: 'user' },
    { label: 'Average Check-Out Time', value: '04:36 PM', iconType: 'user' },
    { label: 'Average Duration', value: '6h 57m', iconType: 'clock' },
    { label: 'Total Absences', value: '0', iconType: 'user-minus', isAlert: true },
  ];

  const ClockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" style={{ width: '16px', height: '16px', flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
  const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" style={{ width: '16px', height: '16px', flexShrink: 0 }}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );
  const UserMinusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="1.8" style={{ width: '16px', height: '16px', flexShrink: 0 }}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
  );
  const LocationIcon = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" style={{ width: '13px', height: '13px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
  );

  const statusColors: Record<string, string> = {
    green: 'var(--green)',
    red: '#DC2626',
    ink: 'var(--ink)',
  };

  return (
    <div className="pb">
      {/* Insights Card */}
      <div className="card">
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}>Insights</div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '5px 10px', fontSize: '12px', color: 'var(--ink)', fontFamily: 'inherit', background: 'var(--white)', cursor: 'pointer', outline: 'none' }}
          >
            {months.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
          {insights.map((ins, idx) => (
            <div key={idx} style={{
              padding: '16px 18px',
              borderRight: idx < insights.length - 1 ? '1px solid var(--border)' : 'none',
              background: ins.isAlert ? '#FEF2F2' : 'var(--white)',
            }}>
              <div style={{ fontSize: '11px', color: ins.isAlert ? '#DC2626' : 'var(--ink3)', fontWeight: ins.isAlert ? 600 : 400, marginBottom: '10px' }}>{ins.label}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                {ins.iconType === 'clock' && <ClockIcon />}
                {ins.iconType === 'user' && <UserIcon />}
                {ins.iconType === 'user-minus' && <UserMinusIcon />}
                <span style={{
                  fontSize: ins.isAlert ? '22px' : '17px',
                  fontWeight: ins.isAlert ? 800 : 700,
                  color: ins.isAlert ? '#DC2626' : 'var(--ink)',
                  letterSpacing: ins.isAlert ? '-0.5px' : '-0.3px',
                }}>{ins.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Table Card */}
      <div className="card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              {['Date', 'Check In', 'Check Out', 'Duration', 'Status'].map((h) => (
                <th key={h} style={{ padding: '11px 16px', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.7px', color: '#9CA3AF', textTransform: 'uppercase' as const, textAlign: 'left' as const }}>{h}</th>
              ))}
              <th style={{ padding: '11px 16px', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.7px', color: 'var(--green)', textTransform: 'uppercase' as const, textAlign: 'left' as const }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><LocationIcon color="currentColor" />Check In</span>
              </th>
              <th style={{ padding: '11px 16px', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.7px', color: '#DC2626', textTransform: 'uppercase' as const, textAlign: 'left' as const }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><LocationIcon color="currentColor" />Check Out</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {ATTENDANCE_RECORDS.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: idx < ATTENDANCE_RECORDS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>{row.date}</td>
                <td style={{ padding: '13px 16px', fontSize: '13px', color: row.checkIn === 'Not recorded' ? 'var(--ink3)' : 'var(--ink2)' }}>{row.checkIn}</td>
                <td style={{ padding: '13px 16px', fontSize: '13px', color: row.checkOut === 'Not recorded' ? 'var(--ink3)' : 'var(--ink2)' }}>{row.checkOut}</td>
                <td style={{ padding: '13px 16px', fontSize: '13px', color: row.duration.startsWith('0') ? 'var(--ink3)' : 'var(--ink2)' }}>{row.duration}</td>
                <td style={{ padding: '13px 16px', fontSize: '13px', fontWeight: 700, color: statusColors[row.statusColor] || 'var(--ink)' }}>{row.status}</td>
                <td style={{ padding: '13px 16px' }}>
                  {row.checkInLocation ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <LocationIcon color="var(--green)" />
                      <span style={{ background: 'var(--gs)', color: 'var(--green)', fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '20px' }}>{row.checkInLocation}</span>
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><LocationIcon color="#9CA3AF" /><span style={{ fontSize: '12px', color: 'var(--ink3)' }}>N/A</span></span>
                  )}
                </td>
                <td style={{ padding: '13px 16px' }}>
                  {row.checkOutLocation ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      <LocationIcon color="var(--green)" />
                      <span style={{ background: 'var(--gs)', color: 'var(--green)', fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '20px' }}>{row.checkOutLocation}</span>
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}><LocationIcon color="#9CA3AF" /><span style={{ fontSize: '12px', color: 'var(--ink3)' }}>N/A</span></span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
