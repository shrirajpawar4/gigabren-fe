import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UsdcTokenContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const usdcTokenContractAbi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const usdcTokenContractAddress = {
  84532: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
} as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const usdcTokenContractConfig = {
  address: usdcTokenContractAddress,
  abi: usdcTokenContractAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gigaBrainPass
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const gigaBrainPassAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_usdcToken', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newMaxSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MaxSupplyUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newPassCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PassCostUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newDuration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PassDurationUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'expiryTime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PassMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'adminMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getUserTokenIds',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'isPassValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'isUserActive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'mintPass',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'passCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'passDuration',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'passExpiry',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newMaxSupply', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setMaxSupply',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newPassCost', internalType: 'uint256', type: 'uint256' }],
    name: 'setPassCost',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newDuration', internalType: 'uint256', type: 'uint256' }],
    name: 'setPassDuration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'usdcToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'withdrawUSDC',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const gigaBrainPassAddress = {
  84532: '0x841Ef521C0509E3Cf26629650472e0f82920953b',
} as const

/**
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const gigaBrainPassConfig = {
  address: gigaBrainPassAddress,
  abi: gigaBrainPassAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContract = /*#__PURE__*/ createUseReadContract({
  abi: usdcTokenContractAbi,
  address: usdcTokenContractAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractName = /*#__PURE__*/ createUseReadContract(
  {
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'name',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useReadUsdcTokenContractTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcTokenContractAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWriteUsdcTokenContract = /*#__PURE__*/ createUseWriteContract({
  abi: usdcTokenContractAbi,
  address: usdcTokenContractAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWriteUsdcTokenContractApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWriteUsdcTokenContractTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWriteUsdcTokenContractTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcTokenContractAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useSimulateUsdcTokenContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useSimulateUsdcTokenContractApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useSimulateUsdcTokenContractTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useSimulateUsdcTokenContractTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcTokenContractAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWatchUsdcTokenContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWatchUsdcTokenContractApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcTokenContractAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e)
 */
export const useWatchUsdcTokenContractTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcTokenContractAbi,
    address: usdcTokenContractAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPass = /*#__PURE__*/ createUseReadContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"getUserTokenIds"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassGetUserTokenIds =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'getUserTokenIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"isPassValid"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassIsPassValid =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'isPassValid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"isUserActive"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassIsUserActive =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'isUserActive',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"maxSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassMaxSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'maxSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassName = /*#__PURE__*/ createUseReadContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassOwner = /*#__PURE__*/ createUseReadContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"passCost"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassPassCost = /*#__PURE__*/ createUseReadContract(
  {
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'passCost',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"passDuration"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassPassDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'passDuration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"passExpiry"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassPassExpiry =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'passExpiry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassSymbol = /*#__PURE__*/ createUseReadContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassTokenUri = /*#__PURE__*/ createUseReadContract(
  {
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'tokenURI',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"usdcToken"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useReadGigaBrainPassUsdcToken =
  /*#__PURE__*/ createUseReadContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'usdcToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPass = /*#__PURE__*/ createUseWriteContract({
  abi: gigaBrainPassAbi,
  address: gigaBrainPassAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"adminMint"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassAdminMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'adminMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"mintPass"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassMintPass =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'mintPass',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSetBaseUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setMaxSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSetMaxSupply =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setMaxSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setPassCost"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSetPassCost =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setPassCost',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setPassDuration"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassSetPassDuration =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setPassDuration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"withdrawUSDC"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWriteGigaBrainPassWithdrawUsdc =
  /*#__PURE__*/ createUseWriteContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'withdrawUSDC',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPass = /*#__PURE__*/ createUseSimulateContract(
  { abi: gigaBrainPassAbi, address: gigaBrainPassAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"adminMint"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassAdminMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'adminMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"mintPass"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassMintPass =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'mintPass',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setBaseURI"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setMaxSupply"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSetMaxSupply =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setMaxSupply',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setPassCost"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSetPassCost =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setPassCost',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"setPassDuration"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassSetPassDuration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'setPassDuration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `functionName` set to `"withdrawUSDC"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useSimulateGigaBrainPassWithdrawUsdc =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    functionName: 'withdrawUSDC',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"MaxSupplyUpdated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassMaxSupplyUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'MaxSupplyUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"PassCostUpdated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassPassCostUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'PassCostUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"PassDurationUpdated"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassPassDurationUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'PassDurationUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"PassMinted"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassPassMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'PassMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gigaBrainPassAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x841ef521c0509e3cf26629650472e0f82920953b)
 */
export const useWatchGigaBrainPassTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gigaBrainPassAbi,
    address: gigaBrainPassAddress,
    eventName: 'Transfer',
  })
