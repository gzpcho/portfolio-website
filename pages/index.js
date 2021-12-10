import { Button } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Link href="/resume.pdf" passHref>
        <Button
          as="a"
          href="/resume.pdf"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Link>

      <Link href="/projects" passHref>
        <Button>Projects</Button>
      </Link>
    </>
  );
};

export default Page;
