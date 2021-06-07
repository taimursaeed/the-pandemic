import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import Dashboard from "./features/dashboard/dashboard";
import theme from "./theme";
import AppContext from "./context";
import { useState } from "react";
export default function App() {
  const [country, setCountry] = useState("AF");
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider value={{ country, setCountry }}>
        <Dashboard />
      </AppContext.Provider>
    </ChakraProvider>
  );
}
