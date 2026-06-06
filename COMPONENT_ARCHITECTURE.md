# SevakSetu Dashboard - Component Architecture

## 🏗️ Component Hierarchy

```
Dashboard Layout
├── Sidebar
│   ├── Logo
│   └── Navigation Menu (7 items)
│
├── Main Area
│   ├── Topbar
│   │   ├── Status Text
│   │   ├── Search Bar
│   │   ├── Notification Bell
│   │   ├── Settings Button
│   │   └── User Profile
│   │
│   └── Dashboard Page
│       ├── Hero Section
│       │   ├── Title
│       │   ├── Description
│       │   └── Live Status Badge
│       │
│       ├── KPI Cards Section
│       │   ├── KPICard (Total Volunteers)
│       │   ├── KPICard (Active Volunteers)
│       │   ├── KPICard (Open Incidents)
│       │   └── KPICard (AI Assignments)
│       │
│       ├── Main Grid
│       │   ├── Left Column
│       │   │   ├── Zone Heatmap Section
│       │   │   │   └── ZoneHeatmapCard (x6)
│       │   │   │       ├── Zone Name
│       │   │   │       ├── Capacity Bar
│       │   │   │       ├── Volunteer Count
│       │   │   │       └── Incident Badge
│       │   │   │
│       │   │   └── AI Recommendations Section
│       │   │       └── AIRecommendationCard (x3)
│       │   │           ├── Title
│       │   │           ├── Description
│       │   │           ├── Confidence Score
│       │   │           └── Apply/Dismiss Buttons
│       │   │
│       │   └── Right Column
│       │       ├── Incident Overview
│       │       │   └── Priority Breakdown (x4)
│       │       │       ├── Critical
│       │       │       ├── High
│       │       │       ├── Medium
│       │       │       └── Low
│       │       │
│       │       └── Activity Feed
│       │           └── ActivityItem (x5)
│       │               ├── Avatar
│       │               ├── Activity Type Icon
│       │               ├── Description
│       │               ├── Metadata Tags
│       │               └── Timestamp
│       │
│       └── Footer CTA Section
│           ├── Title
│           ├── Description
│           └── View Analytics Button
```

---

## 📊 Data Flow

```
Dashboard Page (Client Component)
│
├── State Management
│   ├── isLoading: boolean
│   ├── selectedZone: string | null
│   └── useEffect for initial load
│
├── Data Sources
│   ├── ZONE_DATA (6 zones)
│   ├── AI_RECOMMENDATIONS (3 items)
│   └── SAMPLE_ACTIVITIES (5 items)
│
├── Event Handlers
│   ├── handleRecommendationApply()
│   ├── handleRecommendationDismiss()
│   └── Zone selection handler
│
└── Component Rendering
    ├── Conditional Loading: isLoading ? Skeleton : Content
    ├── Props Passing: data → components
    └── Event Handling: components → callbacks
```

---

## 🎨 Component Relationships

### Visual Layout Grid
```
┌─────────────────────────────────────────────┐
│              TOPBAR                         │ (sticky)
├──────────────┬───────────────────────────────┤
│              │                               │
│  SIDEBAR     │        MAIN CONTENT           │
│              ├───────────────────────────────┤
│              │     HERO SECTION              │
│  Dashboard   ├───────────────────────────────┤
│  Command Ctr │   KPI CARDS (4 COLUMNS)      │
│  Volunteers  ├─────────────────┬─────────────┤
│  Incidents   │                 │             │
│  AI Assign   │  HEATMAP        │  INCIDENTS  │
│  Analytics   │  (3x2 GRID)     │  ACTIVITY   │
│              │                 │             │
│              │  RECOMMEND.     │             │
│              │  (3 CARDS)      │             │
│              ├─────────────────┴─────────────┤
│              │     FOOTER CTA               │
└──────────────┴───────────────────────────────┘
```

---

## 🔄 State & Props Flow

### KPI Cards Flow
```
Dashboard (state: KPIs)
│
└─→ KPICard
    ├── Props: label, value, icon, trend
    ├── Internal: colors mapping
    └── Render: metric + icon + trend
```

### Zone Heatmap Flow
```
Dashboard (state: selectedZone)
│
└─→ Zone Grid
    ├── Map: ZONE_DATA.map()
    │
    └─→ ZoneHeatmapCard (x6)
        ├── Props: zone object
        ├── Handlers: onClick for selection
        ├── State: isHovered
        └── Render: zone info + capacity bar
```

### AI Recommendations Flow
```
Dashboard (handlers: apply/dismiss)
│
└─→ Recommendation Grid
    ├── Map: AI_RECOMMENDATIONS.map()
    │
    └─→ AIRecommendationCard (x3)
        ├── Props: recommendation, handlers
        ├── Handlers: onApply, onDismiss
        └── Render: suggestion + confidence
```

### Activity Feed Flow
```
Dashboard (data: SAMPLE_ACTIVITIES)
│
└─→ ActivityFeed
    ├── Props: activities array
    ├── Internal: getTimeAgo() utility
    └── Render: Timeline
        └─→ ActivityItem (x5)
            ├── Avatar
            ├── Activity type icon
            ├── Description
            ├── Metadata
            └── Timestamp
```

---

## 🎯 Component Dependencies

### Direct Dependencies
```
KPICard
└── lucide-react (LucideIcon)

ZoneHeatmapCard
├── lucide-react (Users, AlertCircle)
└── React.useState

AIRecommendationCard
├── lucide-react (TrendingUp, CheckCircle)
├── Button (UI component)
└── React props

IncidentOverview
├── lucide-react (AlertTriangle, etc)
└── React props

ActivityFeed
├── lucide-react (icons)
├── React.useState
└── Helper: getTimeAgo()

LoadingSkeleton
└── Tailwind classes only

PerformanceMetric
├── lucide-react (TrendingUp, TrendingDown)
└── React props

StatGrid
└── React props

StatusBadge
└── lucide-react

AlertBanner
├── lucide-react
└── React.useState
```

---

## 📦 Export Structure

### Dashboard Components
```ts
// components/dashboard/index.ts
export KPICard
export ZoneHeatmapCard
export AIRecommendationCard
export IncidentOverview
export ActivityFeed
export PerformanceMetric
export StatGrid
export LoadingSkeleton components
export StatusBadge (re-export)
export AlertBanner (re-export)
```

### UI Components
```ts
// components/ui/index.ts
export Button
export Card
export Input
export Badge
export StatusBadge
export AlertBanner
```

---

## 🎨 Style Architecture

### Color System
```
Primary Colors
├── Orange: #f97316 (main)
├── Mahakumbh: #7c2d12 (accent)
└── Cream: #fef5e7 (background)

Status Colors
├── Emerald: success, active
├── Red: error, critical
├── Amber: warning
├── Sky: info
└── Slate: neutral

Component Colors
├── bg-white: cards
├── bg-orange-50/100: highlights
├── bg-slate-50/100: neutrals
└── Gradients: various transitions
```

### Typography System
```
Headings
├── h1: text-4xl font-bold
├── h2: text-xl font-semibold
├── h3: text-lg font-semibold
└── h4: text-base font-semibold

Body
├── Regular: text-base/sm font-normal
├── Medium: text-sm/base font-medium
├── Semibold: text-sm/base font-semibold
└── Bold: text-sm/base font-bold

Labels
├── xs: text-xs font-medium
├── sm: text-sm font-medium
└── Uppercase: tracking-widest
```

### Spacing System
```
Padding
├── p-4 (1rem)
├── p-5 (1.25rem)
├── p-6 (1.5rem)
└── p-8 (2rem)

Gaps
├── gap-2 (0.5rem)
├── gap-3 (0.75rem)
├── gap-4 (1rem)
└── gap-6 (1.5rem)

Margins
├── mt-2/3/4/6
├── mb-4/6
└── space-y-3/4/6
```

### Border Radius
```
Rounded
├── rounded-lg: 0.5rem
├── rounded-xl: 0.75rem
├── rounded-2xl: 1rem (cards)
├── rounded-3xl: 1.5rem (buttons)
└── rounded-full: circles
```

---

## 🔌 API Integration Points

### Dashboard Level
```tsx
// Replace dummy data with API calls
useEffect(() => {
  Promise.all([
    fetch('/api/kpis'),
    fetch('/api/zones'),
    fetch('/api/recommendations'),
    fetch('/api/incidents'),
    fetch('/api/activities'),
  ]).then(/* update state */);
}, []);
```

### Component Level
```tsx
// Each component can be wrapped with hooks
const { data, loading } = useKPIs();
const { data, loading } = useZones();
// etc...
```

### Real-time Updates
```tsx
// WebSocket for live data
useEffect(() => {
  const ws = new WebSocket('wss://api/dashboard');
  ws.onmessage = (event) => {
    const update = JSON.parse(event.data);
    // update state
  };
}, []);
```

---

## 🧩 Component Reusability

### Used in Multiple Places
```
KPICard
└── Dashboard (x4)

Button
└── Used in 3+ components

LoadingSkeleton
└── Dashboard (x5 variants)

StatusBadge
└── Can be used throughout app

AlertBanner
└── System-wide alerts
```

### Customization Points
```
All components support:
├── Props-based customization
├── Color variants
├── Size variants
├── State management (loading)
├── Event handlers
└── TypeScript strict typing
```

---

## 🚀 Performance Optimization

### Current Optimizations
```
✅ Component memoization ready
✅ Lazy loading support
✅ Code splitting ready
✅ Image optimization ready
✅ CSS-in-JS (Tailwind)
✅ Responsive design
✅ No unnecessary re-renders
```

### Future Optimizations
```
[ ] Implement React.memo()
[ ] Add Suspense boundaries
[ ] Lazy load non-critical sections
[ ] Image optimization with Next Image
[ ] Virtualization for long lists
[ ] State management (Redux/Zustand)
```

---

## 📱 Responsive Behavior

### Breakpoint Behavior
```
Mobile (< 768px)
├── Single column layouts
├── Stacked sections
├── Full-width cards
└── Touch-friendly sizes

Tablet (768px - 1024px)
├── 2 column grids
├── Readable spacing
├── Optimized gaps
└── Medium buttons

Desktop (1024px+)
├── 4 column grids
├── Optimal spacing
├── Multiple columns
└── Standard buttons

Large (1400px+)
├── Max-width containers
├── Enhanced spacing
├── Premium layout
└── Comfortable interactions
```

---

**This architecture ensures maintainability, scalability, and performance while keeping the codebase clean and organized.**
