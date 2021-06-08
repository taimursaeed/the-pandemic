import {
  Box,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as Info } from "./../../assets/info.svg";
import CountUp from "react-countup";

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
          <Flex alignItems="start" flexDirection={["column", "row"]}>
            <Heading as="h2" size="2xl">
              {props?.name}
            </Heading>
            <Flex ml={["0", "3"]} mt={["3", "0"]}>
              <Info style={{ width: "1rem" }} />
              <Text ml="2" display="flex" alignItems="center">
                <small>{getFormatedDate(props?.updated_at)}</small>
              </Text>
            </Flex>
          </Flex>
        </Skeleton>
      </Flex>
      <Flex mb="4" flexWrap={["wrap", "nowrap"]} mr={["0", "-8"]}>
        <SummaryBox
          title="Total"
          color="blue.400"
          data={props?.latest_data?.confirmed || 0}
        />
        <SummaryBox
          title="Active"
          color="orange.400"
          data={props?.timeline?.[0]?.active || 0}
        />
        <SummaryBox
          title="Fatal"
          color="red.400"
          data={props?.latest_data?.deaths || 0}
        />
        <SummaryBox
          title="Recovered"
          color="green.400"
          data={props?.latest_data?.recovered || 0}
        />
      </Flex>
    </>
  );
}

const SummaryBox = (props) => {
  return (
    <Box
      flex={["100%", "1"]}
      bg="white"
      boxShadow="sm"
      p="4"
      rounded="8"
      color="black"
      border="1px"
      borderColor="gray.200"
      mb={["4", "0"]}
      mr={["0", "8"]}
    >
      <Heading as="h3" size="sm" mb="2" fontWeight="normal" whiteSpace="nowrap">
        <Text
          style={{
            width: "0.75rem",
            height: "0.75rem",
            display: "inline-block",
            borderRadius: "100%",
          }}
          background={props.color}
          mr="2"
        ></Text>
        {props.title}
      </Heading>
      <SkeletonText isLoaded={props.data}>
        <Text fontSize="2xl" fontWeight="bold">
          <CountUp
            separator=","
            duration={0.5}
            start={0}
            end={props.data}
          ></CountUp>
        </Text>
      </SkeletonText>
    </Box>
  );
};
