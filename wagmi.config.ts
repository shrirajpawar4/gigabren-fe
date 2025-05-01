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
        8453: "0xe9e98a29bc63a8c7e35bfbbc858468342aad7b24", // Base Mainnet
        84532: "0x841ef521c0509e3cf26629650472e0f82920953b", // Base Sepolia
      },
    },
    {
      name: "UsdcTokenContract",
      abi: erc20Abi,
      address: {
        8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // Base Mainnet USDC
        84532: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // Base Sepolia USDC
      },
    },
  ],
});