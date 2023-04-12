import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './routes/home/home';
import Auth from './routes/auth/auth';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" index element={<Auth />} />
        <Route path="home" index element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
