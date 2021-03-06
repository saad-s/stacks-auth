import React from "react";
import { Button } from "./button";
import { useConnect } from "@stacks/connect-react";
import { ButtonProps } from "@stacks/ui";
import { useLoading } from "../common/hooks/use-loading";
import { LOADING_KEYS } from "../store/ui";
import { Stack } from "@stacks/ui";

export const ConnectWalletButton: React.FC<ButtonProps> = (props) => {
  const { doOpenAuth } = useConnect();
  const { isLoading, setIsLoading } = useLoading(LOADING_KEYS.AUTH);
  return (
    <Stack alignItems="center" flexGrow={1} spacing="loose" p="base" isInline>
      <Stack spacing="base-tight"></Stack>
      <Button
        isLoading={isLoading}
        onClick={() => {
          void setIsLoading(true);
          doOpenAuth();
        }}
        {...props}
      >
        Connect wallet
      </Button>
    </Stack>
  );
};
