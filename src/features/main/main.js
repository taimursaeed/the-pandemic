import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { APL_BASE_URL } from "../../constant";
import { client } from "../../utils";
import CountryGraph from "./countryGraph";
import CountrySummary from "./countrySummary";

export default function Main(props) {
  const [country, setCountry] = useState("");
  const fetchData = async () => {
    const res = await client.get(`${APL_BASE_URL}/countries/${props.country}`);
    setCountry(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <Flex flexDirection="column" height="100%">
      <CountrySummary {...country} />
      <CountryGraph {...country} />
    </Flex>
  );
}
