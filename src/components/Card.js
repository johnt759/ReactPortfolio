import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack backgroundColor="white" borderRadius="lg">
      <Image objectFit="fill" borderRadius="lg" src={imageSrc} alt="project"></Image>
      <VStack align="left" pl="10px">
        <Heading color="black" size="md">{title}</Heading>
        <Text color="gray" size="sm" py="2">{description}</Text>
        <HStack>
          <Text color="black" size="sm" py="1.5">See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
