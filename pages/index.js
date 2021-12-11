import {
  Button,
  Stack,
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
    <Container my={4}>
      <Flex>
        <Box p="2">
          <Heading size="md">Hi, I&apos;m Ian</Heading>
        </Box>
        <Spacer />
        <Box>
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
        </Box>
      </Flex>
      <Text>
        Currently working as a{' '}
        <Text as="p" fontWeight="bold">
          Computer Science Student
        </Text>{' '}
        at <Text fontWeight="bold">Texas State University.</Text>
      </Text>
    </Container>
  );
};

export default Page;
