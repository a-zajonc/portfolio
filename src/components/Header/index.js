import { Box, Heading } from "@chakra-ui/react";
import { PortfolioImage } from "./PortfolioImage";
import { PortfolioText } from "./PortfolioText";

export function Header() {
  return (
    <Box
      padding={{ sm: "0", md: "3rem", xl: "3rem" }}
      bgColor="#FFE7D4"
      display="flex"
      flexDirection={{ sm: "column", lg: "row", xl: "row" }}
      justifyContent="space-between"
      w="100%"
      h="100%"
      position="inherit"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection={{ sm: "column", md: "row", xl: "row" }}
        alignItems="center"
        justifyContent="center"
        w={{ sm: "50%", md: "80%", lg: "50%" }}
      >
        <PortfolioImage />
        <Heading
          fontSize={{ sm: "36px", md: "3rem", lg: "36px", xl: "3rem" }}
          wordBreak={{ sm: "normal", xl: "break-word" }}
          pl="1rem"
          color="#494E5F"
          textTransform="uppercase"
          mt={{ md: "10px" }}
        >
          Adriana Słabosz
        </Heading>
      </Box>
      <Box
        display="flex"
        w="50%"
        alignItems="center"
        justifyContent="center"
        marginTop={{ md: "10px" }}
      >
        <PortfolioText />
      </Box>
    </Box>
  );
}
