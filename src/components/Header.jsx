import { Avatar, Button, Container, Flex, Text, VStack, } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import Navbar from "../components/Navbar";

const Header = () => {
	return (
		<>
			<Navbar/>
			<Flex
				height={ { base: "86vh", md: "92vh" } }
				maxH="1000px"
				direction="column"
				justify="center"
			>
				<Container maxW="6xl" py="10">
					<motion.div
						initial={ { opacity: 0, y: 50 } }
						animate={ {
							opacity: 1,
							y: 0,
							transition: { type: "spring", delay: 0.1, duration: 0.5 },
						} }
					>
						<Flex
							width="full"
							direction={ { base: "column", md: "row" } }
							align={ { base: "flex-start", md: "flex-end" } }
						>
							<VStack mr="5" align="start" spacing="20px">
								<Avatar
									width="70px"
									height="70px"
									src="/images/profile.png"
									mb="5"
								/>
								<Text
									as="h1"
									fontSize={ { base: "4rem", md: "7xl" } }
									lineHeight={ 1.1 }
									fontWeight="800"
									flexGrow="1"
								>
									Hi there, <br/> I'm Jude Francis
								</Text>
								{/* <Text
                  fontSize={{ base: "lg", md: "lg" }}
                  maxW="600"
                  mt="7"
                  lineHeight="1.5"
                  fontWeight="medium"
                  opacity=".8"
                  verticalAlign="middle"
                >
                  <Box
                    as="span"
                    display="inline-flex"
                    mr="2"
                    verticalAlign="middle"
                  >
                    A full-stack developer from Lagos,
                  </Box>
                  <Box as="span" display="inline-flex" verticalAlign="middle">
                    <NigeriaLogo />
                    <Box as="span" verticalAlign="middle" ml="2">
                      Nigeria
                    </Box>
                  </Box>
                </Text> */ }
								<Text
									fontSize={ { base: "lg", md: "lg" } }
									maxW="600"
									mt="7"
									lineHeight="1.5"
									fontWeight="semibold"
									opacity=".8"
									verticalAlign="middle"
								>
									A design-minded web and mobile developer
								</Text>
							</VStack>
							<Button
								variant="solid"
								colorScheme="blue"
								size="lg"
								ml={ { base: 0, md: "auto" } }
								mb={ { md: "4" } }
								mt={ { base: "10", md: 0 } }
								px="5"
								rounded="30"
								leftIcon={ <FiMessageCircle/> }
							>
								Get in touch
							</Button>
						</Flex>
					</motion.div>
				</Container>
			</Flex>
		</>
	);
};

export default Header;
