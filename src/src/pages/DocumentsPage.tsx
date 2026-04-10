import React from 'react';
import { DOCUMENTS } from '../data/constants';

const DocumentsPage: React.FC = () => {
  const PlusIcon = () => (
    <svg
      width="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  return (
    <div className="pb">
      {/* Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ fontSize: '17px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.3px' }}>My Documents</div>
        <button className="bp" style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', padding: '9px 18px' }}>
          <PlusIcon />
          Upload
        </button>
      </div>

      {/* Documents Card */}
      <div className="card">
        <div style={{ padding: '14px 18px', fontSize: '13px', fontWeight: '500', color: 'var(--ink)', borderBottom: '1px solid var(--border)' }}>
          All Documents
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', padding: '16px' }}>
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.name}
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '18px',
                cursor: 'pointer',
                transition: 'box-shadow 0.15s',
              }}
            >
              {/* File Icon Container */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  flexShrink: 0,
                  backgroundColor: doc.bgColor,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={doc.color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>

              {/* Document Info */}
              <h3 style={{ fontSize: '13.5px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>
                {doc.name}
              </h3>
              <p style={{ fontSize: '12px', color: 'var(--ink3)' }}>
                {doc.type} · {doc.size}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
