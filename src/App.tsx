import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

export const App = () => {
  return <RouterProvider router={router} />;
};
