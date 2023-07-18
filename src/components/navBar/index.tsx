import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";
import { NavBarLinkNameAndUrl } from "../../types";
import { navBarLinkNames } from "../../utilities/navBar";

export default function NavBar() {
  return (
    <Flex
      p={3}
      gap={10}
      w="100vw"
      color="white"
      fontSize={18}
      align="center"
      justify="center"
      fontWeight="light"
      bgColor="#4c5667"
    >
      {navBarLinkNames.map(
        ({ linkName, url }: NavBarLinkNameAndUrl, index: number) => {
          return (
            <NextLink key={index} href={url} passHref>
              <Link
                _hover={{
                  textDecoration: "underline",
                }}
                textDecoration="none"
              >
                {linkName}
              </Link>
            </NextLink>
          );
        }
      )}
    </Flex>
  );
}
