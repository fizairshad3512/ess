import { useRef, useEffect, useState } from 'react';
import { THEME_COLORS } from '../../data/constants';
import { useAppDispatch } from '../../app/hooks';
import { setTheme } from './themeSlice';

interface ColorPickerProps {
  onClose?: () => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const pickerRef = useRef<HTMLDivElement>(null);
  const [customColor, setCustomColor] = useState('#7C3AED');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleColorSelect = (color: typeof THEME_COLORS[0]) => {
    dispatch(setTheme(color));
    onClose?.();
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setCustomColor(color);
    // Create a temporary theme object for custom color
    dispatch(setTheme({
      main: color,
      soft: color + '20', // Light version
      bg: color + '10', // Very light version
      label: 'Custom',
    }));
  };

  return (
    <div ref={pickerRef} className="color-panel">
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ink)', marginBottom: '12px' }}>
          Color Theme
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {THEME_COLORS.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorSelect(color)}
              className="sw"
              style={{ backgroundColor: color.main }}
              title={color.label}
            />
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <label style={{ fontSize: '12px', fontWeight: '600', color: 'var(--ink)', display: 'block', marginBottom: '8px' }}>
          Custom Color
        </label>
        <input
          type="color"
          value={customColor}
          onChange={handleCustomColorChange}
          style={{ width: '100%', height: '40px', borderRadius: '7px', border: 'none', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
