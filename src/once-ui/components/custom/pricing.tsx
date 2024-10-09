import Link from "next/link";
import { Image } from "primereact/image";
import React from "react";
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
  SmartImage,
  RevealFx,
} from "~/once-ui/components";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      description: "A simple plan to get you started",
      price: "$200",
      features: ["1 Main Page", "Basic Info Section", " Responsive Layout"],
      buttonText: "know more",
      buttonRedirectionUrl: "/moreinfo/1",
    },
    {
      title: "Plus Plan",
      description: "Add more pages like About, History, etc.",
      price: "$350",
      features: [
        "Up to 5 Pages",
        "About, History, Contact",
        " Responsive Layout",
      ],
      buttonText: "know more",
      buttonRedirectionUrl: "/moreinfo/2",
    },
    {
      title: "Custom Plan",
      description: "Fully customized to your needs",
      price: "Available to Quote",
      features: [
        "Custom Pages & Features",
        "Advanced Integrations",
        " Responsive Layout",
        "50 Support Ticket",
      ],
      buttonText: "Contact Us for a Quote",
      buttonRedirectionUrl: "/moreinfo/3",
    },
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
              marginBottom="24"
              direction="column"
            >
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <SmartImage
                    src="/node.jpg"
                    height={24}
                    alt="image"
                    sizes="m"
                    priority={false}
                  />
                </span>
              </Heading>
            </Flex>
          </Flex>
          <Flex justifyContent="center" margin="4">
            <Text>
              {" "}
              Every plan includes hosting for a year, optimized Image managment
              and don´t includes the domain{" "}
            </Text>
          </Flex>
          {/* Pricing Cards */}
          <RevealFx speed="medium" delay={0} translateY={0}>
            <Grid
              radius="l"
              // border="neutral-medium"
              // borderStyle="solid-1"
              columns="repeat(3, 1fr)"
              tabletColumns="1col"
              mobileColumns="1col"
              fillWidth
              padding="8"
              gap="12"
            >
              {plans.map((plan, index) => (
                <Flex
                  key={index}
                  fillWidth
                  paddingY="12"
                  gap="4"
                  direction="column"
                  radius="l"
                  border="neutral-medium"
                  borderStyle="solid-2"
                  padding="l"
                  hovereffect="scale"
                  alignItems="baseline"
                >
                  <Flex fillWidth gap="8" alignItems="center">
                    <Text variant="body-strong-l" onBackground="neutral-strong">
                      {plan.title}
                    </Text>
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {plan.description}
                  </Text>
                  <Flex margin="4" gap="2">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <Text
                            variant="body-default-s"
                            onBackground="neutral-weak"
                          >
                            {feature}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Flex>
                  <Flex justifyContent="center" margin="4" marginRight="8">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {plan.price}
                    </Text>
                  </Flex>
                  <Flex alignItems="flex-end" justifyContent="center">
                    <Button href={plan.buttonRedirectionUrl} variant="primary">
                      {plan.buttonText}
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </RevealFx>
        </Flex>
      </Flex>

      {/* Footer */}
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
};

export default Pricing;

// // import React, { useContext, useRef } from "react";
// // import Link from "next/link";
// // import getConfig from "next/config";
// // import { StyleClass } from "primereact/styleclass";
// // import { Button } from "primereact/button";
// // import { Ripple } from "primereact/ripple";
// // import { Divider } from "primereact/divider";
// // import AppConfig from "../../../../layout/AppConfig";
// // import { LayoutContext } from "../../../../layout/context/layoutcontext";

// // const LandingPage = () => {
// //   // const contextPath = getConfig().publicRuntimeConfig.contextPath;
// //   // const { layoutConfig } = useContext(LayoutContext);
// //   const menuRef = useRef();

// //   return (
// //     <div className="surface-0 justify-content-center flex">
// //       <div id="home" className="landing-wrapper overflow-hidden">
// //         <div className="align-items-center justify-content-between relative mx-0 flex px-4 py-4 md:mx-6 lg:static lg:mx-8 lg:px-8">
// //           <Link legacyBehavior href="/">
// //             <a className="align-items-center flex">
// //               {/* <img
// //                 src={`${contextPath}/layout/images/${layoutConfig.colorScheme === "light" ? "logo-dark" : "logo-white"}.svg`}
// //                 alt="Sakai Logo"
// //                 height="50"
// //                 className="mr-0 lg:mr-2"
// //               /> */}
// //               <span className="text-900 line-height-3 mr-8 text-2xl font-medium">
// //                 SAKAI
// //               </span>
// //             </a>
// //           </Link>
// //           <StyleClass
// //             nodeRef={menuRef}
// //             selector="@next"
// //             enterClassName="hidden"
// //             leaveToClassName="hidden"
// //             hideOnOutsideClick="true"
// //           >
// //             <i
// //               ref={menuRef}
// //               className="pi pi-bars text-700 block cursor-pointer text-4xl lg:hidden"
// //             ></i>
// //           </StyleClass>
// //           <div
// //             className="align-items-center surface-0 flex-grow-1 justify-content-between z-2 absolute left-0 hidden w-full px-6 lg:static lg:flex lg:px-0"
// //             style={{ top: "100%" }}
// //           >
// //             <ul className="lg:align-items-center flex-column m-0 flex cursor-pointer select-none list-none p-0 lg:flex-row">
// //               <li>
// //                 <a
// //                   href="#home"
// //                   className="text-900 line-height-3 m-0 flex px-0 py-3 font-medium md:ml-5"
// //                 >
// //                   <span>Home</span>
// //                 </a>
// //                 <Ripple />
// //               </li>
// //               <li>
// //                 <a
// //                   href="#features"
// //                   className="text-900 line-height-3 m-0 flex px-0 py-3 font-medium md:ml-5"
// //                 >
// //                   <span>Features</span>
// //                 </a>
// //                 <Ripple />
// //               </li>
// //               <li>
// //                 <a
// //                   href="#highlights"
// //                   className="text-900 line-height-3 m-0 flex px-0 py-3 font-medium md:ml-5"
// //                 >
// //                   <span>Highlights</span>
// //                 </a>
// //                 <Ripple />
// //               </li>
// //               <li>
// //                 <a
// //                   href="#pricing"
// //                   className="text-900 line-height-3 m-0 flex px-0 py-3 font-medium md:ml-5"
// //                 >
// //                   <span>Pricing</span>
// //                 </a>
// //                 <Ripple />
// //               </li>
// //             </ul>
// //             <div className="justify-content-between border-top-1 lg:border-top-none surface-border mt-3 flex py-3 lg:mt-0 lg:block lg:py-0">
// //               <Button
// //                 label="Login"
// //                 className="p-button-text p-button-rounded line-height-2 border-none font-light text-blue-500"
// //               ></Button>
// //               <Button
// //                 label="Register"
// //                 className="p-button-rounded line-height-2 ml-5 border-none bg-blue-500 font-light text-white"
// //               ></Button>
// //             </div>
// //           </div>
// //         </div>

// //         <div
// //           id="hero"
// //           className="flex-column flex overflow-hidden px-4 pt-4 lg:px-8"
// //           style={{
// //             background:
// //               "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
// //             clipPath: "ellipse(150% 87% at 93% 13%)",
// //           }}
// //         >
// //           <div className="mx-4 mt-0 md:mx-8 md:mt-4">
// //             <h1 className="line-height-2 text-6xl font-bold text-gray-900">
// //               <span className="block font-light">Eu sem integer</span>eget magna
// //               fermentum
// //             </h1>
// //             <p className="line-height-3 text-2xl font-normal text-gray-700 md:mt-3">
// //               Sed blandit libero volutpat sed cras. Fames ac turpis egestas
// //               integer. Placerat in egestas erat...{" "}
// //             </p>
// //             <Button
// //               type="button"
// //               label="Get Started"
// //               className="p-button-rounded line-height-3 mt-3 border-none bg-blue-500 px-3 text-xl font-normal text-white"
// //             ></Button>
// //           </div>
// //           <div className="justify-content-center md:justify-content-end flex">
// //             {/* <img
// //               src={`${contextPath}/demo/images/landing/screen-1.png`}
// //               alt="Hero Image"
// //               className="w-9 md:w-auto"
// //             /> */}
// //           </div>
// //         </div>

// //         <div id="features" className="mx-0 mt-5 px-4 py-4 lg:mx-8 lg:px-8">
// //           <div className="justify-content-center grid">
// //             <div className="col-12 mb-4 mt-8 text-center">
// //               <h2 className="text-900 mb-2 font-normal">Marvelous Features</h2>
// //               <span className="text-600 text-2xl">
// //                 Placerat in egestas erat...
// //               </span>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-yellow-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Easy to Use</h5>
// //                   <span className="text-600">
// //                     Posuere morbi leo urna molestie.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-cyan-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Fresh Design</h5>
// //                   <span className="text-600">Semper risus in hendrerit.</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center flex bg-indigo-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-map text-2xl text-indigo-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Well Documented</h5>
// //                   <span className="text-600">
// //                     Non arcu risus quis varius quam quisque.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center bg-bluegray-200 mb-3 flex"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-id-card text-bluegray-700 text-2xl"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Responsive Layout</h5>
// //                   <span className="text-600">
// //                     Nulla malesuada pellentesque elit.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-orange-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-star text-2xl text-orange-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Clean Code</h5>
// //                   <span className="text-600">
// //                     Condimentum lacinia quis vel eros.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pb-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-pink-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-moon text-2xl text-pink-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Dark Mode</h5>
// //                   <span className="text-600">
// //                     Convallis tellus id interdum velit laoreet.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-teal-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Ready to Use</h5>
// //                   <span className="text-600">Mauris sit amet massa vitae.</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 mt-4 p-0 lg:mt-0 lg:pr-5">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-blue-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-globe text-2xl text-blue-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Modern Practices</h5>
// //                   <span className="text-600">
// //                     Elementum nibh tellus molestie nunc non.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-12 md:col-12 lg:col-4 lg-4 mt-4 p-0 lg:mt-0">
// //               <div
// //                 style={{
// //                   height: "160px",
// //                   padding: "2px",
// //                   borderRadius: "10px",
// //                   background:
// //                     "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))",
// //                 }}
// //               >
// //                 <div
// //                   className="surface-card h-full p-3"
// //                   style={{ borderRadius: "8px" }}
// //                 >
// //                   <div
// //                     className="align-items-center justify-content-center mb-3 flex bg-purple-200"
// //                     style={{
// //                       width: "3.5rem",
// //                       height: "3.5rem",
// //                       borderRadius: "10px",
// //                     }}
// //                   >
// //                     <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
// //                   </div>
// //                   <h5 className="text-900 mb-2">Privacy</h5>
// //                   <span className="text-600">
// //                     Neque egestas congue quisque.
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div
// //               className="col-12 mb-8 mt-8 p-2 md:p-8"
// //               style={{
// //                 borderRadius: "20px",
// //                 background:
// //                   "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)",
// //               }}
// //             >
// //               <div className="flex-column justify-content-center align-items-center flex px-3 py-3 text-center md:py-0">
// //                 <h3 className="mb-2 text-gray-900">Joséphine Miller</h3>
// //                 <span className="text-2xl text-gray-600">Peak Interactive</span>
// //                 <p
// //                   className="sm:line-height-2 md:line-height-4 mt-4 text-2xl text-gray-900"
// //                   style={{ maxWidth: "800px" }}
// //                 >
// //                   “Duis aute irure dolor in reprehenderit in voluptate velit
// //                   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// //                   occaecat cupidatat non proident, sunt in culpa qui officia
// //                   deserunt mollit anim id est laborum.”
// //                 </p>
// //                 {/* <img
// //                   src={`${contextPath}/demo/images/landing/peak-logo.svg`}
// //                   className="mt-4"
// //                   alt="Company logo"
// //                 /> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div id="highlights" className="mx-0 my-6 px-4 py-4 lg:mx-8 lg:px-8">
// //           <div className="text-center">
// //             <h2 className="text-900 mb-2 font-normal">Powerful Everywhere</h2>
// //             <span className="text-600 text-2xl">
// //               Amet consectetur adipiscing elit...
// //             </span>
// //           </div>

// //           <div className="mt-8 grid pb-2 md:pb-8">
// //             <div
// //               className="justify-content-center col-12 lg:col-6 flex-order-1 lg:flex-order-0 flex bg-purple-100 p-0"
// //               style={{ borderRadius: "8px" }}
// //             >
// //               {/* <img
// //                 src={`${contextPath}/demo/images/landing/mockup.svg`}
// //                 className="w-11"
// //                 alt="mockup mobile"
// //               /> */}
// //             </div>

// //             <div className="col-12 lg:col-6 flex-column lg:align-items-end my-auto flex text-center lg:text-right">
// //               <div
// //                 className="align-items-center justify-content-center align-self-center lg:align-self-end flex bg-purple-200"
// //                 style={{
// //                   width: "4.2rem",
// //                   height: "4.2rem",
// //                   borderRadius: "10px",
// //                 }}
// //               >
// //                 <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
// //               </div>
// //               <h2 className="line-height-1 text-900 text-4xl font-normal">
// //                 Congue Quisque Egestas
// //               </h2>
// //               <span
// //                 className="text-700 line-height-3 ml-0 text-2xl md:ml-2"
// //                 style={{ maxWidth: "650px" }}
// //               >
// //                 Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
// //                 Eget aliquet nibh praesent tristique magna sit amet purus
// //                 gravida. Sit amet mattis vulputate enim nulla aliquet.
// //               </span>
// //             </div>
// //           </div>

// //           <div className="my-8 grid pt-2 md:pt-8">
// //             <div className="col-12 lg:col-6 flex-column lg:align-items-start my-auto flex text-center lg:text-left">
// //               <div
// //                 className="align-items-center justify-content-center align-self-center lg:align-self-start flex bg-yellow-200"
// //                 style={{
// //                   width: "4.2rem",
// //                   height: "4.2rem",
// //                   borderRadius: "10px",
// //                 }}
// //               >
// //                 <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
// //               </div>
// //               <h2 className="line-height-1 text-900 text-4xl font-normal">
// //                 Celerisque Eu Ultrices
// //               </h2>
// //               <span
// //                 className="text-700 line-height-3 mr-0 text-2xl md:mr-2"
// //                 style={{ maxWidth: "650px" }}
// //               >
// //                 Adipiscing commodo elit at imperdiet dui. Viverra nibh cras
// //                 pulvinar mattis nunc sed blandit libero. Suspendisse in est ante
// //                 in. Mauris pharetra et ultrices neque ornare aenean euismod
// //                 elementum nisi.
// //               </span>
// //             </div>

// //             <div
// //               className="justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 flex bg-yellow-100 p-0"
// //               style={{ borderRadius: "8px" }}
// //             >
// //               {/* <img
// //                 src={`${contextPath}/demo/images/landing/mockup-desktop.svg`}
// //                 className="w-11"
// //                 alt="mockup"
// //               /> */}
// //             </div>
// //           </div>
// //         </div>

// //         <div id="pricing" className="my-2 px-4 py-4 md:my-4 lg:px-8">
// //           <div className="text-center">
// //             <h2 className="text-900 mb-2 font-normal">Matchless Pricing</h2>
// //             <span className="text-600 text-2xl">
// //               Amet consectetur adipiscing elit...
// //             </span>
// //           </div>

// //           <div className="justify-content-between mt-8 grid md:mt-0">
// //             <div className="col-12 lg:col-4 p-0 md:p-3">
// //               <div className="flex-column border-200 pricing-card hover:border-primary transition-duration-300 flex cursor-pointer border-2 p-3 transition-all">
// //                 <h3 className="text-900 my-5 text-center">Free</h3>
// //                 {/* <img
// //                   src={`${contextPath}/demo/images/landing/free.svg`}
// //                   className="mx-auto h-10 w-10"
// //                   alt="free"
// //                 /> */}
// //                 <div className="my-5 text-center">
// //                   <span className="text-900 mr-2 text-5xl font-bold">$0</span>
// //                   <span className="text-600">per month</span>
// //                   <Button
// //                     label="Get Started"
// //                     className="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white"
// //                   ></Button>
// //                 </div>
// //                 <Divider className="bg-surface-200 w-full"></Divider>
// //                 <ul className="text-900 flex-column my-5 flex list-none p-0">
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Responsive Layout
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Unlimited Push Messages
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       50 Support Ticket
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">Free Shipping</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="col-12 lg:col-4 mt-4 p-0 md:mt-0 md:p-3">
// //               <div className="flex-column border-200 pricing-card hover:border-primary transition-duration-300 flex cursor-pointer border-2 p-3 transition-all">
// //                 <h3 className="text-900 my-5 text-center">Startup</h3>
// //                 {/* <img
// //                   src={`${contextPath}/demo/images/landing/startup.svg`}
// //                   className="mx-auto h-10 w-10"
// //                   alt="startup"
// //                 /> */}
// //                 <div className="my-5 text-center">
// //                   <span className="text-900 mr-2 text-5xl font-bold">$1</span>
// //                   <span className="text-600">per month</span>
// //                   <Button
// //                     label="Try Free"
// //                     className="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white"
// //                   ></Button>
// //                 </div>
// //                 <Divider className="bg-surface-200 w-full"></Divider>
// //                 <ul className="text-900 flex-column my-5 flex list-none p-0">
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Responsive Layout
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Unlimited Push Messages
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       50 Support Ticket
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">Free Shipping</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="col-12 lg:col-4 mt-4 p-0 md:mt-0 md:p-3">
// //               <div className="flex-column border-200 pricing-card hover:border-primary transition-duration-300 flex cursor-pointer border-2 p-3 transition-all">
// //                 <h3 className="text-900 my-5 text-center">Enterprise</h3>
// //                 {/* <img
// //                   src={`${contextPath}/demo/images/landing/enterprise.svg`}
// //                   className="mx-auto h-10 w-10"
// //                   alt="enterprise"
// //                 /> */}
// //                 <div className="my-5 text-center">
// //                   <span className="text-900 mr-2 text-5xl font-bold">$999</span>
// //                   <span className="text-600">per month</span>
// //                   <Button
// //                     label="Get a Quote"
// //                     className="p-button-rounded line-height-2 mx-auto ml-3 mt-4 block border-none bg-blue-500 font-light text-white"
// //                   ></Button>
// //                 </div>
// //                 <Divider className="bg-surface-200 w-full"></Divider>
// //                 <ul className="text-900 flex-column my-5 flex list-none p-0">
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Responsive Layout
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       Unlimited Push Messages
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">
// //                       50 Support Ticket
// //                     </span>
// //                   </li>
// //                   <li className="py-2">
// //                     <i className="pi pi-fw pi-check mr-2 text-xl text-cyan-500"></i>
// //                     <span className="line-height-3 text-xl">Free Shipping</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mx-0 mt-8 px-4 py-4 lg:mx-8">
// //           <div className="justify-content-between grid">
// //             <div className="col-12 md:col-2" style={{ marginTop: "-1.5rem" }}>
// //               <Link legacyBehavior href="/">
// //                 <a className="align-items-center justify-content-center md:justify-content-start mb-3 flex cursor-pointer flex-wrap md:mb-0">
// //                   {/* <img
// //                     src={`${contextPath}/layout/images/${layoutConfig.colorScheme === "light" ? "logo-dark" : "logo-white"}.svg`}
// //                     alt="footer sections"
// //                     width="50"
// //                     height="50"
// //                     className="mr-2"
// //                   /> */}
// //                   <span className="text-900 text-3xl font-medium">SAKAI</span>
// //                 </a>
// //               </Link>
// //             </div>

// //             <div className="col-12 md:col-10 lg:col-7">
// //               <div className="grid text-center md:text-left">
// //                 <div className="col-12 md:col-3">
// //                   <h4 className="line-height-3 text-900 mb-3 text-2xl font-medium">
// //                     Company
// //                   </h4>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     About Us
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     News
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Investor Relations
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Careers
// //                   </a>
// //                   <a className="line-height-3 text-700 block cursor-pointer text-xl">
// //                     Media Kit
// //                   </a>
// //                 </div>

// //                 <div className="col-12 md:col-3 mt-4 md:mt-0">
// //                   <h4 className="line-height-3 text-900 mb-3 text-2xl font-medium">
// //                     Resources
// //                   </h4>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Get Started
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Learn
// //                   </a>
// //                   <a className="line-height-3 text-700 block cursor-pointer text-xl">
// //                     Case Studies
// //                   </a>
// //                 </div>

// //                 <div className="col-12 md:col-3 mt-4 md:mt-0">
// //                   <h4 className="line-height-3 text-900 mb-3 text-2xl font-medium">
// //                     Community
// //                   </h4>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Discord
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Events
// //                     {/* <img
// //                       src={`${contextPath}/demo/images/landing/new-badge.svg`}
// //                       className="ml-2"
// //                     /> */}
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     FAQ
// //                   </a>
// //                   <a className="line-height-3 text-700 block cursor-pointer text-xl">
// //                     Blog
// //                   </a>
// //                 </div>

// //                 <div className="col-12 md:col-3 mt-4 md:mt-0">
// //                   <h4 className="line-height-3 text-900 mb-3 text-2xl font-medium">
// //                     Legal
// //                   </h4>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Brand Policy
// //                   </a>
// //                   <a className="line-height-3 text-700 mb-2 block cursor-pointer text-xl">
// //                     Privacy Policy
// //                   </a>
// //                   <a className="line-height-3 text-700 block cursor-pointer text-xl">
// //                     Terms of Service
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // LandingPage.getLayout = function getLayout(page) {
// //   return (
// //     <React.Fragment>
// //       {page}
// //       <AppConfig simple />
// //     </React.Fragment>
// //   );
// // };

// // export default LandingPage;
