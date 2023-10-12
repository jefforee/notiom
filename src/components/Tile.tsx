// components/Tile.js
import {
  Box,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface TileProps {
  text: string;
}

const Tile: React.FC<TileProps> = ({ text }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contents, setContents] = useState(text);
  return (
    <>
      <button onClick={onOpen}>
        <Box
          width="200px"
          height="200px"
          borderWidth="2px"
          borderColor="#A3A3A3"
          backgroundColor="#F8F8F8"
          borderRadius="lg"
          overflow="auto"
          textAlign="center"
          padding="10% 5px"
          _hover={{
            transform: "scale(1.05)", // Adjust this value for the desired zoom level
          }}
          transition="transform 0.2s" // Adjust this value for the desired zoom speed
        >
          <Text textStyle="body">{contents}</Text>
        </Box>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
            <Text></Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tile;
