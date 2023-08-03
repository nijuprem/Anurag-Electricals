import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Box p={10}>
        <NavBar />
        <Contact />
      </Box>
    </>
  );
}

export default App;
