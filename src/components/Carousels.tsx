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
    const interval = setInterval(handleNext, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <>
      <Center>
        <Box width={"98%"} height={"30rem"}>
          <Image
            src={imageArr[index]}
            // objectFit="contain"
            width={"98%"}
            height={"100%"}
          ></Image>
        </Box>
      </Center>
      <Center>
        <Box mt={2}>
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
              {index}
            </span>
          ))}
        </Box>
      </Center>
    </>
  );
};

export default Carousels;
