import {
  Button,
  Center,
  Heading,
  Box,
  Flex,
  Spacer,
  Container,
  Text,
} from '@chakra-ui/react';

import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

const Page = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      my={4}
    >
      <Flex>
        <Heading p={2} size="md">
          Hi, I&apos;m Ian
        </Heading>
        <Spacer />
        <Link href="/resume.pdf" passHref>
          <Button
            as="a"
            alt="resume"
            target="_blank"
            rel="noopener noreferrer"
            mx={1}
          >
            Resume
          </Button>
        </Link>

        <Link href="/projects" passHref>
          <Button mx={1}>Projects</Button>
        </Link>

        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Flex>

      <Center pt={4}>
        <Text>
          Currently a{' '}
          <Text as="p" fontWeight="bold">
            Computer Science Student
          </Text>{' '}
          at <Text fontWeight="bold">Texas State University.</Text>
        </Text>
      </Center>
    </Container>
  );
};

export default Page;
