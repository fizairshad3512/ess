import React from 'react';
import Icon from '../icons/index';
import { LEAVE_BALANCES, REQUEST_TYPES, LEAVE_REQUESTS } from '../data/constants';
import { useToast } from '../hooks/useToast';

const leaveColorMap: Record<string, { icon: string; bg: string }> = {
  green: { icon: 'var(--green)', bg: 'var(--gs)' },
  red: { icon: 'var(--red)', bg: 'var(--rs)' },
  amber: { icon: 'var(--amber)', bg: 'var(--as)' },
  blue: { icon: 'var(--blue)', bg: 'var(--bs)' },
};

const LeavePage: React.FC = () => {
  const { showToast } = useToast();

  const handleRequestTypeClick = (label: string) => {
    showToast(`📅 ${label} request form opened!`);
  };

  const getStatusBadgeClass = (status: string): string => {
    if (status === 'pending') return 'ba';
    if (status === 'approved') return 'bg';
    return 'br';
  };

  return (
    <div className="pb">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.3px' }}>My Requests</div>
          <div style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '3px' }}>Manage your leave and workplace requests</div>
        </div>
      </div>

      {/* Leave Balance Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {LEAVE_BALANCES.map((balance) => {
          const percentage = (balance.used / balance.total) * 100;
          const colors = leaveColorMap[balance.color];
          return (
            <div key={balance.type} className="card" style={{ padding: '13px 15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ width: '28px', height: '28px', background: colors.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={balance.icon} size={13} style={{ color: colors.icon }} />
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: colors.icon, background: colors.bg, padding: '2px 9px', borderRadius: '20px' }}>
                  {balance.remaining} left
                </span>
              </div>
              <div style={{ fontSize: '19px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.5px', lineHeight: 1 }}>{balance.total}</div>
              <div style={{ fontSize: '11px', color: 'var(--ink3)', marginTop: '2px' }}>{balance.type}</div>
              <div style={{ marginTop: '8px', height: '3px', background: 'var(--border)', borderRadius: '2px' }}>
                <div style={{ width: `${percentage}%`, height: '100%', background: colors.icon, borderRadius: '2px' }} />
              </div>
              <div style={{ fontSize: '10.5px', color: 'var(--ink3)', marginTop: '3px' }}>{balance.used} of {balance.total} used</div>
            </div>
          );
        })}

        {/* Pending Approval Card */}
        <div className="card" style={{ padding: '13px 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: 'var(--bs)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="clock" size={13} style={{ color: 'var(--blue)' }} />
            </div>
            <span style={{ fontSize: '10.5px', fontWeight: 600, color: 'var(--amber)', background: 'var(--as)', padding: '2px 9px', borderRadius: '20px' }}>2 pending</span>
          </div>
          <div style={{ fontSize: '19px', fontWeight: 700, color: 'var(--amber)', letterSpacing: '-0.5px', lineHeight: 1 }}>2</div>
          <div style={{ fontSize: '11px', color: 'var(--ink3)', marginTop: '2px' }}>Pending Approval</div>
          <div style={{ marginTop: '8px', height: '3px', background: 'var(--border)', borderRadius: '2px' }}>
            <div style={{ width: '100%', height: '100%', background: 'var(--amber)', borderRadius: '2px' }} />
          </div>
          <div style={{ fontSize: '10.5px', color: 'var(--ink3)', marginTop: '3px' }}>Awaiting review</div>
        </div>
      </div>

      {/* Create New Request Card */}
      <div className="card">
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--ink)' }}>Create New Request</div>
            <div style={{ fontSize: '11.5px', color: 'var(--ink3)', marginTop: '2px' }}>Click any type to submit a new request</div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
          {REQUEST_TYPES.map((type, idx) => (
            <div
              key={type.label}
              style={{
                padding: '22px 16px',
                textAlign: 'center',
                cursor: 'pointer',
                borderRight: idx < REQUEST_TYPES.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.12s',
                position: 'relative',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gs)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; }}
              onClick={() => handleRequestTypeClick(type.label)}
            >
              {/* Plus badge */}
              <div style={{ position: 'absolute', top: '12px', right: '12px', width: '18px', height: '18px', background: 'var(--green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </div>
              {/* Icon */}
              <div style={{ width: '52px', height: '52px', background: 'var(--gs)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon name={type.icon} size={24} style={{ color: 'var(--green)' }} />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--ink)' }}>{type.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Request History Card */}
      <div className="card">
        <div className="ch">
          <div className="ct">Request History</div>
          <span style={{ fontSize: '11.5px', color: 'var(--ink3)' }}>{LEAVE_REQUESTS.length} total</span>
        </div>
        <table className="tbl">
          <thead><tr><th>Type</th><th>Date Applied</th><th>Duration</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {LEAVE_REQUESTS.map((request, index) => (
              <tr key={`${request.type}-${index}`}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{ width: '28px', height: '28px', background: `var(--${request.iconBg})`, borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={request.icon} size={13} style={{ color: request.iconColor }} />
                    </div>
                    <span style={{ fontWeight: 500 }}>{request.type}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--ink3)' }}>{request.dateApplied}</td>
                <td style={{ color: 'var(--ink3)' }}>{request.duration}</td>
                <td>
                  <span className={`bdg ${getStatusBadgeClass(request.status)}`}>
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: '11.5px', color: request.status === 'pending' ? 'var(--red)' : 'var(--green)', cursor: 'pointer', fontWeight: 500 }}>
                    {request.status === 'pending' ? 'Cancel' : 'View'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeavePage;
