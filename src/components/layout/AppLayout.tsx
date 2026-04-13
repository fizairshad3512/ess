import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { closeSidebar } from '../../features/navigation/navigationSlice';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { mainColor, softColor, bgColor } = useAppSelector((state) => state.theme);
  const sidebarOpen = useAppSelector((state) => state.navigation.sidebarOpen);

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
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => dispatch(closeSidebar())} />
      )}

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
