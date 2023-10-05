import { Box, HStack, Text, VStack, Image, Center } from "@chakra-ui/react";
import React from "react";

function BoxComponent({ text, isFirst }) {
  return (
    <Box
      className="box"
      borderWidth="2px"
      borderColor={isFirst ? "#2F80ED" : "#A3A3A3"}
      borderRadius="md"
      width="150px"
      height="150px"
      bg={isFirst ? "#2F80ED" : "#F8F8F8"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative" // Set position: relative for proper positioning

    >
      {isFirst ? (
        <Box>
        <Image src="/carbon_document.svg" alt="Image description" />
        <Image
            src="/plus.svg"
            alt="Image description"
            position="absolute"
            top="5"
            right="5"
          />
        </Box>
      ) : (
        <Text
          p="3"
          color="primary.gray"
          font="fonts.body"
          fontSize="small"
          fontWeight="bold"
          lineHeight="26.04px"
        >
          {text}
        </Text>
      )}
    </Box>
  );
}

function Document() {
  const boxData = [
    { text: "", isFirst: true },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
  ];

  const groupedBoxes = [];
  for (let i = 0; i < boxData.length; i += 6) {
    groupedBoxes.push(boxData.slice(i, i + 6));
  }

  return (
    <VStack className="box-container" spacing="40px">
      {groupedBoxes.map((group, index) => (
        <HStack mt="4" key={index} spacing="100px">
          {group.map((data, dataIndex) => (
            <BoxComponent
              key={dataIndex}
              text={data.text}
              isFirst={data.isFirst}
            />
          ))}
        </HStack>
      ))}
    </VStack>
  );
}

export default Document;
