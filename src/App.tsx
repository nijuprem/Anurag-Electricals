import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Box p={10}>
        <NavBar />
        <Services />
        <Contact />
      </Box>
    </>
  );
}

export default App;
