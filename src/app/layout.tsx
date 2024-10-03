import "~/once-ui/styles/index.scss";
import "~/once-ui/tokens/index.scss";
import { PrimeReactProvider } from "primereact/api";
import { Flex } from "~/once-ui/components";
import classNames from "classnames";
import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Serland",
  description:
    "Super Offers web page and personal aplications for web and movile",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <Flex
        as="html"
        lang="en"
        fillHeight
        background="page"
        data-neutral="gray"
        data-brand="blue"
        data-accent="violet"
        data-solid="color"
        data-solid-style="flat"
        data-theme="dark"
        data-border="playful"
        data-surface="filled"
        data-transition="all"
        className={classNames(
          primary.variable,
          secondary ? secondary.variable : "",
          tertiary ? tertiary.variable : "",
          code.variable,
          "root",
        )}
      >
        <Flex as="body" fillWidth fillHeight margin="0" padding="0">
          <Flex flex={1} direction="column">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </PrimeReactProvider>
  );
}
