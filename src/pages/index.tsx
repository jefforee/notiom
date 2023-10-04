import NavBar from "../components/navbar";
import { Box, Text, Button } from '@chakra-ui/react';
import Document from "..//components//document";

const IndexPage = () => {
  return (
    <>
        <NavBar />

        <Text fontSize="xl" fontWeight="bold">
            Create. Explore.
        </Text>
        <Text fontSize="xl" fontWeight="bold">
            The document editing software you’ve been waiting for 
        </Text>
        
        <Document />
    </>
  );
};

export default IndexPage;
