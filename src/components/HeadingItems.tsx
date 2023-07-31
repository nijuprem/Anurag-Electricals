import { Heading } from "@chakra-ui/react";

const HeadingItems = () => {
  const navItems = ["Home", "About", "Services", "Contact Us"];

  return (
    <>
      {navItems.map((nav) => (
        <Heading key={nav} as="h3" marginRight={5}>
          {nav}
        </Heading>
      ))}
    </>
  );
};

export default HeadingItems;
