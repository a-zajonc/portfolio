import { ChakraProvider, Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { PortfolioList } from "./components/PorfolioList";
import { theme } from ".";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Header />
        <PortfolioList />
      </Box>
    </ChakraProvider>
  );
}

export default App;
