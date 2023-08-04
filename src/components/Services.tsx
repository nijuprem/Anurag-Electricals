import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
  Flex,
  Center,
} from "@chakra-ui/react";

import service from "../data/service";

const Services = () => {
  return (
    <Flex flexWrap={"wrap"}>
      {service.map(({ name, img, list }, index) => (
        <Card
          maxW="md"
          margin={5}
          width={"30%"}
          bgColor={"inherit"}
          color={"white"}
          border={"2px solid"}
          borderColor={"rgb(228 190 18)"}
          paddingBottom={5}
          key={index}
        >
          <CardBody position={"relative"}>
            <Image src={img} alt={name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Center>
                <Heading size="md">{name}</Heading>
              </Center>
              <UnorderedList listStyleType={"none"}>
                {list.map((data, index) => (
                  <ListItem key={index}>{data}</ListItem>
                ))}
              </UnorderedList>
              <Center>
                <Text
                  color="rgb(228 190 18)"
                  fontSize="2xl"
                  position={"absolute"}
                  bottom="-0.45rem"
                >
                  Contact
                </Text>
              </Center>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default Services;
