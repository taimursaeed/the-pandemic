import { Flex, Heading } from "@chakra-ui/react";
import CountryFilter from "./countryFilter";
import { ReactComponent as Logo } from "./../../assets/logo.svg";

export default function Sidebar() {
  return (
    <Flex flexDirection="column" height="100%">
      <Logo style={{ width: "10rem", margin: "auto" }} />
      <Heading as="h1" size="lg" mb="5" mt="2" px="8" textAlign="center">
        Covid Tracker
      </Heading>
      <CountryFilter />
    </Flex>
  );
}
