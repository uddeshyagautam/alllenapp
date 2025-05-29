import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
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
    <div style={{ height: '100vh' }}>
      <Link to='/'>Allen</Link>|
      <Link to='/neet/online-coaching-class-11'>Class 11</Link>|
      <Link to='/neet/online-coaching-class-12'>Class 12</Link>
      <div style={{ height: '90vh' }}>
        <Outlet />
      </div>
      footer
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
