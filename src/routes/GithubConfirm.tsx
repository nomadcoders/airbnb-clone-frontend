import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogIn } from "../api";

export default function GithubConfirm() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      await githubLogIn(code);
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>Processing log in...</Heading>
      <Text>Don't go anywhere.</Text>
      <Spinner size="lg" />
    </VStack>
  );
}
