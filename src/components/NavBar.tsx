import { HStack, Box, Image } from "@chakra-ui/react";
import HeadingItems from "./HeadingItems";
import logo from "../assets/AE.png";
import logo1 from "../assets/AE_Logo.png";

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
        height={{ md: "5rem", base: "3rem" }}
      >
        <Box>
          <HStack ml={{ md: 5, base: 7 }}>
            <Box
              w={{ md: "4rem", base: "2.7rem" }}
              mt={{ md: "0", base: "0.7rem" }}
            >
              <Image
                // boxSize={"fit-content"}
                objectFit="cover"
                src={logo}
                alt="Logo"
              />
            </Box>
            <Box w={"11rem"} display={{ base: "none", md: "block" }} ml={2}>
              <Image
                // boxSize={"fit-content"}
                objectFit="cover"
                src={logo1}
                alt="Main Logo"
              />
            </Box>
          </HStack>
        </Box>
        <Box marginRight={{ md: "2rem", base: "0.5rem" }}>
          <HStack>
            <HeadingItems />
          </HStack>
        </Box>
      </HStack>
    </div>
  );
};

export default NavBar;
