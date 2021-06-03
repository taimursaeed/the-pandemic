import {
  Box,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as Info } from "./../../assets/info.svg";
export default function CountrySummary(props) {
  const getFormatedDate = (date) => {
    const updateTime = ((Date.now() - new Date(date)) / (60 * 1000)).toFixed();
    if (!updateTime) return "Updated just now";
    else if (updateTime < 60) return `Updated ${updateTime} mins ago`;
    else return "Updated more than an hour ago";
  };

  return (
    <>
      <Flex mb="8">
        <Skeleton isLoaded={props?.name} minWidth="200px">
          <Flex alignItems="start">
            <Heading as="h2" size="2xl">
              {props?.name}
            </Heading>
            <Flex ml="3">
              <Info style={{ width: "1rem" }} />
              <Text ml="2" display="flex" alignItems="center">
                <small>{getFormatedDate(props?.updated_at)}</small>
              </Text>
            </Flex>
          </Flex>
        </Skeleton>
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
          <Heading as="h3" size="sm" mb="2" fontWeight="normal">
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
          <SkeletonText isLoaded={props?.latest_data?.confirmed}>
            <Text fontSize="2xl" fontWeight="bold">
              {props?.latest_data?.confirmed}
            </Text>
          </SkeletonText>
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
          <Heading as="h3" size="sm" mb="2" fontWeight="normal">
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

          <SkeletonText isLoaded={props?.timeline?.[0]?.active || 0}>
            <Text fontSize="2xl" fontWeight="bold">
              {props?.timeline?.[0]?.active || 0}
            </Text>
          </SkeletonText>
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
          <Heading as="h3" size="sm" mb="2" fontWeight="normal">
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
          <SkeletonText isLoaded={props?.latest_data?.deaths}>
            <Text fontSize="2xl" fontWeight="bold">
              {props?.latest_data?.deaths}
            </Text>
          </SkeletonText>
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
          <Heading as="h3" size="sm" mb="2" fontWeight="normal">
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
          <SkeletonText isLoaded={props?.latest_data?.recovered}>
            <Text fontSize="2xl" fontWeight="bold">
              {props?.latest_data?.recovered}
            </Text>
          </SkeletonText>
        </Box>
      </Flex>
    </>
  );
}
