import { Box, Button, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
export default function FilterItem(props) {
  const history = useHistory();
  const handleClick = () => {
    props.setItem(`${props.code}`);
    history.push(`/${props.code}`);
  };
  return (
    <Button
      onClick={handleClick}
      boxShadow="md"
      mb="2"
      p="4"
      isFullWidth
      style={{
        whiteSpace: "normal",
        wordWrap: "break-word",
        height: "auto",
      }}
      colorScheme="black"
      variant="outline"
    >
      <Flex justifyContent="space-between" flex="1" textAlign="left">
        {props.name}
        <Box ml="4">
          <strong>{props.code}</strong>
        </Box>
      </Flex>
    </Button>
  );
}
