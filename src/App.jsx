import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route
              path='/neet/online-coaching-class-11'
              element={<Class11Program />}
            />
            <Route
              path='/neet/online-coaching-class-12'
              element={<Class12Program />}
            />
            <Route path='/' element={<Landing />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
        Footer | Contact us
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav className='nav'>
        <div className='container nav-inner'>
          <Link to='/' className='logo' aria-label='Allen App Home'>
            <span style={{ width: 10, height: 10, background: 'var(--color-primary)', borderRadius: 2 }} />
            Allen
          </Link>
          <div className='nav-links'>
            <Link to='/dashboard' className='btn btn-primary'>Dashboard</Link>
            <Link to='/neet/online-coaching-class-11' className='btn'>Class 11</Link>
            <Link to='/neet/online-coaching-class-12' className='btn'>Class 12</Link>
          </div>
        </div>
      </nav>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <footer className='footer'>
        <div className='container'>Footer · Contact us</div>
      </footer>
    </div>
  )
}
function ErrorPage() {
  return <div>Sorry page not found</div>
}

function Landing() {
  return <div>welcome to allen</div>
}

function Class11Program() {
  return <div>NEET programs for class 11th</div>
}
function Class12Program() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate('/')
  }

  return (
    <div>
      NEET programs for class 12th
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  )
}

export default App
