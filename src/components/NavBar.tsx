import { HStack, Box, Image } from "@chakra-ui/react";
import HeadingItems from "./HeadingItems";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={5} paddingBottom={0}>
        <Box>
          <Image
            boxSize={"fit-content"}
            objectFit="cover"
            src={logo}
            alt="Logo"
          />
        </Box>
        <Box marginRight={16}>
          <HStack>
            <HeadingItems />
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default NavBar;
