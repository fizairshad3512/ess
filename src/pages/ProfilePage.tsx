import React from 'react';
import { CURRENT_USER, PERSONAL_INFO, JOB_DETAILS } from '../data/constants';

const ProfilePage: React.FC = () => {
  return (
    <div className="pb">
      {/* Hero Card */}
      <div className="card" style={{ padding: '24px 28px' }}>
        <div className="profile-hero-inner">
          {/* Avatar */}
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: 'var(--green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: '700',
              color: 'white',
              flexShrink: 0,
            }}
          >
            {CURRENT_USER.initials}
          </div>
          {/* Name + role + badges */}
          <div style={{ flex: 1 }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.3px' }}>
                {CURRENT_USER.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--ink3)', marginTop: '4px' }}>
                {CURRENT_USER.role} · {CURRENT_USER.company} · {CURRENT_USER.location}
              </div>
              <div style={{ display: 'flex', gap: '7px', marginTop: '10px' }}>
                <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: '20px', fontSize: '11.5px', fontWeight: '500', background: 'var(--gs)', color: 'var(--green)' }}>Active</span>
                <span style={{ display: 'inline-flex', padding: '3px 10px', borderRadius: '20px', fontSize: '11.5px', fontWeight: '500', background: 'var(--bs)', color: 'var(--blue)' }}>Full-time</span>
              </div>
          </div>

          {/* Stats */}
          <div className="profile-stats">
            {/* Years */}
            <div className="profile-stat-item">
              <p style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px', color: 'var(--ink)' }}>
                {CURRENT_USER.years}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '4px' }}>Years</p>
            </div>

            {/* Attendance */}
            <div className="profile-stat-item">
              <p style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px', color: 'var(--green)' }}>
                {CURRENT_USER.attendancePercent}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '4px' }}>Attendance</p>
            </div>

            {/* Performance */}
            <div className="profile-stat-item">
              <p style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-0.5px', color: 'var(--ink)' }}>
                {CURRENT_USER.performancePercent}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '4px' }}>Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Grid */}
      <div className="row2">
        {/* Personal Info Card */}
        <div className="card">
          <div style={{ padding: '16px 20px', fontSize: '14px', fontWeight: '600', color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>
            Personal Info
          </div>
          <div style={{ padding: '0 20px' }}>
            {PERSONAL_INFO.map((field, index) => (
              <div
                key={field.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '13px 0',
                  borderBottom: index !== PERSONAL_INFO.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>{field.label}</span>
                {field.isLink ? (
                  <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--blue)' }}>
                    {field.value}
                  </span>
                ) : (
                  <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink)' }}>
                    {field.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Job Details Card */}
        <div className="card">
          <div style={{ padding: '16px 20px', fontSize: '14px', fontWeight: '600', color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>
            Job Details
          </div>
          <div style={{ padding: '0 20px' }}>
            {JOB_DETAILS.map((field, index) => (
              <div
                key={field.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '13px 0',
                  borderBottom: index !== JOB_DETAILS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>{field.label}</span>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
