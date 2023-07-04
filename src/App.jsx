import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { useLayoutEffect, useLocation } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

//Layout
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import Portfolio from './pages/portfolio/Portfolio'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Wrapper>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Wrapper>

  ),
  {
    basename: '/arch-studio-multipage-website',
  }
);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
