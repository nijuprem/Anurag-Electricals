import { HStack, Box, Image } from "@chakra-ui/react";
import HeadingItems from "./HeadingItems";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <HStack
        zIndex={5}
        backgroundColor={"black"}
        justifyContent={"space-between"}
        paddingBottom={2}
        pos={"fixed"}
        top={0}
        left={0}
        width={"100%"}
      >
        <Box>
          <Image
            boxSize={"fit-content"}
            objectFit="cover"
            src={logo}
            alt="Logo"
          />
        </Box>
        <Box marginRight={"2rem"}>
          <HStack>
            <HeadingItems />
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default NavBar;
