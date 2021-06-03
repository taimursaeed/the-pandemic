import { Flex, Heading } from "@chakra-ui/react";
import CountryFilter from "./countryFilter";

export default function Sidebar() {
  return (
    <Flex flexDirection="column" height="100%">
      <Heading as="h1" size="lg" mb="8" px="8">
        Covid Tracker
      </Heading>
      <CountryFilter />
    </Flex>
  );
}
