import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";
export default function Dashboard() {
  return (
    <Router>
      <Flex height="100%">
        <Box bg="blue.100" w="xs" py={8} height="100%" overflow="hidden">
          <Sidebar />
        </Box>
        <Box p={8} flex={1}>
          <Main />
        </Box>
      </Flex>
    </Router>
  );
}
