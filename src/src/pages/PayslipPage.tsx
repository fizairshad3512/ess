import React from 'react';
import { SALARY_BREAKDOWN, PAY_HISTORY } from '../data/constants';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { toggleVisibility } from '../features/payroll/payrollSlice';

const PayslipPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.payroll.isVisible);

  const handleToggleVisibility = () => {
    dispatch(toggleVisibility());
  };

  const displayNetSalary = isVisible ? 'PKR 213,000' : 'PKR ••••••';
  const displayBasicSalary = isVisible ? '180,000' : '••••••';
  const displayAllowances = isVisible ? '45,000' : '••••••';
  const displayDeductions = isVisible ? '12,000' : '••••••';

  return (
    <div className="pb">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div>
            <div style={{ fontSize: '17px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.3px' }}>Payroll &amp; Compensation</div>
            <div style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '3px' }}>March 2026 · Pay cycle: 25th of every month</div>
          </div>
          {/* Eye toggle */}
          <button
            onClick={handleToggleVisibility}
            title="Show/hide amounts"
            style={{
              width: '32px',
              height: '32px',
              padding: 0,
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'var(--bg)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
              transition: 'all 0.15s',
            }}
          >
            {isVisible ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink3)" strokeWidth="1.8" style={{ width: '15px', height: '15px' }}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ink3)" strokeWidth="1.8" style={{ width: '15px', height: '15px' }}>
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        </div>
        <button
          className="bp"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '12.5px',
            padding: '9px 16px',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '13px', height: '13px' }}>
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Slip
        </button>
      </div>

      {/* Hero Banner */}
      <div
        style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '24px 28px',
          color: 'white',
          background: 'var(--green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '-40px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '80px',
            bottom: '-50px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '6px',
            }}
          >
            Net Salary · March 2026
          </p>
          <div style={{ fontSize: '34px', fontWeight: '800', color: 'white', letterSpacing: '-1px', lineHeight: '1' }}>
            {displayNetSalary}
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '6px' }}>
            Processed on Mar 25, 2026 · HBL ****4521
          </p>
        </div>

        <button
          style={{
            background: 'white',
            color: 'var(--green)',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: 'inherit',
            position: 'relative',
            zIndex: 1,
          }}
        >
          View Payslip
        </button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '20px' }}>
        {/* Basic Salary */}
        <div className="card" style={{ padding: '18px 20px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              marginBottom: '12px',
              background: 'var(--gs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--green)"
              strokeWidth="2"
              style={{ width: '16px', height: '16px' }}
            >
              <circle cx="12" cy="12" r="1" />
              <path d="M12 9v6M9 12h6" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
          <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.4px' }}>
            PKR {displayBasicSalary}
          </p>
          <p style={{ fontSize: '11.5px', color: 'var(--ink3)', marginTop: '3px' }}>
            Basic Salary
          </p>
          <p style={{ fontSize: '11px', color: 'var(--green)', marginTop: '5px', fontWeight: '500' }}>
            PKR / month
          </p>
        </div>

        {/* Allowances */}
        <div className="card" style={{ padding: '18px 20px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              marginBottom: '12px',
              background: 'var(--bs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="2"
              style={{ width: '16px', height: '16px' }}
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 17" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.4px' }}>
            PKR {displayAllowances}
          </p>
          <p style={{ fontSize: '11.5px', color: 'var(--ink3)', marginTop: '3px' }}>
            Allowances
          </p>
          <p style={{ fontSize: '11px', color: 'var(--blue)', marginTop: '5px', fontWeight: '500' }}>
            HRA + Transport
          </p>
        </div>

        {/* Deductions */}
        <div className="card" style={{ padding: '18px 20px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              marginBottom: '12px',
              background: 'var(--rs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--red)"
              strokeWidth="2"
              style={{ width: '16px', height: '16px' }}
            >
              <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
              <polyline points="17 18 23 18 23 12" />
            </svg>
          </div>
          <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--red)', letterSpacing: '-0.4px' }}>
            PKR {displayDeductions}
          </p>
          <p style={{ fontSize: '11.5px', color: 'var(--ink3)', marginTop: '3px' }}>
            Deductions
          </p>
          <p style={{ fontSize: '11px', color: 'var(--red)', marginTop: '5px', fontWeight: '500' }}>
            Tax + EOBI
          </p>
        </div>

        {/* Net Salary */}
        <div className="card" style={{ padding: '18px 20px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              marginBottom: '12px',
              background: 'var(--gs)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--green)"
              strokeWidth="2"
              style={{ width: '16px', height: '16px' }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--green)', letterSpacing: '-0.4px' }}>
            {displayNetSalary}
          </p>
          <p style={{ fontSize: '11.5px', color: 'var(--ink3)', marginTop: '3px' }}>
            Net Salary
          </p>
          <p style={{ fontSize: '11px', color: 'var(--green)', marginTop: '5px', fontWeight: '500' }}>
            ✓ Paid · Mar 25
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '14px' }}>
        {/* LEFT: Salary Breakdown */}
        <div className="card">
          <div className="ch">
            <span className="ct">Salary Breakdown</span>
          </div>
          <div style={{ padding: '0 18px' }}>
            {SALARY_BREAKDOWN.map((item, index) => {
              const dotColor =
                item.label === 'Basic Salary'
                  ? 'var(--green)'
                  : item.label === 'HRA'
                  ? 'var(--blue)'
                  : item.label === 'Transport'
                  ? '#8B5CF6'
                  : item.label === 'Tax'
                  ? 'var(--red)'
                  : item.label === 'EOBI'
                  ? 'var(--amber)'
                  : 'var(--green)';

              const amountColor =
                item.label === 'Basic Salary'
                  ? 'var(--green)'
                  : item.label === 'HRA'
                  ? 'var(--blue)'
                  : item.label === 'Transport'
                  ? '#8B5CF6'
                  : item.label === 'Tax'
                  ? 'var(--red)'
                  : item.label === 'EOBI'
                  ? 'var(--amber)'
                  : 'var(--green)';

              return (
                <div
                  key={index}
                  style={{
                    padding: '13px 0',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '2px',
                        background: dotColor,
                      }}
                    />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink)' }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '11px', color: 'var(--ink3)', marginTop: '1px' }}>
                        {item.sublabel}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '13.5px', fontWeight: '600', color: amountColor }}>
                    {isVisible ? item.amount : '••••••'}
                  </p>
                </div>
              );
            })}
            {/* Net Salary Total Row */}
            <div
              style={{
                padding: '14px 0',
                background: 'var(--bg)',
                margin: '0 -18px',
                paddingLeft: '18px',
                paddingRight: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--ink)' }}>
                Net Salary
              </p>
              <p style={{ fontSize: '15px', fontWeight: '800', color: 'var(--green)' }}>
                {isVisible ? 'PKR 213,000' : 'PKR ••••••'}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Pay History */}
        <div className="card">
          <div className="ch">
            <span className="ct">Pay History</span>
          </div>
          <div style={{ padding: '0 16px' }}>
            {PAY_HISTORY.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '13px 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p style={{ fontSize: '13px', fontWeight: '500', color: 'var(--ink)' }}>
                    {item.month}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--ink3)', marginTop: '1px' }}>
                    {item.paidDate}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--ink)' }}>
                    {isVisible ? item.amount : '••••••'}
                  </p>
                  <span
                    className="bdg bg"
                    style={{ marginTop: '3px', display: 'inline-flex' }}
                  >
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayslipPage;
