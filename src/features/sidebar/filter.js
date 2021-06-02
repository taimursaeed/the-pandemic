import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import FilterList from "./filterList";

export default function Filter(props) {
  const [filterdItems, setFilterdItems] = useState(props.data);

  const getFilterdItems = (data, val = "") => {
    return data?.filter((item) => item.name.includes(val));
  };

  const handleChange = (e) => {
    const filterVal = e.target.value.toLowerCase();
    setFilterdItems(getFilterdItems(props.data, filterVal));
  };
  useEffect(() => {
    setFilterdItems(props.data);
  }, [props]);

  return (
    <>
      <FormControl id="email" px={8} mb={4}>
        <FormLabel>Filter Countries</FormLabel>
        <Input
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
        />
      </FormControl>
      <FilterList data={filterdItems} />
    </>
  );
}
