import type {
  NavItem,
  AttendanceDay,
  AttendanceRecord,
  AttendanceInsight,
  TimesheetEntry,
  TimesheetBar,
  LeaveBalance,
  LeaveRequest,
  RequestType,
  Task,
  FeedPost,
  SalaryBreakdownItem,
  PayHistoryItem,
  Document,
  ProfileField,
  PerformanceProject,
  ThemeColor,
} from '../types';

// ── Navigation ──
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'attendance', label: 'My Attendance', icon: 'clock' },
  { id: 'timesheet', label: 'My Timesheet', icon: 'chart' },
  { id: 'leave', label: 'Leave & Requests', icon: 'calendar', badge: 2 },
  { id: 'tasks', label: 'My Tasks', icon: 'clipboard' },
  { id: 'pay', label: 'Payslip', icon: 'dollar' },
  { id: 'feed', label: 'Team Feed', icon: 'users' },
  { id: 'docs', label: 'Documents', icon: 'folder' },
  { id: 'profile', label: 'My Profile', icon: 'user' },
];

// ── User ──
export const CURRENT_USER = {
  initials: 'FI',
  name: 'Fiza Irshad',
  role: 'Software Engineer',
  employeeId: 'TMC-2024-0142',
  email: 'fiza@tmc.com',
  phone: '+92 300 1234567',
  joiningDate: 'Jan 10, 2022',
  department: 'Human Resources',
  designation: 'HR Manager',
  reportsTo: 'Ahmed Qureshi',
  workType: 'On-site',
  contract: 'Permanent',
  location: 'Lahore',
  company: 'TMC Group',
  years: '4.2',
  attendancePercent: '94%',
  performancePercent: '91%',
};

// ── Theme Colors ──
export const THEME_COLORS: ThemeColor[] = [
  { main: '#7C3AED', soft: '#EDE9FE', bg: '#F8F7FF', label: 'Purple' },
  { main: '#0EA25A', soft: '#E8FAF0', bg: '#F8FAF8', label: 'Green' },
  { main: '#2563EB', soft: '#EFF6FF', bg: '#F7F9FF', label: 'Blue' },
  { main: '#DC2626', soft: '#FEF2F2', bg: '#FFF7F7', label: 'Red' },
  { main: '#D97706', soft: '#FFFBEB', bg: '#FFFDF5', label: 'Amber' },
  { main: '#0891B2', soft: '#ECFEFF', bg: '#F5FEFF', label: 'Cyan' },
  { main: '#BE185D', soft: '#FDF2F8', bg: '#FFF5FB', label: 'Pink' },
  { main: '#374151', soft: '#F3F4F6', bg: '#F9FAFB', label: 'Slate' },
];

// ── Attendance ──
export const ATTENDANCE_WEEK: AttendanceDay[] = [
  { day: 'Mon', date: 10, status: 'present' },
  { day: 'Tue', date: 11, status: 'present' },
  { day: 'Wed', date: 12, status: 'present' },
  { day: 'Thu', date: 13, status: 'leave' },
  { day: 'Fri', date: 14, status: 'present' },
  { day: 'Sat', date: 15, status: 'absent' },
  { day: 'Sun', date: 16, status: 'today' },
];

export const ATTENDANCE_INSIGHTS: AttendanceInsight[] = [
  { label: 'Total Time Spent', value: '69h 32m', icon: 'clock' },
  { label: 'Average Check-In Time', value: '09:39 AM', icon: 'user' },
  { label: 'Average Check-Out Time', value: '04:36 PM', icon: 'user' },
  { label: 'Average Duration', value: '6h 57m', icon: 'clock' },
  { label: 'Total Absences', value: '0', icon: 'user-minus', isAlert: true },
];

export const ATTENDANCE_RECORDS: AttendanceRecord[] = [
  { date: '17/03/2026', checkIn: '09:41 AM', checkOut: 'Not recorded', duration: '0 hours 0 minutes', status: 'Missing Punch', statusColor: 'red', checkInLocation: 'Inside Location', checkOutLocation: null },
  { date: '16/03/2026', checkIn: '10:05 AM', checkOut: '03:57 PM', duration: '5 hours 51 minutes', status: 'Present', statusColor: 'green', checkInLocation: 'Inside Location', checkOutLocation: 'Inside Location' },
  { date: '13/03/2026', checkIn: 'Not recorded', checkOut: 'Not recorded', duration: '0 hours 0 minutes', status: 'Submitted Leave Request', statusColor: 'ink', checkInLocation: null, checkOutLocation: null },
  { date: '12/03/2026', checkIn: '09:39 AM', checkOut: '04:16 PM', duration: '6 hours 37 minutes', status: 'Present', statusColor: 'green', checkInLocation: 'Inside Location', checkOutLocation: 'Inside Location' },
  { date: '11/03/2026', checkIn: '09:45 AM', checkOut: '04:07 PM', duration: '6 hours 22 minutes', status: 'Present', statusColor: 'green', checkInLocation: 'Inside Location', checkOutLocation: 'Inside Location' },
];

// ── Timesheet ──
export const TIMESHEET_BARS: TimesheetBar[] = [
  { day: 'Mon', hours: 9.2, percentage: 96 },
  { day: 'Tue', hours: 8.5, percentage: 88 },
  { day: 'Wed', hours: 8.7, percentage: 90 },
  { day: 'Thu', hours: 5.8, percentage: 60, isPartial: true },
  { day: 'Fri', hours: 5.8, percentage: 58, isPartial: true },
];

export const TIMESHEET_ENTRIES: TimesheetEntry[] = [
  { project: 'Design System', date: '16 Jun 2025', hours: '8h', notes: 'UI component library updates', status: 'approved' },
  { project: 'API Integration', date: '16 Jun 2025', hours: '8h', notes: 'REST API endpoint testing', status: 'pending' },
  { project: 'QA Review', date: '16 Jun 2025', hours: '8h', notes: 'Test case documentation', status: 'approved' },
  { project: 'Project Alpha', date: '14 Jun 2025', hours: '6h', notes: 'Sprint planning session', status: 'pending' },
];

// ── Leave ──
export const LEAVE_BALANCES: LeaveBalance[] = [
  { type: 'Annual Leave', total: 24, used: 18, remaining: 6, color: 'green', icon: 'calendar' },
  { type: 'Sick Leave', total: 10, used: 3, remaining: 7, color: 'red', icon: 'heart' },
  { type: 'Casual Leave', total: 6, used: 4, remaining: 2, color: 'amber', icon: 'sun' },
];

export const REQUEST_TYPES: RequestType[] = [
  { label: 'Leave', icon: 'calendar' },
  { label: 'Remote Work', icon: 'briefcase' },
  { label: 'Missing Punch', icon: 'clock' },
  { label: 'Financial Claim', icon: 'dollar' },
  { label: 'Business Trip', icon: 'phone' },
];

export const LEAVE_REQUESTS: LeaveRequest[] = [
  { type: 'Annual Leave', dateApplied: '10 Mar 2026', duration: 'Mar 18–20 · 3 days', status: 'pending', icon: 'calendar', iconColor: 'var(--amber)', iconBg: 'as' },
  { type: 'Sick Leave', dateApplied: '05 Mar 2026', duration: 'Mar 17 · 1 day', status: 'approved', icon: 'heart', iconColor: 'var(--red)', iconBg: 'rs' },
  { type: 'Work From Home', dateApplied: '01 Mar 2026', duration: 'Mar 12 · 1 day', status: 'approved', icon: 'briefcase', iconColor: 'var(--green)', iconBg: 'gs' },
  { type: 'Casual Leave', dateApplied: '20 Feb 2026', duration: 'Feb 25 · 1 day', status: 'rejected', icon: 'calendar', iconColor: 'var(--amber)', iconBg: 'as' },
];

// ── Tasks ──
export const INITIAL_TASKS: Task[] = [
  { id: '1', name: 'Review Q1 HR compliance reports', category: 'HR Operations', due: 'Due Mar 14 — overdue', dueColor: 'red', status: 'overdue', completed: false },
  { id: '2', name: 'Onboarding documentation for Nadia', category: 'Recruitment', due: 'Due Today', dueColor: 'amber', status: 'today', completed: false },
  { id: '3', name: 'Submit monthly attendance report', category: 'Administration', due: 'Completed', status: 'done', completed: true },
  { id: '4', name: 'UI Design Sprint review', category: 'Project 1074', due: 'Due Mar 20', status: 'on-track', completed: false },
  { id: '5', name: 'Backend Integration testing', category: 'Project 1094', due: 'Due Mar 22', status: 'in-review', completed: false },
];

// ── Feed ──
export const INITIAL_POSTS: FeedPost[] = [
  {
    id: '1', authorInitials: 'JS', authorName: 'John Smith', authorRole: 'Engineer',
    authorColor: '#4F46E5', time: '15h ago',
    body: 'SAP\'s recent updates include <b>AI-powered features</b> and a new focus on <b>ABAP Cloud development</b>.',
    emoji: '👍', likes: 36, likeText: 'Raymond and 35 others', comments: '3 Comments', liked: false,
  },
  {
    id: '2', authorInitials: 'MR', authorName: 'Maria Roberts', authorRole: 'Product Lead',
    authorColor: '#D97706', time: '2h ago',
    body: 'Reminder: <b>Q4 planning</b> starts next Monday. Please complete retrospectives by end of week.',
    emoji: '👍', likes: 12, likeText: '12 people reacted', comments: '1 Comment', liked: false,
  },
  {
    id: '3', authorInitials: 'FI', authorName: 'Fiza Irshad', authorRole: 'Software Engineer',
    authorColor: '#7C3AED', time: '1d ago',
    body: 'Welcome to the team, <b>Nadia Javed!</b> 🎉 She joins us as Marketing Specialist. Please give her a warm welcome!',
    emoji: '🎉', likes: 48, likeText: 'Ahmed and 47 others', comments: '8 Comments', liked: false,
  },
];

// ── Payroll ──
export const SALARY_BREAKDOWN: SalaryBreakdownItem[] = [
  { label: 'Basic Salary', sublabel: 'Monthly fixed', amount: '+ PKR 180,000', color: 'green', dotColor: 'bg-purple-600' },
  { label: 'House Rent Allowance', sublabel: 'Monthly', amount: '+ PKR 30,000', color: 'blue', dotColor: 'bg-blue-600' },
  { label: 'Transport Allowance', sublabel: 'Monthly', amount: '+ PKR 15,000', color: 'violet', dotColor: 'bg-violet-500' },
  { label: 'Income Tax', sublabel: 'Deduction', amount: '− PKR 9,500', color: 'red', dotColor: 'bg-red-600', isDeduction: true },
  { label: 'EOBI Contribution', sublabel: 'Deduction', amount: '− PKR 2,500', color: 'amber', dotColor: 'bg-amber-600', isDeduction: true },
];

export const PAY_HISTORY: PayHistoryItem[] = [
  { month: 'March 2026', paidDate: 'Paid Mar 25', amount: '213,000' },
  { month: 'February 2026', paidDate: 'Paid Feb 25', amount: '213,000' },
  { month: 'January 2026', paidDate: 'Paid Jan 25', amount: '210,000' },
  { month: 'December 2025', paidDate: 'Paid Dec 25', amount: '210,000' },
  { month: 'November 2025', paidDate: 'Paid Nov 25', amount: '205,000' },
];

// ── Documents ──
export const DOCUMENTS: Document[] = [
  { name: 'Payslip March 2026', type: 'PDF', size: '245 KB', color: '#C0392B', bgColor: '#FEF2F2' },
  { name: 'Offer Letter', type: 'PDF', size: '128 KB', color: '#1D4ED8', bgColor: '#EFF6FF' },
  { name: 'Employment Contract', type: 'PDF', size: '312 KB', color: '#7C3AED', bgColor: '#F5F3FF' },
  { name: 'NDA Agreement', type: 'PDF', size: '89 KB', color: '#B45309', bgColor: '#FFFBEB' },
  { name: 'Payslip Feb 2026', type: 'PDF', size: '243 KB', color: '#C0392B', bgColor: '#FEF2F2' },
  { name: 'Degree Certificate', type: 'PDF', size: '2.1 MB', color: '#1D4ED8', bgColor: '#EFF6FF' },
];

// ── Profile Fields ──
export const PERSONAL_INFO: ProfileField[] = [
  { label: 'Full name', value: CURRENT_USER.name },
  { label: 'Employee ID', value: CURRENT_USER.employeeId },
  { label: 'Email', value: CURRENT_USER.email, isLink: true },
  { label: 'Phone', value: CURRENT_USER.phone },
  { label: 'Joining date', value: CURRENT_USER.joiningDate },
];

export const JOB_DETAILS: ProfileField[] = [
  { label: 'Department', value: CURRENT_USER.department },
  { label: 'Designation', value: CURRENT_USER.designation },
  { label: 'Reports to', value: CURRENT_USER.reportsTo },
  { label: 'Work type', value: CURRENT_USER.workType },
  { label: 'Contract', value: CURRENT_USER.contract },
];

// ── Performance ──
export const ASSIGNED_PROJECTS: PerformanceProject[] = [
  { code: '1074', hours: '20 hrs', task: 'Task 1', status: 'Approved', statusColor: 'green' },
  { code: '1094', hours: '15 hrs', task: 'Task 1', status: 'Approved', statusColor: 'green' },
];

export const UNASSIGNED_PROJECTS: PerformanceProject[] = [
  { code: '1102', hours: '10 hrs', task: 'Task 2', status: 'Pending', statusColor: 'amber' },
];
