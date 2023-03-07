import { Footer } from "../shared/Footer";
import { Center, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link"
import { theme } from '../styles/theme';

const Page404NotFound = () => (
  <Flex direction="column" h={"100vh"} bgColor={" #2b2c34"}>
    <Flex direction="column" bgGradient="linear(to-b, black, #2b2c34)" gap="3em">
      <Center>
        <Heading mt="3em">404</Heading>
      </Center>
      <Center>Destiny not found</Center>
      <Center>
        <NextLink href="/" passHref>
          <Link
            _hover={{ bgColor: theme.colors.blackDark }}
            _focus={{ bgColor: theme.colors.blackDark }}
            p={4}
            borderRadius="md"
          >
            Return home
          </Link>
        </NextLink>
      </Center>
    </Flex>
    <Footer />
  </Flex>
);

export default Page404NotFound;
