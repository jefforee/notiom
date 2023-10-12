import { Box, HStack, Text, VStack, Image, Center, } from "@chakra-ui/react";

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
        _hover={{
            transform: 'scale(1.05)', // Adjust this value for the desired zoom level
          }}
          transition="transform 0.2s" // Adjust this value for the desired zoom speed
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

export default BoxComponent