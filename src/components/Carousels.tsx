import { useEffect, useState } from "react";
import { Box, Center, Image } from "@chakra-ui/react";

interface Props {
  imageArr: string[];
}

const Carousels = ({ imageArr }: Props) => {
  const [index, setIndex] = useState(0);

  // const handlePrevious = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 0 ? arr.length - 1 : newIndex);
  // };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= imageArr.length ? 0 : newIndex);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <Box
      mt={{ lg: "4rem", md: "6rem", base: "3rem" }}
      // pt={{ base: 0, lg: "10" }}
      mb={{ sm: "3rem", base: "1rem" }}
    >
      <Center>
        <Box width={"98%"} height={{ lg: "30rem", sm: "18rem", base: "14rem" }}>
          <Center>
            <Image
              ml={{ md: "1rem" }}
              borderRadius={"1rem"}
              src={imageArr[index]}
              // objectFit="contain"
              width={{ md: "75%", base: "100%" }}
              height={{ lg: "30rem", sm: "18rem", base: "15rem" }}
            ></Image>
          </Center>
        </Box>
      </Center>
      <Center>
        <Box mt={{ sm: 5, base: "2.5rem" }}>
          {imageArr.map((_item, index) => (
            <span
              key={index}
              style={{
                margin: "15px",
                height: "10px",
                width: "10px",
                cursor: "pointer",
              }}
              onClick={() => setIndex(index)}
            >
              {index + 1}
            </span>
          ))}
        </Box>
      </Center>
    </Box>
  );
};

export default Carousels;
