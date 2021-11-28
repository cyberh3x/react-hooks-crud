import { Route, Routes } from "react-router";
import Posts from "./components/posts";

const AppRoot = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </main>
  );
};

export default AppRoot;
