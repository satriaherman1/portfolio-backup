import { Box, Button, Container, Flex, Grid, GridItem, Heading, Icon, Image, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import NavigationDrawer from "@src/components/pages/home/navigation-drawer";
import { MeImage } from "@src/config/pathImage";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import WorkExperience from "@src/components/pages/home/work-experience";

export default function Home() {
  const [LargeScreen] = useMediaQuery("(min-width: 1024px)");
  return (
    <header>
      <Container maxW="1200px">
        <Flex paddingY={LargeScreen ? 8 : 3} h="fit-content" w="full" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as="h3" size="md">
              Satria
            </Heading>
          </Box>
          {LargeScreen ? (
            <Box display="flex" columnGap={8}>
              <Link to="/">Home</Link>
              <Link to="/about">Blog</Link>
              <Link to="/about">Services</Link>
            </Box>
          ) : (
            <NavigationDrawer />
          )}
        </Flex>

        <Flex alignItems="center" columnGap={10} rowGap={4} paddingY={LargeScreen ? "60px" : 3} flexDirection={!LargeScreen ? "column" : "row"} justifyContent="space-between">
          <Image flexBasis={LargeScreen ? "50%" : "100%"} borderRadius="20px" width="100%" maxWidth={LargeScreen ? "410px" : "unset"} src={MeImage} />
          <Box flexBasis={LargeScreen ? "50%" : "100%"}>
            <Text fontWeight="600">Hello, I am</Text>
            <Heading as="h2"> Satria Herman</Heading>
            <Text marginTop={6}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe culpa at optio enim fugiat, assumenda sequi quasi quia dolorem cupiditate molestiae aut laborum, quas excepturi eos
              quae in a necessitatibus voluptate? Eaque delectus est, ex dolor sit fugit, earum optio ratione esse repellat laudantium veniam, ad soluta minima nihil.
            </Text>

            <Button marginTop={5} colorScheme="blue">
              Download CV
            </Button>
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
              <Tab>Education</Tab>
              <Tab>Work Experience</Tab>
            </TabList>

            <TabPanels paddingX="0">
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <WorkExperience />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </header>
  );
}
