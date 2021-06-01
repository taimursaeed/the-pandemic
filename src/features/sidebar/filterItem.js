import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
export default function FilterItem(props) {
  return (
    <Link to={`/${props.code}`}>
      <Flex justifyContent="space-between" p={2}>
        {props.name}
        <strong>{props.code}</strong>
      </Flex>
    </Link>
  );
}
