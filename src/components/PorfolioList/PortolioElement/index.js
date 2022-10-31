import {
  Box,
  Text,
  Link,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Img,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faArrowUpRightFromSquare,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

export function PortfolioElement({
  name,
  website,
  code,
  info,
  preview,
  description,
}) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <Box
          bgColor="#FFE7D4"
          display="flex"
          flexDirection="row"
          h="fit-content"
          p="1rem"
          justifyContent="space-between"
          alignItems="center"
          color="#494E5F"
          _hover={{
            bgColor: "#edcbaf",
          }}
        >
          <Text
            color="#494E5F"
            fontSize={{ sm: "15px", md: "20px", xl: "25px" }}
            wordBreak="break-word"
            w={{ sm: "50%", md: "70%", xl: "80%" }}
            textTransform="uppercase"
          >
            {name}
          </Text>

          <Box
            display="flex"
            flexDirection="row"
            w={{ sm: "50%", md: "40%", xl: "30%" }}
            justifyContent={{
              sm: "space-between",
              md: "space-around",
              xl: "space-around",
            }}
            alignItems="center"
          >
            <Link
              href={website}
              _hover={{ bgColor: "#e3c2a9" }}
              p="10px"
              isExternal
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color="#494E5F"
              />
            </Link>
            <Link
              href={code}
              _hover={{ bgColor: "#e3c2a9" }}
              p="10px"
              isExternal
            >
              <FontAwesomeIcon icon={faCode} color="#494E5F" />
            </Link>
            <AccordionButton w="fit-content" p="10px">
              <FontAwesomeIcon icon={faInfo} color="#494E5F" />
            </AccordionButton>
          </Box>
        </Box>
        <AccordionPanel pb={4} color="white">
          <Box
            display="flex"
            flexDirection={{ sm: "column", lg: "row" }}
            alignItems="center"
          >
            <Img
              src={preview}
              alt="Website preview"
              h={{ sm: "150px", md: "200px", lg: "200px", xl: "250px" }}
              w={{
                xl: "60%",
              }}
              mb={{ sm: "15px", md: "15px" }}
            />
            <Box display="flex" flexDirection="column">
              <Text textAlign="start">{description}</Text>
              <Text textAlign="start" mt="10px">
                {info}
              </Text>
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
