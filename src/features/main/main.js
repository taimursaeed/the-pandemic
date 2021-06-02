import { Flex, Heading } from "@chakra-ui/react";
import AppContext from "./../../context";
export default function Main() {
  return (
    <AppContext.Consumer>
      {(value) => (
        <Heading as="h2" size="lg" mb={8}>
          {value.country}
        </Heading>
      )}
    </AppContext.Consumer>
  );
}
