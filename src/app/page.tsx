"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  Logo,
  Background,
  LetterFx,
} from "~/once-ui/components";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      href: "https://jsescobar.pro",
      title: "Portfolio",
      description: "Get a fell of what we do",
    },
    {
      href: "/contact",
      title: "Meeting",
      description: "Book a meeting whit our team",
    },
    // {
    //   href: "/explore",
    //   title: "Explore",
    //   description: "See some components in action",
    // },
  ];

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Background dots={true} />
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex mobileDirection="column" gap="16">
            <Flex
              position="relative"
              flex={2}
              paddingTop="56"
              paddingX="xl"
              alignItems="flex-end"
              justifyContent="flex-start"
              marginBottom="26"
            >
              <Logo size="xl" icon={false} style={{ zIndex: "1" }} />
              <span className="font-code">
                <LetterFx trigger="instant">ColorMetta </LetterFx>{" "}
              </span>
            </Flex>
            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <LetterFx trigger="instant">
                    Your Product, Perfectly Presented. Fast, Precise, and
                    Beautiful.
                  </LetterFx>
                </span>
              </Heading>
              <Button
                href="/pricing"
                suffixIcon="chevronRight"
                variant="secondary"
              >
                Hear how
              </Button>
            </Flex>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(2, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: "var(--responsive-space-l)" }}
                key={link.href}
                href={link.href}
              >
                <Flex fillWidth paddingY="8" gap="8" direction="column">
                  <Flex fillWidth gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          <Link href="https://jsescobar.pro">© 2024 ColorMetta</Link>
        </Text>
        <Flex gap="12">
          {/* <Button
            href="https://github.com/JCODEXs"
            prefixIcon="github"
            size="s"
            variant="tertiary"
          >
            GitHub
          </Button> */}
          <Button
            href="https://discord.gg/945vGxQV"
            prefixIcon="discord"
            size="s"
            variant="tertiary"
          >
            Discord
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
