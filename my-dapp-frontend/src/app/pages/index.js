// pages/index.js
import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Text,
  Button,
  Link,
  Divider,
  theme,
  CSSReset,
} from '@chakra-ui/react';

const SidebarItem = ({ children, ...rest }) => {
  return (
    <Link
      p={3}
      borderRadius="md"
      _hover={{ bg: 'gray.600', textDecoration: 'none' }}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Dashboard = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex
        direction="column"
        minHeight="100vh"
      >
        <Box as="header" bg="gray.800" p={4} color="white">
          <Flex justify="space-between" align="center">
            <Text fontSize="2xl" fontWeight="bold">BlockLockVault</Text>
            <Button colorScheme="blue">Conectar Wallet</Button>
          </Flex>
        </Box>

        <Flex flexGrow={1}>
          <VStack as="nav" bg="gray.800" p={4} w="250px" color="white" align="stretch">
            <SidebarItem href="#">Home</SidebarItem>
            <SidebarItem href="#">All Vaults</SidebarItem>
            <SidebarItem href="#">My Vault(s)</SidebarItem>
            <SidebarItem href="#">About Us</SidebarItem>
            <Divider my={4} borderColor="gray.600" />
            <SidebarItem href="#">Terms & Conditions</SidebarItem>
          </VStack>

          <VStack flexGrow={1} p={4} spacing={4} align="stretch" bg="gray.700">
            <Box bg="gray.800" p={4} borderRadius="md" shadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={3}>Área Principal - Home</Text>
              <Text color="gray.300">Aquí se mostrará el contenido del Home...</Text>
            </Box>
            <Box bg="gray.800" p={4} borderRadius="md" shadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={3}>My Vaults</Text>
              <Text color="gray.300">Aquí se mostrarán mis Vaults...</Text>
            </Box>
            {/* Más contenedores de información aquí */}
          </VStack>
        </Flex>

        <Box as="footer" bg="gray.800" p={4} color="white" textAlign="center">
          <Text>&copy; 2024 BlockLockVault. Todos los derechos reservados.</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Dashboard;
