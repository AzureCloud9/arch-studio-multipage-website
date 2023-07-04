import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"



//Layout
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import Portfolio from './pages/portfolio/Portfolio'
import About from "./pages/about/About"

  

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound />} />
      </Route>

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
