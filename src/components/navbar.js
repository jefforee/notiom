// components/Navbar.js
import { Box, Flex, Spacer, Text, Button } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
  return (
    <Box p="4" bg="primary.500" color="primary.500" font="font.body">
      <Flex alignItems="center">
        {/* <Box>
          <img src="../../public/healthicons_n-negative.svg" alt="Logo" width="40" height="40" />
        </Box> */}

        <Text ml="2" color = "primary.500" font = "fonts.body" fontSize="xl" fontWeight="bold">
          Notiom
        </Text>

        <Spacer />

        <Button colorScheme="blue">Create</Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
