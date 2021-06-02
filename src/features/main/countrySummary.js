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

  const getFormatedDate = (date) => {
    const updateTime = ((Date.now() - new Date(date)) / (60 * 1000)).toFixed();
    if (!updateTime) return "Updated just now";
    else if (updateTime < 60) return `Updated ${updateTime} mins ago`;
    else return "Updated more than an hour ago";
  };

  return (
    <>
      {typeof country === "object" && (
        <>
          <Flex alignItems="center" mb="8">
            <Heading as="h2" size="lg">
              {country.name}
            </Heading>
            <Text ml="4">
              <small>{getFormatedDate(country.updated_at)}</small>
            </Text>
          </Flex>
          <Flex>
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
            <Box flex="1" bg="gray.100" boxShadow="md" p="4" rounded="8">
              <Heading as="h3" size="md" mb="2">
                Active
              </Heading>
              <Text fontSize="2xl">{country.timeline[0]?.active || 0}</Text>
            </Box>
            <Spacer />
            <Box flex="1" bg="gray.100" boxShadow="md" p="4" rounded="8">
              <Heading as="h3" size="md" mb="2">
                Fatal
              </Heading>
              <Text fontSize="2xl">{country.latest_data.deaths || 0}</Text>
            </Box>
            <Spacer />
            <Box flex="1" bg="gray.100" boxShadow="md" p="4" rounded="8">
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
