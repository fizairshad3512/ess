import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAppSelector } from '../../app/hooks';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { mainColor, softColor, bgColor } = useAppSelector((state) => state.theme);

  const themeVars = {
    '--green': mainColor,
    '--gs': softColor,
    '--bg': bgColor,
    '--color-primary': mainColor,
    '--color-primary-soft': softColor,
    '--color-primary-bg': bgColor,
  } as React.CSSProperties;

  return (
    <div className="app" style={themeVars}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <div className="page show">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
