import { Box, List, ListItem } from "@chakra-ui/react";
import FilterItem from "./filterItem";

export default function FilterList({ data, ...props }) {
  return (
    <Box overflow="auto" px={8}>
      <List>
        {data?.map((ele, i) => (
          <ListItem key={i}>
            <FilterItem name={ele.name} code={ele.code} {...props} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
