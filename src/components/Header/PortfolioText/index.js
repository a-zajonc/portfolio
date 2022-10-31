import { Box, Text } from "@chakra-ui/react";

export function PortfolioText() {
  return (
    <Box
      bgColor="#494E5F"
      h="fit-content"
      w="fit-content"
      paddingBlock="10px"
      paddingInline="60px"
      marginTop="10px"
    >
      <Text fontSize="3rem" color="#FFE7D4" textTransform="uppercase">
        Portfolio
      </Text>
    </Box>
  );
}
