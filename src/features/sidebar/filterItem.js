import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function FilterItem(props) {
  return (
    <Link to={`/${props.code}`}>
      <Flex
        justifyContent="space-between"
        p={4}
        bg="white"
        boxShadow="sm"
        mb={2}
        rounded="md"
      >
        {props.name}
        <Box ml={4}>
          <strong>{props.code}</strong>
        </Box>
      </Flex>
    </Link>
  );
}
