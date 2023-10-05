/* eslint-disable @next/next/no-img-element */
// components/Navbar.js
import { Box, Flex, Spacer, Text, Button } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
  return (
    <Box p="4">
      <Flex alignItems="center">
        <Box ml="4">
          <img src="/healthicons_n-negative.svg" alt="Logo" width="48" height="48" />
        </Box>

        <Text ml="4" color = "primary.gray" font = "fonts.body" fontSize="medium" fontWeight="bold">
          Notiom
        </Text>

        <Spacer />

        <Button colorScheme="blue" mr = "4" width="129px" height="48px" fontSize="24px">
          Create
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
