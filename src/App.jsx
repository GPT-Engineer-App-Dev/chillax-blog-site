import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Spacer, Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box p={4}>
        <Flex>
          <Spacer />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;