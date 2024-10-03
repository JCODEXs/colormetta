import React from "react";
import {
  Background,
  Flex,
  Heading,
  LetterFx,
  Logo,
  SmartImage,
} from "~/once-ui/components";
import ComposedContactForm from "~/once-ui/components/custom/composedContactForm";
function Contact() {
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
        {/* Main Header */}
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
              marginBottom="56"
            >
              <Logo size="xl" icon={false} style={{ zIndex: "1" }} />
              <span className="font-code">
                <LetterFx trigger="instant">ColorMetta</LetterFx>
              </span>
            </Flex>
            <Flex
              position="relative"
              flex={4}
              gap="16"
              marginBottom="22"
              direction="column"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <SmartImage
                    src="/node2.jpg"
                    height={22}
                    alt="image"
                    sizes="m"
                    priority={false}
                  />
                </span>
              </Heading>
            </Flex>
          </Flex>

          <ComposedContactForm />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Contact;
