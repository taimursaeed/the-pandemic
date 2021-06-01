import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { client } from "../../utils";
import { APL_BASE_URL } from "./../../constant";
import Filter from "./filter";

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
    <Flex flexDirection="column" overflow="auto">
      <Filter data={countries} />
    </Flex>
  );
}
