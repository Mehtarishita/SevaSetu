# SevakSetu Dashboard - Implementation Guide

## Quick Start

### Running the Dashboard
```bash
npm run dev
# Navigate to http://localhost:3000/dashboard
```

### File Structure
```
app/
  (dashboard)/
    dashboard/
      page.tsx           # Main dashboard page
    layout.tsx          # Dashboard layout with sidebar & topbar

components/
  dashboard/
    KPICard.tsx
    ZoneHeatmapCard.tsx
    AIRecommendationCard.tsx
    IncidentOverview.tsx
    ActivityFeed.tsx
    PerformanceMetric.tsx
    StatGrid.tsx
    LoadingSkeleton.tsx
    index.ts            # Barrel export
  
  layout/
    Topbar.tsx          # Enhanced with search
    Sidebar.tsx
  
  ui/
    Button.tsx
    Card.tsx
    Input.tsx
    StatusBadge.tsx
    AlertBanner.tsx
    Badge.tsx
    index.ts            # Barrel export
```

---

## Component Usage Examples

### 1. KPI Card
Display key metrics with icons, trends, and colors.

```tsx
import { KPICard } from "@/components/dashboard";
import { Users, TrendingUp } from "lucide-react";

<KPICard
  label="Total Volunteers"
  value="2,847"
  icon={Users}
  color="orange"
  trend={{ value: 12, isPositive: true }}
/>
```

**Props:**
- `label` (string) - Metric name
- `value` (string | number) - Main value
- `icon` (LucideIcon) - Icon component
- `color` ("orange" | "emerald" | "red" | "sky") - Color scheme
- `trend` (optional) - Trend indicator
- `isLoading` (optional) - Show skeleton

---

### 2. Zone Heatmap Card
Display zone capacity and incident information.

```tsx
import { ZoneHeatmapCard } from "@/components/dashboard";

const zone = {
  id: "zone_1",
  name: "Zone 1 - North Ghat",
  totalVolunteers: 142,
  activeVolunteers: 98,
  incidents: 2,
  capacity: 120,
};

<ZoneHeatmapCard zone={zone} />
```

**Features:**
- Color-coded capacity bar (red > 90%, orange > 70%, etc.)
- Incident alert badge
- Volunteer count display
- Interactive hover states

---

### 3. AI Recommendation Card
Show AI suggestions with confidence scores.

```tsx
import { AIRecommendationCard } from "@/components/dashboard";

const recommendation = {
  id: "rec_1",
  title: "Reallocate from Zone 1",
  description: "Move 8 volunteers...",
  volunteerId: "vol_1",
  volunteerName: "Arjun Singh",
  action: "Suggest reassignment...",
  confidence: 87,
  impact: "high" as const,
};

<AIRecommendationCard
  recommendation={recommendation}
  onApply={(id) => console.log("Applied:", id)}
  onDismiss={(id) => console.log("Dismissed:", id)}
/>
```

**Props:**
- `recommendation` - Recommendation object
- `onApply` (optional) - Apply button handler
- `onDismiss` (optional) - Dismiss button handler
- `isLoading` (optional) - Loading state

---

### 4. Incident Overview
Display incidents by priority level.

```tsx
import { IncidentOverview } from "@/components/dashboard";

<IncidentOverview
  stats={{
    critical: 3,
    high: 5,
    medium: 7,
    low: 3,
  }}
/>
```

**Props:**
- `stats` - Object with critical, high, medium, low counts
- `isLoading` (optional) - Loading state

---

### 5. Activity Feed
Timeline of volunteer activities.

```tsx
import { ActivityFeed } from "@/components/dashboard";

const activities = [
  {
    id: "act_1",
    type: "assignment",
    volunteer: { name: "Raj Patel", avatar: "RP" },
    description: "Assigned to Medical Team - Zone 2",
    timestamp: new Date(),
    metadata: { zone: "Zone 2", status: "Medical" },
  },
];

<ActivityFeed activities={activities} />
```

**Activity Types:** "assignment" | "checkin" | "checkout" | "alert" | "completion"

---

### 6. Status Badge
Indicate volunteer or task status.

```tsx
import { StatusBadge } from "@/components/ui";

<StatusBadge
  variant="active"
  label="Active"
  size="md"
  showDot
/>
```

**Variants:** "active" | "busy" | "offline" | "injured" | "success" | "warning" | "error" | "info"

**Sizes:** "sm" | "md" | "lg"

---

### 7. Alert Banner
Display system alerts and notifications.

```tsx
import { AlertBanner } from "@/components/ui";

<AlertBanner
  type="warning"
  title="High Fatigue Alert"
  message="5 volunteers have exceeded 8-hour work limit"
  action={{
    label: "View Rotation Options",
    onClick: () => handleRotation(),
  }}
  dismissible
/>
```

**Types:** "info" | "success" | "warning" | "error" | "critical"

---

### 8. Performance Metric
Display advanced metric with trends and sparklines.

```tsx
import { PerformanceMetric } from "@/components/dashboard";

<PerformanceMetric
  title="Volunteer Availability"
  value="78%"
  trend={{
    value: 5,
    isPositive: true,
    label: "from yesterday",
  }}
  comparison={{
    label: "vs Target",
    value: "80%",
    type: "warning",
  }}
  sparklineData={[65, 70, 68, 75, 78]}
/>
```

---

### 9. Stat Grid
Display multiple metrics in a grid.

```tsx
import { StatGrid } from "@/components/dashboard";

<StatGrid
  columns={4}
  stats={[
    {
      label: "Total Volunteers",
      value: "2,847",
      change: { value: 12, isPositive: true },
      valueColor: "text-orange-600",
    },
  ]}
/>
```

---

### 10. Loading Skeletons
Use pre-built skeletons during data loading.

```tsx
import {
  KPISkeletons,
  HeatmapSkeleton,
  RecommendationSkeleton,
  IncidentSkeleton,
  ActivitySkeleton,
} from "@/components/dashboard";

{isLoading ? <KPISkeletons /> : <ActualContent />}
```

---

## Integration with Backend

### Example API Integration

```tsx
"use client";

import { useEffect, useState } from "react";
import { KPICard } from "@/components/dashboard";

export default function Dashboard() {
  const [kpis, setKPIs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKPIs();
  }, []);

  const fetchKPIs = async () => {
    try {
      const response = await fetch("/api/dashboard/kpis");
      const data = await response.json();
      setKPIs(data);
    } catch (error) {
      console.error("Failed to fetch KPIs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-4">
      {loading ? (
        <KPISkeletons />
      ) : (
        kpis?.map((kpi) => (
          <KPICard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            icon={kpi.icon}
            trend={kpi.trend}
          />
        ))
      )}
    </div>
  );
}
```

---

## Real-time Updates (WebSocket)

```tsx
useEffect(() => {
  const ws = new WebSocket("wss://api.sevaksetu.com/dashboard");

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    if (data.type === "activity") {
      setActivities((prev) => [data.activity, ...prev]);
    } else if (data.type === "incident") {
      setIncidents((prev) => [...prev, data.incident]);
    }
  };

  return () => ws.close();
}, []);
```

---

## Styling & Customization

### Color Variants
- **Orange:** #f97316 (primary)
- **Emerald:** Emerald-600
- **Red:** Red-600
- **Sky:** Sky-600
- **Amber:** Amber-600

### Shadow System
- **soft:** Light shadow for cards
- **soft-md:** Medium shadow for elevated states

### Responsive Breakpoints
- **Mobile:** < 768px (single column)
- **Tablet:** 768px - 1024px (2 columns)
- **Desktop:** 1024px - 1400px (4 columns)
- **Large:** > 1400px (optimized spacing)

---

## Performance Optimization

### Code Splitting
Components are automatically code-split for faster loading.

### Image Optimization
Use Next.js Image component for avatar optimization:
```tsx
import Image from "next/image";

<Image
  src="/avatars/volunteer.jpg"
  alt="Volunteer"
  width={40}
  height={40}
/>
```

### Memoization
```tsx
import { memo } from "react";

const MemoizedCard = memo(ZoneHeatmapCard);
```

---

## Accessibility Features

- Semantic HTML (header, nav, main, section)
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Focus indicators on interactive elements
- Screen reader friendly

---

## Testing

### Component Testing
```tsx
import { render, screen } from "@testing-library/react";
import { KPICard } from "@/components/dashboard";
import { Users } from "lucide-react";

test("renders KPI card with value", () => {
  render(
    <KPICard
      label="Total Volunteers"
      value="2,847"
      icon={Users}
    />
  );
  
  expect(screen.getByText("2,847")).toBeInTheDocument();
});
```

---

## Deployment Checklist

- ✅ TypeScript compilation passes
- ✅ No console errors/warnings
- ✅ All images optimized
- ✅ Meta tags updated
- ✅ Mobile responsive tested
- ✅ Accessibility audit passed
- ✅ Performance metrics reviewed
- ✅ API endpoints verified
- ✅ Environment variables set
- ✅ Analytics configured

---

## Support & Resources

- **Lucide Icons:** https://lucide.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Next.js 15:** https://nextjs.org/docs
- **TypeScript:** https://www.typescriptlang.org

---

## Contributing

When adding new components:
1. Follow the existing file structure
2. Add TypeScript interfaces for props
3. Include loading/skeleton states
4. Support responsive design
5. Add JSDoc comments
6. Export from index.ts

---

**Built with ❤️ for Mahakumbh 2028**
