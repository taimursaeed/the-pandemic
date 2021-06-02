import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

export default function CountrySummary(props) {
  const getFormatedDate = (date) => {
    const updateTime = ((Date.now() - new Date(date)) / (60 * 1000)).toFixed();
    if (!updateTime) return "Updated just now";
    else if (updateTime < 60) return `Updated ${updateTime} mins ago`;
    else return "Updated more than an hour ago";
  };

  return (
    <>
      {Object.keys(props).length > 0 && (
        <>
          <Flex alignItems="center" mb="8">
            <Heading as="h2" size="lg">
              {props.name}
            </Heading>
            <Text ml="4">
              <small>{getFormatedDate(props.updated_at)}</small>
            </Text>
          </Flex>
          <Flex mb="8">
            <Box
              flex="1"
              bg="white"
              boxShadow="sm"
              p="4"
              rounded="8"
              color="black"
              border="1px"
              borderColor="gray.200"
              mr="8"
            >
              <Heading as="h3" size="md" mb="2">
                <Text
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    display: "inline-block",
                    borderRadius: "100%",
                  }}
                  background="blue.400"
                  mr="2"
                ></Text>
                Total
              </Heading>
              <Text fontSize="2xl">{props.latest_data.confirmed || 0}</Text>
            </Box>
            <Box
              flex="1"
              bg="white"
              boxShadow="sm"
              p="4"
              rounded="8"
              border="1px"
              borderColor="gray.200"
              mr="8"
            >
              <Heading as="h3" size="md" mb="2">
                <Text
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    display: "inline-block",
                    borderRadius: "100%",
                  }}
                  background="orange.400"
                  mr="2"
                ></Text>
                Active
              </Heading>
              <Text fontSize="2xl">{props.timeline[0]?.active || 0}</Text>
            </Box>
            <Box
              flex="1"
              bg="white"
              boxShadow="sm"
              p="4"
              rounded="8"
              border="1px"
              borderColor="gray.200"
              mr="8"
            >
              <Heading as="h3" size="md" mb="2">
                <Text
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    display: "inline-block",
                    borderRadius: "100%",
                  }}
                  background="red.400"
                  mr="2"
                ></Text>
                Fatal
              </Heading>
              <Text fontSize="2xl">{props.latest_data.deaths || 0}</Text>
            </Box>
            <Box
              flex="1"
              bg="white"
              boxShadow="sm"
              p="4"
              rounded="8"
              border="1px"
              borderColor="gray.200"
            >
              <Heading as="h3" size="md" mb="2">
                <Text
                  style={{
                    width: "0.75rem",
                    height: "0.75rem",
                    display: "inline-block",
                    borderRadius: "100%",
                  }}
                  background="green.400"
                  mr="2"
                ></Text>
                Recovered
              </Heading>
              <Text fontSize="2xl">{props.latest_data.recovered || 0}</Text>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
}
