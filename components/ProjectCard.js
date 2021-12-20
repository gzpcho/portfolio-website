import data from '../data.json';
import {
  Box,
  Button,
  Heading,
  Flex,
  Image,
  Spacer,
  Text,
  Link,
  Tag,
} from '@chakra-ui/react';
//import { ExternalLinkIcon } from '@chakra-ui/icons';

const Project = (props) => {
  const { title, subtitle, tags, description, url, sourceCodeUrl, imageUrl } =
    props;

  return (
    <Box maxW={600} m={2} px={8} pt={4} borderWidth="4px" borderRadius="10px">
      <Flex alignItems="center">
        <Heading size="xl">{title}</Heading>
        <Spacer />
        <Heading size="md">{subtitle}</Heading>
      </Flex>

      <Flex>
        <Text>{description}</Text>
        <Spacer />
      </Flex>

      {tags.map((tag) => {
        return (
          <Tag key={tag} m={1}>
            {tag}
          </Tag>
        );
      })}

      {imageUrl ? (
        <Image src={imageUrl} alt="project image" borderRadius={5} my={3} />
      ) : null}
      

      <Flex mb={3}>
        <Spacer />
        <Link href={url} isExternal>
          <Button mr={1}>Link</Button>
        </Link>
        <Link href={sourceCodeUrl} isExternal>
          <Button variant="outline">Source Code</Button>
        </Link>
      </Flex>
    </Box>
  );
};

const getStaticProps = async (ctx) => {
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default Project;
