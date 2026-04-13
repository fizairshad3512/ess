import Icon from '../../icons';
import { NAV_ITEMS, CURRENT_USER } from '../../data/constants';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setPage } from '../../features/navigation/navigationSlice';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activePage, sidebarOpen } = useAppSelector((state) => state.navigation);

  const handleNavClick = (itemId: string, itemLabel: string) => {
    dispatch(setPage({ page: itemId as any, title: itemLabel }));
  };

  return (
    <aside className={`side ${sidebarOpen ? 'open' : ''}`}>
      {/* Logo */}
      <div className="sb-logo">
        <div className="logo-sq">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17C2 23 12 24 12 24S22 23 22 17V7L12 2Z" fill="white" />
          </svg>
        </div>
        <div className="logo-txt">TMC <span>ESS</span></div>
      </div>

      {/* User Info */}
      <div className="sb-user">
        <div className="uav">{CURRENT_USER.initials}</div>
        <div>
          <div className="un">{CURRENT_USER.name}</div>
          <div className="ur">{CURRENT_USER.role}</div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="sb-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`ni ${activePage === item.id ? 'on' : ''}`}
            onClick={() => handleNavClick(item.id, item.label)}
          >
            <Icon name={item.icon} size={15} />
            <span>{item.label}</span>
            {item.badge && <span className="nb">{item.badge}</span>}
          </button>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="sb-foot">
        <button className="gs-btn">Getting Started</button>
      </div>
    </aside>
  );
};

export default Sidebar;
