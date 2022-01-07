import {
  Container,
  TabList,
  Tabs,
  SimpleGrid,
  chakra,
  useTab,
  useStyles,
  Box,
  Flex,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FiGlobe, FiMonitor, FiPieChart, FiSmartphone } from "react-icons/fi";
import projects from "../lib/projects";
import Project from "./Project";

const StyledTab = chakra("button", { themeKey: "Tabs.Tab" });

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];
  const styles = useStyles();

  return (
    <StyledTab
      __css={ (styles.tab, { background: "none" }) }
      { ...tabProps }
      mr={ { base: "5", md: "10" } }
      fontWeight="medium"
      color={ isSelected ? "blue.400" : "" }
      outline="none"
    >
      { tabProps.children }
    </StyledTab>
  );
});

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const filterProjects = (p) => {
    if (tabIndex === 0) return true;
    else if (tabIndex === 1) return p.category === "web";
    else if (tabIndex === 2) return p.category === "mobile";
    else if (tabIndex === 3) return p.category === "ui";
    else return true;
  };

  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        index={ tabIndex }
        onChange={ setTabIndex }
      >
        <Container maxW="6xl">
          <TabList>
            <Flex as={ CustomTab } align="center">
              <Box as={ FiGlobe } mr="2" /> All
            </Flex>
            <Flex as={ CustomTab } align="center">
              <Box as={ FiMonitor } mr="2" /> Web
            </Flex>
            <Flex as={ CustomTab } align="center">
              <Box as={ FiSmartphone } mr="2" /> Mobile
            </Flex>
            <Flex as={ CustomTab } align="center">
              <Box as={ FiPieChart } mr="2" /> UI/UX
            </Flex>
          </TabList>
        </Container>
        <SimpleGrid columns={ { base: 2, md: "4" } } spacing="4" mt="8" px="4">
          <AnimatePresence>
            { projects.filter(filterProjects).map((project) => (
              <Project key={ project.id } project={ project } />
            )) }
          </AnimatePresence>
        </SimpleGrid>
      </Tabs>
    </>
  );
};

export default Projects;
