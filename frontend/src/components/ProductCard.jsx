import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
  IconButton,
  useColorModeValue,
  useToast,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleDeleteProduct = async (pId) => {
    const { success, message } = await deleteProduct(pId);

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleUpdateProduct = async (pId, updatedProduct) => {
 const {success} =    await updateProduct(pId, updatedProduct);
 if (!success) {
     toast({
         title: "Error",
         description: "Server Error",
         status: "error",
         duration: 3000,
         isClosable: true,
        });
    } else {
        toast({
            title: "Success",
            description: "Product Updated Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    }
    onClose();
};

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.img}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ₹ {product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme="blue" onClick={onOpen} />

          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                name="name"
                placeholder="New Product"
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({...updatedProduct, name:e.target.value})}
              />
              <Input
                name="price"
                placeholder="Price"
                value={updatedProduct.price}
                 onChange={(e) => setUpdatedProduct({...updatedProduct, price:e.target.value})}
              />
              <Input
                name="img"
                placeholder="Product Image URL"
                value={updatedProduct.img}
                 onChange={(e) => setUpdatedProduct({...updatedProduct, img:e.target.value})}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
