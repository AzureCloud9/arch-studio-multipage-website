import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter({
  basename: '/arch-studio-multipage-website',
  routes: createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
