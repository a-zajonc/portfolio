import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { PortfolioList } from "./components/PorfolioList";

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Header />
      <PortfolioList />
    </Box>
  );
}

export default App;
