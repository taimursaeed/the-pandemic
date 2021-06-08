import { Flex, Skeleton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { client } from "../../utils";
import { APL_BASE_URL } from "./../../constant";
import Filter from "./filter";

export default function CountryFilter() {
  const [countries, setCountries] = useState(null);
  const fetchCountries = async () => {
    const res = await client.get(`${APL_BASE_URL}/countries`);
    setCountries(
      res.data
        .filter((i) => i.latest_data.confirmed > 0)
        .map(({ name, code }) => {
          return { name, code };
        })
    );
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <Flex flexDirection="column" overflow="auto" height="100%">
      <Filter data={countries} />
      {!countries && (
        <>
          <Skeleton
            isLoaded={countries}
            mx="8"
            mb="4"
            height="20px"
            startColor="yellow.500"
            endColor="yellow.800"
          />
          <Skeleton
            isLoaded={countries}
            mx="8"
            mb="4"
            height="20px"
            startColor="yellow.500"
            endColor="yellow.800"
          />
          <Skeleton
            isLoaded={countries}
            mx="8"
            mb="4"
            height="20px"
            startColor="yellow.500"
            endColor="yellow.800"
          />
        </>
      )}
    </Flex>
  );
}
