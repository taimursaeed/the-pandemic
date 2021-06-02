import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { APL_BASE_URL } from "../../constant";
import { client } from "../../utils";

export default function CountrySummary(props) {
  const [country, setCountry] = useState(props.country);
  const fetchData = async () => {
    const res = await client.get(`${APL_BASE_URL}/countries/${props.country}`);
    setCountry(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <>
      {typeof country === "object" && (
        <>
          <Heading as="h2" size="lg" mb={8}>
            {country.name}
          </Heading>
          <small>{country.updated_at}</small>
          <Flex color="white">
            <Box
              flex="1"
              bg="gray.100"
              boxShadow="md"
              p="4"
              rounded="8"
              color="black"
            >
              <Heading as="h3" size="md" mb="2">
                Total
              </Heading>
              <Text fontSize="2xl">{country.latest_data.confirmed || 0}</Text>
            </Box>
            <Spacer />
            <Box flex="1" bg="blue.400" boxShadow="md" p="4" rounded="8">
              <Heading as="h3" size="md" mb="2">
                Active
              </Heading>
              <Text fontSize="2xl">{country.timeline[0]?.active || 0}</Text>
            </Box>
            <Spacer />
            <Box flex="1" bg="red.400" boxShadow="md" p="4" rounded="8">
              <Heading as="h3" size="md" mb="2">
                Fatal
              </Heading>
              <Text fontSize="2xl">{country.latest_data.deaths || 0}</Text>
            </Box>
            <Spacer />
            <Box flex="1" bg="green.400" boxShadow="md" p="4" rounded="8">
              <Heading as="h3" size="md" mb="2">
                Recovered
              </Heading>
              <Text fontSize="2xl">{country.latest_data.recovered || 0}</Text>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
}
