# ESS Employee React UI Components Library

A collection of reusable, production-ready React components built with TypeScript, Tailwind CSS, and CSS custom properties for theming. All components follow SOLID and DRY principles.

## Quick Start

Import components from the ui folder:

```tsx
import { Button, Card, CardHeader, Badge, Avatar, Table, ProgressBar, StatBox, TabGroup } from '@/components/ui';
```

## Components

### Avatar
Circle avatar displaying user initials.

```tsx
<Avatar initials="JD" size="md" color="var(--color-primary)" />
```

**Props:**
- `initials: string` - Text to display (auto-uppercased)
- `color?: string` - Background color
- `size?: 'sm' | 'md' | 'lg'` - sm: 27px, md: 32px, lg: 68px

### Badge
Pill-shaped status badge.

```tsx
<Badge variant="green">Active</Badge>
<Badge variant="amber">Pending</Badge>
<Badge variant="red">Inactive</Badge>
<Badge variant="blue">New</Badge>
```

**Props:**
- `variant: 'green' | 'amber' | 'red' | 'blue'` - Style variant
- `children: ReactNode` - Badge content

### Button
Styled button with primary and secondary variants.

```tsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

<Button variant="secondary" icon={<SaveIcon />}>
  Save
</Button>
```

**Props:**
- `variant: 'primary' | 'secondary'` - Button style
- `children: ReactNode` - Button text
- `onClick?: () => void` - Click handler
- `icon?: ReactNode` - Optional icon
- `className?: string` - Additional CSS classes
- `disabled?: boolean` - Disabled state
- `type?: 'button' | 'submit' | 'reset'` - HTML type

### Card
Container component for content sections.

```tsx
<Card>
  <CardHeader title="Section Title" action={<Button>Edit</Button>} />
  <div className="p-6">
    {/* Content */}
  </div>
</Card>
```

**Props:**
- `children: ReactNode` - Card content
- `className?: string` - Additional CSS classes

### CardHeader
Header for card content with title and optional action.

```tsx
<CardHeader 
  title="My Card Title"
  action={<Button variant="secondary">Action</Button>}
/>
```

**Props:**
- `title: string` - Header title
- `action?: ReactNode` - Right-aligned action element

### ProgressBar
Horizontal progress indicator.

```tsx
<ProgressBar percentage={65} />
<ProgressBar percentage={80} color="#22c55e" />
```

**Props:**
- `percentage: number` - Progress 0-100
- `color?: string` - Bar color (defaults to --color-primary)

### StatBox
Statistics display box.

```tsx
<StatBox value={1234} label="Total Users" />
<StatBox value="High" label="Priority" valueClassName="text-red-600" />
```

**Props:**
- `value: string | number` - Main value
- `label: string` - Description
- `valueClassName?: string` - Custom value styling

### Table
Data table with sortable columns.

```tsx
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' },
];

const data = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
];

<Table 
  columns={columns}
  data={data}
  renderCell={(key, row) => {
    if (key === 'status') {
      return <Badge variant="green">{row.status}</Badge>;
    }
    return row[key];
  }}
/>
```

**Props:**
- `columns: Array<{key, label}>` - Column definitions
- `data: any[]` - Row data
- `renderCell?: (key, row) => ReactNode` - Custom cell renderer

### TabGroup
Tab switcher component.

```tsx
const [activeTab, setActiveTab] = useState(0);

<TabGroup
  tabs={['Overview', 'Details', 'Settings']}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

**Props:**
- `tabs: string[]` - Tab labels
- `activeTab: number` - Active tab index
- `onTabChange: (index) => void` - Tab change handler

## Theming

All components support theming via CSS custom properties:

```css
--color-primary: #aa3bff (light) / #c084fc (dark)
--color-primary-soft: rgba(170, 59, 255, 0.1) (light) / rgba(192, 132, 252, 0.15) (dark)
--color-bg: #fff (light) / #16171d (dark)
```

Modify these in `src/index.css` to change the theme across all components.

## Dark Mode

All components include built-in dark mode support via:
1. Tailwind CSS `dark:` utilities
2. CSS custom properties that update in `@media (prefers-color-scheme: dark)`

## File Structure

```
src/components/ui/
├── Avatar.tsx              (42 lines)
├── Badge.tsx               (38 lines)
├── Button.tsx              (53 lines)
├── Card.tsx                (19 lines)
├── CardHeader.tsx          (19 lines)
├── ProgressBar.tsx         (31 lines)
├── StatBox.tsx             (22 lines)
├── TabGroup.tsx            (29 lines)
├── Table.tsx               (51 lines)
├── index.ts                (9 lines)
└── README.md               (this file)
```

## Design Principles

1. **Single Responsibility** - Each component has one purpose
2. **DRY** - Reusable patterns and shared base styles
3. **SOLID** - Modular, extensible composition
4. **Type Safety** - Full TypeScript support
5. **Accessibility** - Semantic HTML and proper ARIA
6. **Responsive** - Mobile-first Tailwind design
7. **Themeable** - CSS variables for colors
8. **Dark Mode** - Full dark mode support

## Contributing

When adding new components:
- Follow the same structure and naming conventions
- Use TypeScript interfaces for props
- Include CSS custom property support for colors
- Add appropriate Tailwind dark mode utilities
- Export from index.ts
- Keep components focused on a single responsibility
