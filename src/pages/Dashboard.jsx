import { Link } from 'react-router-dom'

function StatCard({ label, value, trendLabel }) {
  return (
    <div className="surface card" role="group" aria-label={label}>
      <div className="stat">
        <div className="stat-value" aria-live="polite">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
      {trendLabel ? (
        <div className="muted" style={{ marginTop: 8 }}>{trendLabel}</div>
      ) : null}
    </div>
  )
}

function ModuleCard({ title, description, to, tag }) {
  return (
    <div className="surface card" role="region" aria-label={title}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <h3 className="card-title">{title}</h3>
        {tag ? <span className="tag" aria-label="badge">{tag}</span> : null}
      </div>
      <p className="muted" style={{ marginTop: 4, marginBottom: 16 }}>{description}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Link className="btn btn-primary" to={to} aria-label={`Open ${title}`}>
          Open {title}
        </Link>
        <button className="btn" type="button" aria-label={`${title} quick actions`}>
          Quick actions
        </button>
      </div>
    </div>
  )
}

function AnalyticsCard() {
  // Simple inline SVG area chart (no dependency)
  return (
    <div className="surface card" role="region" aria-label="Analytics">
      <h3 className="card-title">Analytics</h3>
      <p className="muted" style={{ marginTop: 4 }}>Last 7 days user activity</p>
      <div style={{ marginTop: 12 }}>
        <svg viewBox="0 0 300 120" width="100%" height="140" role="img" aria-label="Line chart last 7 days">
          <desc>Line chart showing activity trend over the last 7 days</desc>
          <defs>
            <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#a)"
            stroke="none"
            points="0,100 0,80 50,70 100,85 150,60 200,55 250,40 300,50 300,100"
          />
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="0,80 50,70 100,85 150,60 200,55 250,40 300,50"
          />
          <g stroke="rgba(255,255,255,0.08)">
            <line x1="0" x2="300" y1="100" y2="100" />
            <line x1="0" x2="300" y1="80" y2="80" />
            <line x1="0" x2="300" y1="60" y2="60" />
            <line x1="0" x2="300" y1="40" y2="40" />
          </g>
        </svg>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button className="btn" type="button">View detailed report</button>
        <button className="btn" type="button">Export</button>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <header className="surface" style={{ padding: 20, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <div className="tag">Allen App</div>
            <h1 className="heading" style={{ marginTop: 8 }}>Welcome back</h1>
            <p className="muted" style={{ marginTop: 6 }}>Here’s a quick snapshot of your application health.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn">Invite user</button>
            <button className="btn btn-primary">Create course</button>
          </div>
        </div>
      </header>

      <section aria-labelledby="summary-heading" style={{ marginBottom: 16 }}>
        <h2 id="summary-heading" className="sr-only">Summary statistics</h2>
        <div className="grid grid-cols-3">
          <StatCard label="Total users" value="12,480" trendLabel="+3.2% vs last week" />
          <StatCard label="Active sessions" value="842" trendLabel="-1.1% today" />
          <StatCard label="Course enrollments" value="3,156" trendLabel="+8.9% MoM" />
        </div>
      </section>

      <section aria-labelledby="modules-heading" style={{ marginBottom: 16 }}>
        <h2 id="modules-heading" className="sr-only">Key modules</h2>
        <div className="grid grid-cols-3">
          <ModuleCard
            title="Users"
            description="Manage users, roles, and invitations."
            to="/dashboard/users"
            tag="Admin"
          />
          <ModuleCard
            title="Courses"
            description="Create and organize learning content."
            to="/dashboard/courses"
            tag="Content"
          />
          <ModuleCard
            title="Reports"
            description="Track performance and engagement metrics."
            to="/dashboard/reports"
            tag="Insights"
          />
        </div>
      </section>

      <section aria-labelledby="analytics-heading">
        <h2 id="analytics-heading" className="sr-only">Analytics</h2>
        <AnalyticsCard />
      </section>
    </main>
  )
}


