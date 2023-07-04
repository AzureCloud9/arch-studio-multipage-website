import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from "react-router-dom"



//Layout
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"
import Portfolio from './pages/portfolio/Portfolio'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
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
