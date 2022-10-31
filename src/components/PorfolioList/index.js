import { Box, Grid } from "@chakra-ui/react";
import { PortfolioElement } from "./PortolioElement";
import { data } from "../../database";

const getData = () => {
  return data.map((project) => {
    return (
      <PortfolioElement
        name={project.name}
        website={project.link}
        code={project.code}
        description={project.description}
        info={project.information}
        preview={project.preview}
      />
    );
  });
};
export function PortfolioList() {
  return (
    <Box
      bgColor="#494E5F"
      w={{ sm: "90%", lg: "80%", xl: "70%" }}
      h="fit-content"
      marginTop="2rem"
      padding="2rem"
    >
      <Grid templateColumns="repeat(1, 1fr)" gap={10}>
        {getData(data)}
      </Grid>
    </Box>
  );
}
