import { Heading } from "@chakra-ui/react";
import { Link } from "react-scroll";

const HeadingItems = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Contact Us",
      link: "contact",
    },
  ];

  return (
    <>
      {navItems.map(({ name, link }, index) => (
        <Link
          to={link}
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
          key={index}
        >
          <Heading as="h3" size="lg" marginRight={5} cursor="pointer">
            {name}
          </Heading>
        </Link>
      ))}
    </>
  );
};

export default HeadingItems;
