import { Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Image, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";
// import NavigationDrawer from "@src/components/pages/home/navigation-drawer";
import { BosImg, BosPreview, MeImage, ShipdeoLogo } from "@src/config/pathImage";
import { Link } from "react-router-dom";
import { FaRegAddressBook, FaRegUser, FaRegFolder, FaArrowRight, FaRegListAlt } from "react-icons/fa";
import WorkExperience from "@src/components/pages/home/work-experience";
import { DownloadIcon } from "@chakra-ui/icons";
import FloatButton from "@src/components/common/float-button";
import { useState } from "react";
import SimpleCard from "@src/components/common/simple-card";

export default function Home() {
  const [LargeScreen] = useMediaQuery("(min-width: 1024px)");
  const [activeFloatButton, setActiveFloatButton] = useState<string>("profile");

  const floatButtonList = [
    {
      name: "profile",
      children: <Icon as={FaRegUser} color="inherit" />,
      action: () => setActiveFloatButton("profile"),
    },
    {
      name: "experience",
      children: <Icon as={FaRegAddressBook} color="inherit" />,
      action: () => setActiveFloatButton("experience"),
    },
    {
      name: "portfolio",
      children: <Icon as={FaRegFolder} color="inherit" />,
      action: () => setActiveFloatButton("portfolio"),
    },
    {
      name: "service",
      children: <Icon as={FaRegListAlt} color="inherit" />,
      action: () => setActiveFloatButton("service"),
    },
  ];

  return (
    <header>
      <Container maxW="1200px">
        {/* <Flex paddingY={LargeScreen ? 8 : 3} h="fit-content" w="full" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as="h3" size="md">
              Satria
            </Heading>
          </Box>
        </Flex> */}

        <Flex alignItems="center" columnGap={10} rowGap={4} paddingY={LargeScreen ? "60px" : 8} flexDirection={!LargeScreen ? "column" : "row"} justifyContent="space-between">
          <Image flexBasis={LargeScreen ? "50%" : "100%"} borderRadius="20px" width="100%" maxWidth={LargeScreen ? "410px" : "unset"} src={MeImage} />
          <Box flexBasis={LargeScreen ? "50%" : "100%"}>
            <Text fontWeight="600" color="blue.500">
              Hello, I am
            </Text>
            <Heading as="h2"> Satria Herman</Heading>
            <Text marginTop={6}>
              I'm Frontend Developer that ever worked on 2 companies <a href="">Clodeo</a> and <a href="">Brainmatics</a>. I've been working as a developer for 1 years and i have a such skills like :{" "}
              <b>React</b>, <b>PHP</b>, <b>JavaScript</b>, <b>Nodejs</b>, <b>Laravel</b>. I also working as Freelance Frontend Developer for around 2 years
            </Text>

            <Flex columnGap={3}>
              <Button leftIcon={<DownloadIcon />} marginTop={5} colorScheme="blue">
                Download CV
              </Button>
              <Button variant="outline" marginTop={5} colorScheme="blue">
                Contact Me
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box paddingY="50px">
          <Text textAlign="center">My Experience</Text>
          <Heading textAlign="center" as="h2" size="lg">
            Experience
          </Heading>

          {/* <Flex gap={5} flexDirection={LargeScreen ? "row" : "column"} justifyContent="center" marginTop={15}>
            <Box boxShadow="0 5px 15px #dce4e6" padding="20px 10px" width="full" maxWidth="500px">
              <Heading as="h3" size="md" textAlign="center" color="blue.500">
                {" "}
                Education
              </Heading>

              <UnorderedList listStyleType="none" marginTop={6} display="flex" flexDirection="column" rowGap={3}>
                <ListItem>
                  <Box display="flex" alignItems="center" columnGap={2}>
                    <Icon as={FaCheckCircle} color="blue.500" />
                    <Text fontWeight="semibold">SDN 4 Srobyong</Text>
                  </Box>
                  <Box marginLeft={6} marginTop={1}>
                    <Text color="gray.600">2009 - 2015</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display="flex" alignItems="center" columnGap={2}>
                    <Icon as={FaCheckCircle} color="blue.500" />
                    <Text fontWeight="semibold">SMPN 1 Mlonggo</Text>
                  </Box>
                  <Box marginLeft={6} marginTop={1}>
                    <Text color="gray.600">2009 - 2015</Text>
                  </Box>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box boxShadow="0 1px 15px #dce4e6" padding="20px 25px" width="full" maxWidth="500px" color="blue.500">
              <Heading as="h3" size="md" textAlign="center">
                {" "}
                Work
              </Heading>
            </Box>
          </Flex> */}

          <Tabs variant="soft-rounded" margin="20px auto" colorScheme="gray" paddingX="0">
            <TabList padding={1} color="white" justifyContent="center" width="fit-content" rounded="full" marginX="auto">
              <Tab>Work Experience</Tab>
              <Tab>Education</Tab>
            </TabList>

            <TabPanels paddingX="0">
              <TabPanel>
                <WorkExperience />
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box padding="30px 0">
          <Heading textAlign="center" as="h2" size="lg">
            Portfolio
          </Heading>

          <Flex marginTop={10} gap={8} flexDirection={LargeScreen ? "row" : "column"}>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color="blue.500">
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={BosPreview}
                  title="Binmas Online System"
                />
              </Link>
            </Box>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color="blue.500">
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={ShipdeoLogo}
                  title="Shipdeo Website"
                />
              </Link>
            </Box>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color="blue.500">
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={BosImg}
                  title="Binmas Online System"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>

      <FloatButton active={activeFloatButton} buttonList={floatButtonList} />
    </header>
  );
}
