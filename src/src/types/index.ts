// ── Core Domain Types (Interface Segregation Principle) ──

export type PageId =
  | 'home'
  | 'attendance'
  | 'timesheet'
  | 'leave'
  | 'tasks'
  | 'pay'
  | 'feed'
  | 'docs'
  | 'profile';

export type BadgeVariant = 'green' | 'amber' | 'red' | 'blue';

export type AttendanceStatus = 'present' | 'leave' | 'absent' | 'today' | 'default';

export type TaskStatus = 'overdue' | 'today' | 'done' | 'on-track' | 'in-review';

export type LeaveType = 'annual' | 'sick' | 'casual' | 'pending';

export type RequestStatus = 'pending' | 'approved' | 'rejected';

// ── Navigation ──
export interface NavItem {
  id: PageId;
  label: string;
  icon: string;
  badge?: number;
}

// ── Attendance ──
export interface AttendanceDay {
  day: string;
  date: number;
  status: AttendanceStatus;
}

export interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  duration: string;
  status: string;
  statusColor: string;
  checkInLocation: string | null;
  checkOutLocation: string | null;
}

export interface AttendanceInsight {
  label: string;
  value: string;
  icon: string;
  isAlert?: boolean;
}

// ── Timesheet ──
export interface TimesheetEntry {
  project: string;
  date: string;
  hours: string;
  notes: string;
  status: RequestStatus;
}

export interface TimesheetBar {
  day: string;
  hours: number;
  percentage: number;
  isPartial?: boolean;
}

// ── Leave ──
export interface LeaveBalance {
  type: string;
  total: number;
  used: number;
  remaining: number;
  color: BadgeVariant;
  icon: string;
}

export interface LeaveRequest {
  type: string;
  dateApplied: string;
  duration: string;
  status: RequestStatus;
  icon: string;
  iconColor: string;
  iconBg: string;
}

export interface RequestType {
  label: string;
  icon: string;
}

// ── Tasks ──
export interface Task {
  id: string;
  name: string;
  category: string;
  due: string;
  dueColor?: string;
  status: TaskStatus;
  completed: boolean;
}

// ── Feed ──
export interface FeedPost {
  id: string;
  authorInitials: string;
  authorName: string;
  authorRole: string;
  authorColor: string;
  time: string;
  body: string;
  emoji: string;
  likes: number;
  likeText: string;
  comments: string;
  liked: boolean;
}

// ── Payroll ──
export interface SalaryBreakdownItem {
  label: string;
  sublabel: string;
  amount: string;
  color: string;
  dotColor: string;
  isDeduction?: boolean;
}

export interface PayHistoryItem {
  month: string;
  paidDate: string;
  amount: string;
}

// ── Documents ──
export interface Document {
  name: string;
  type: string;
  size: string;
  color: string;
  bgColor: string;
}

// ── Profile ──
export interface ProfileField {
  label: string;
  value: string;
  isLink?: boolean;
}

// ── Performance ──
export interface PerformanceProject {
  code: string;
  hours: string;
  task: string;
  status: string;
  statusColor: string;
}

// ── Theme ──
export interface ThemeColor {
  main: string;
  soft: string;
  bg: string;
  label: string;
}
