import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";
import AppContext from "./../../context";
export default function Dashboard() {
  return (
    <Router>
      <AppContext.Consumer>
        {(value) => (
          <Flex height="100%">
            <Box bg="#FFC800" w="xs" py={8} height="100%" overflow="hidden">
              <Sidebar />
            </Box>
            <Box p={8} flex={1}>
              <Main {...value} />
            </Box>
          </Flex>
        )}
      </AppContext.Consumer>
    </Router>
  );
}
