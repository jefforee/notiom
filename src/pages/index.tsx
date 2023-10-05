import NavBar from "../components/navbar";
import { Box, Text, Button, Center } from '@chakra-ui/react';
import Document from "..//components//document";

const IndexPage = () => {
  return (
    <>
        <NavBar />

        <Center mt="8" fontWeight="bold" fontSize = "large" color="primary.gray">
            Create. Explore.
        </Center>
        
        <Center mt="4" fontWeight="medium" fontSize = "medium" color="primary.gray">
            The document editing software you’ve been waiting for 
        </Center>

        <Center mt="8">
            <Document />
        </Center>
    </>
  );
};

export default IndexPage;
