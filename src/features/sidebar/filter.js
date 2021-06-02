import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import FilterList from "./filterList";

export default function Filter({ data, ...props }) {
  const [filterdItems, setFilterdItems] = useState(data);

  const getFilterdItems = (items, val = "") => {
    return items?.filter((item) => item.name.includes(val));
  };

  const handleChange = (e) => {
    const filterVal = e.target.value.toLowerCase();
    setFilterdItems(getFilterdItems(data, filterVal));
  };
  useEffect(() => {
    setFilterdItems(data);
  }, [data]);

  return (
    <>
      <FormControl id="email" px={8} mb={4}>
        <FormLabel>Filter Countries</FormLabel>
        <Input
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          colorScheme="facebook"
          background="gray.100"
          focusBorderColor="black"
        />
      </FormControl>
      <FilterList data={filterdItems} {...props} />
    </>
  );
}
