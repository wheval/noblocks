import { arbitrum, base, bsc, polygon, mainnet } from "viem/chains";
import {
  addRpcUrlOverrideToChain,
  type PrivyClientConfig,
} from "@privy-io/react-auth";

const bscOverride = addRpcUrlOverrideToChain(
  bsc,
  "https://bsc-dataseed.bnbchain.org/",
);

const baseConfig: Omit<PrivyClientConfig, "appearance"> = {
  embeddedWallets: {
    createOnLogin: "all-users",
  },
  externalWallets: {
    coinbaseWallet: {
      connectionOptions: "smartWalletOnly",
    },
  },
  supportedChains: [base, bscOverride, arbitrum, polygon],
};

export const lightModeConfig: PrivyClientConfig = {
  ...baseConfig,
  appearance: {
    theme: "light",
    accentColor: "#8B85F4",
    landingHeader: "Log in or sign up",
    logo: "/logos/noblocks-logo.svg",
  },
};

export const darkModeConfig: PrivyClientConfig = {
  ...baseConfig,
  appearance: {
    theme: "dark",
    accentColor: "#8B85F4",
    landingHeader: "Log in or sign up",
    logo: "/logos/noblocks-logo.svg",
  },
};
