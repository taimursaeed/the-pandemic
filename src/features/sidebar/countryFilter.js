import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { client } from "../../utils";
import { APL_BASE_URL } from "./../../constant";
import Filter from "./filter";
import { Spinner, Center } from "@chakra-ui/react";

export default function CountryFilter() {
  const [countries, setCountries] = useState(null);
  const fetchCountries = async () => {
    const res = await client.get(`${APL_BASE_URL}/countries`);
    setCountries(
      res.data.map((i) => {
        return { name: i.name.toLowerCase(), code: i.code };
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
        <Center mt={4}>
          <Spinner />
        </Center>
      )}
    </Flex>
  );
}
