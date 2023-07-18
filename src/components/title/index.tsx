import NextLink from "next/link";
import { Link, Heading } from "@chakra-ui/react";

export default function Title() {
  return (
    <NextLink href="/home" passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Heading
          pb={7}
          pt={8}
          as="h1"
          w="100vw"
          size="2xl"
          noOfLines={1}
          textAlign="center"
          color="#F7FAFC"
          bgColor="#2e4b71"
          fontWeight="thin"
        >
          App Name
        </Heading>
      </Link>
    </NextLink>
  );
}
