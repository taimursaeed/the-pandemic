import AppContext from "./../../context";
import CountrySummary from "./countrySummary";
import CountryGraph from "./countryGraph";
import React, { useEffect, useState } from "react";
import { APL_BASE_URL } from "../../constant";
import { client } from "../../utils";

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
    <>
      <CountrySummary {...country} />
      <CountryGraph {...country} />
    </>
  );
}
