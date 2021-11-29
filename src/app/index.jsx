import { Route, Routes } from "react-router";
import { HOME } from "config/routes";
import Posts from "./components/posts";

const AppRoot = () => {
  return (
    <main>
      <Routes>
        <Route path={HOME} element={<Posts />} />
      </Routes>
    </main>
  );
};

export default AppRoot;
