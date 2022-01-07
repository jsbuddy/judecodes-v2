import { AspectRatio, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useState } from "react";
import { MotionBox, MotionImage } from "./motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({ project }) => {
	const [isPresent, safeToRemove] = usePresence();
	const [detailsVisible, setDetailsVisible] = useState(false);

	const props = {
		layout: true,
		style: {
			position: isPresent ? "static" : "absolute",
		},
		initial: "out",
		whileTap: "tapped",
		animate: isPresent ? "in" : "out",
		exit: "out",
		variants: {
			in: {
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 1.5,
				},
			},
			out: { y: 20, opacity: 0 },
			tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } },
		},
		onAnimationComplete: () => !isPresent && safeToRemove(),
		transition: { type: "spring", stiffness: 500, damping: 50, mass: 1 },
		onClick: () => setDetailsVisible(true),
	};

	const card = {
		rest: { opacity: 0, y: 10 },
		hover: { opacity: 1, y: 0 },
	};

	return (
		<>
			<motion.div { ...props }>
				<AspectRatio ratio={ 4 / 4 }>
					<>
						<MotionImage
							layoutId={ project.id }
							src={ project.image }
							objectFit="cover"
							rounded="md"
							border="1px solid transparent"
						/>
						<MotionBox
							cursor="pointer"
							px="2"
							py="6"
							width="full"
							height="full"
							display="flex"
							alignItems="flex-end"
							whileHover="hover"
							initial="rest"
							animate="rest"
							variants={ card }
						>
							<MotionBox
								display="flex"
								width="90%"
								background="whiteAlpha.800"
								py="5"
								px="6"
								position="absolute"
								rounded="lg"
								style={ { backdropFilter: "blur(3px)" } }
							>
								<VStack alignItems="start">
									<Text
										fontSize="sm"
										fontWeight="medium"
										color="GrayText"
										textTransform="uppercase"
										lineHeight="1"
									>
										{ project.category }
									</Text>
									<Text
										fontSize="md"
										color="Black"
										lineHeight="1"
										fontWeight="medium"
									>
										{ project.title }
									</Text>
								</VStack>
							</MotionBox>
						</MotionBox>
					</>
				</AspectRatio>
			</motion.div>

			<AnimatePresence>
				{ detailsVisible ? (
					<ProjectDetails
						project={ project }
						onClose={ () => setDetailsVisible(false) }
					/>
				) : (
					""
				) }
			</AnimatePresence>
		</>
	);
};

export default Project;
