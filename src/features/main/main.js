import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { APL_BASE_URL } from "../../constant";
import { client } from "../../utils";
import CountryGraph from "./countryGraph";
import CountrySummary from "./countrySummary";

export default function Main(props) {
  const [country, setCountry] = useState("");

  const fetchData = useCallback(async (slug) => {
    const res = await client.get(`${APL_BASE_URL}/countries/${slug}`);
    setCountry(res.data);
  }, []);

  useEffect(() => {
    fetchData(props.country);
  }, [props, fetchData]);

  return (
    <Flex flexDirection="column" height="100%">
      <CountrySummary {...country} />
      <CountryGraph {...country} />
    </Flex>
  );
}
