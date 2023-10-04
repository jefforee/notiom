// components/Navbar.js
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function BoxComponent({ text }) {
  return <Box className="box">{text}</Box>;
}

function Document() {
  const boxData = [{ text: "Box 1" }, { text: "Box 2" }, { text: "Box 3" }];
  return (
    <HStack className="box-container">
      {boxData.map((data, index) => (
        <BoxComponent key={index} text={data.text} />
      ))}

    </HStack>
  );
}

export default Document;
