import { useState } from 'react';
import ColorPicker from '../../features/theme/ColorPicker';
import { useAppSelector } from '../../app/hooks';

const Topbar: React.FC = () => {
  const { pageTitle } = useAppSelector((state) => state.navigation);
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="topbar">
      <div>
        <div className="tb-pg">{pageTitle}</div>
        <div className="tb-dt">Monday, 16 March 2026 · 11:00 AM</div>
      </div>
      <div className="tb-r" style={{ position: 'relative' }}>
        {/* Color Picker Dropdown */}
        {showColorPicker && <ColorPicker onClose={() => setShowColorPicker(false)} />}

        {/* Search */}
        <div className="tb-srch">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input placeholder="Search..." />
        </div>

        {/* Palette / Theme Toggle */}
        <div className="tb-ic" onClick={() => setShowColorPicker(!showColorPicker)} title="Change theme color">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 15, height: 15 }}>
            <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z" />
          </svg>
        </div>

        {/* Notification Bell */}
        <div className="tb-ic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <div className="ndot"></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
