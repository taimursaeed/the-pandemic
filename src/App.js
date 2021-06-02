import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import Dashboard from "./features/dashboard/dashboard";
import theme from "./theme";
import AppContext from "./context";
export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value="PK">
        <Dashboard />
      </AppContext.Provider>
    </ChakraProvider>
  );
}
