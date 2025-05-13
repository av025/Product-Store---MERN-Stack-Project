import {
  Container,
  Heading,
  VStack,
  Box,
  useColorModeValue,
  Input,
  Button
} from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  }); 

  const addNewProduct = () => {
    console.log("New Product Added", newProduct)
  }

  return (
    <Container>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product{" "}
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue('"white', "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              name="name"
              value={newProduct.name}
              placeholder="New Product"
              onChange={(e) => {
                setNewProduct({ ...newProduct, name: e.target.value });
              }}
            />
            <Input
              name="price"
              value={newProduct.price}
              placeholder="Price"
              onChange={(e) => {
                setNewProduct({ ...newProduct, price: e.target.value });
              }}
            />
            <Input
              name="img"
              value={newProduct.img}
              placeholder="Product Image URL"
              onChange={(e) => {
                setNewProduct({ ...newProduct, img: e.target.value });
              }}
            />

            <Button w='full' colorScheme="blue" onClick={addNewProduct}> Add Product </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
