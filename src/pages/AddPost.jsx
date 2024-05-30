import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");

  const handleSubmit = () => {
    if (title && content) {
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push({ title, content });
      localStorage.setItem("posts", JSON.stringify(posts));
      toast({
        title: "Post added.",
        description: "Your new post has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Error.",
        description: "Both title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" mt={10} bg={bg} color={color}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;