import { useAppSelector } from './app/hooks';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import TimesheetPage from './pages/TimesheetPage';
import LeavePage from './pages/LeavePage';
import TasksPage from './pages/TasksPage';
import PayslipPage from './pages/PayslipPage';
import FeedPage from './pages/FeedPage';
import DocumentsPage from './pages/DocumentsPage';
import ProfilePage from './pages/ProfilePage';
import type { PageId } from './types';

// ── Page Registry (Open/Closed Principle) ──
// Add new pages without modifying rendering logic
const PAGE_COMPONENTS: Record<PageId, React.ComponentType> = {
  home: HomePage,
  attendance: AttendancePage,
  timesheet: TimesheetPage,
  leave: LeavePage,
  tasks: TasksPage,
  pay: PayslipPage,
  feed: FeedPage,
  docs: DocumentsPage,
  profile: ProfilePage,
};

export default function App() {
  const activePage = useAppSelector((state) => state.navigation.activePage);
  const ActivePageComponent = PAGE_COMPONENTS[activePage] ?? HomePage;

  return (
    <AppLayout>
      <ActivePageComponent />
    </AppLayout>
  );
}
