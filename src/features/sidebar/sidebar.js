import { Heading } from "@chakra-ui/react";
import CountryFilter from "./countryFilter";
export default function Sidebar() {
  return (
    <div>
      <Heading as="h1" size="lg" mb={5}>
        Covid Tracker
      </Heading>
      <CountryFilter />
    </div>
  );
}
