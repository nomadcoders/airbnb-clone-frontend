import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa";

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color="red.500">
          <Link to={"/"}>
            <FaAirbnb size={"48"} />
          </Link>
        </Box>
        <HStack spacing={2}>
          <Button>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}
