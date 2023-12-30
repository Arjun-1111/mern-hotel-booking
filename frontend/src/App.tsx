import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";

const App = () => {
  // All pages are going to be a route
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <>homepage</>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <>searchpage</>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
export default App;
