import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Code,
  Flex,
} from "@chakra-ui/react";
import termsData from "../data/terms";
import React from "react";

const Terms = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <Flex m={0} justifyContent={"center"}>
      <Button
        backgroundColor={"black"}
        color="#91959b"
        onClick={() => handleClick("xl")}
        key={"xl"}
        fontSize={"13px"}
        _hover={{
          backgroundColor: "black",
          color: "#91959b",
        }}
      >{`Terms and Conditions`}</Button>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"black"} />
          <DrawerHeader
            color={"black"}
            fontFamily={"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}
          >
            Terms and Conditions
          </DrawerHeader>
          <DrawerBody
            color={"black"}
            fontFamily={"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}
          >
            <pre>
              <Code
                background={"inherit"}
                fontFamily={"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}
              >
                {termsData}
              </Code>
            </pre>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Terms;
