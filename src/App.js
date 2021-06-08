import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/dashboard";
import theme from "./theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route path={["/:code", ""]}>
          <Dashboard />
        </Route>
      </Router>
    </ChakraProvider>
  );
}
