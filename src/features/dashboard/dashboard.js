import { Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";
export default function Dashboard() {
  return (
    <Router>
      <Flex height="100%">
        <Box bg="green.500" w="xs" p={8}>
          <Sidebar />
        </Box>
        <Box bg="tomato" p={8} flex={1}>
          <Main />
        </Box>
      </Flex>
    </Router>
  );
}
