import {
  Container,
  Heading,
  VStack,
  Box,
  useColorModeValue,
  Input,
  Button,
  useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/productStore";


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img: "",
  });   

   const bg = useColorModeValue("white", "gray.800");

 const { createProduct }= useProductStore(); 

 const toast = useToast();

  const addNewProduct = async () => {
    const {success , message} = await createProduct(newProduct); 

    if(!success) {
        toast({
            title:"Error",
            description:message,
            status:"error",
            duration:3000,
            isClosable: true

        })
    }else {
        toast({
            title:"Success",
            description:message,
            status:"success",
            duration:3000,
            isClosable:true
        })
    }

    setNewProduct({name:"", price:"", img:""});
  }

  return (
    <Container>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product{" "}
        </Heading>
        <Box
          w={"full"}
          bg={bg}
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
