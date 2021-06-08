import { Box, Flex } from "@chakra-ui/react";
import Main from "../main/main";
import Sidebar from "../sidebar/sidebar";
export default function Dashboard() {
  return (
    <Flex height="100%" flexDirection={["column", "row"]}>
      <Box
        bg="#FFC800"
        pt={4}
        w={["100%", "350px"]}
        height={["500px", "100%"]}
        overflow="hidden"
      >
        <Sidebar />
      </Box>
      <Box p={8} flex={1} overflow={["auto", "hidden"]}>
        <Main />
      </Box>
    </Flex>
  );
}
