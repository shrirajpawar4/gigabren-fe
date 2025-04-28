import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { Abi } from "viem";
import { GigaBrenPass } from "./abi/GigaBrenPass";
import { erc20Abi } from "viem";

export default defineConfig({
  out: "./src/generated/wagmiHooksGen.ts",
  plugins: [react()],
  contracts: [
    {
      name: "gigaBrainPass",
      abi: GigaBrenPass.abi as Abi,
      address: {
        84532: "0x841ef521c0509e3cf26629650472e0f82920953b",
      },
    },
    {
      name: "UsdcTokenContract",
      abi: erc20Abi,
      address: {
        84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // USDC contract on Base Sepolia
      },
    },
  ],
});