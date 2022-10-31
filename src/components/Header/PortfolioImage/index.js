import { Img } from "@chakra-ui/react";
import portfolioImg from "./imgPortfolio.jpg";

export function PortfolioImage() {
  return (
    <Img
      src={portfolioImg}
      alt="Adriana Słabosz Photo"
      maxH="250px"
      borderRadius="150"
    />
  );
}
