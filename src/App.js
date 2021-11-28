import PostProvider from "./store/posts/post-provider";
import AppRoot from "app/index";
import "./App.css";
import { ThemeProvider } from "@mui/system";
import { theme } from "config/theme";

function App() {
  return (
    <PostProvider>
      <ThemeProvider theme={theme}>
        <AppRoot />
      </ThemeProvider>
    </PostProvider>
  );
}

export default App;
