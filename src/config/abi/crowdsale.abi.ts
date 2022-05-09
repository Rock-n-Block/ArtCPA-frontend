import { AbiRegistry } from '@elrondnetwork/erdjs/out';

const ABI = {
  buildInfo: {
    rustc: {
      version: '1.62.0-nightly',
      commitHash: 'e7575f9670f3c837def3d186ae09366c75c7632e',
      commitDate: '2022-04-14',
      channel: 'Nightly',
      short: 'rustc 1.62.0-nightly (e7575f967 2022-04-14)',
    },
    contractCrate: {
      name: 'adder',
      version: '0.0.0',
      git_version: 'e08645e-modified',
    },
    framework: {
      name: 'elrond-wasm',
      version: '0.31.1',
    },
  },
  name: 'Adder',
  constructor: {
    inputs: [
      {
        name: 'start_timestamp',
        type: 'u64',
      },
    ],
    outputs: [],
  },
  endpoints: [
    {
      name: 'start_timestamp',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'u64',
        },
      ],
    },
    {
      name: 'allowed_tokens_set',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'variadic<TokenIdentifier>',
          multi_result: true,
        },
      ],
    },
    {
      name: 'allowed_tokens_map',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'variadic<multi<TokenIdentifier,u8>>',
          multi_result: true,
        },
      ],
    },
    {
      name: 'output_token',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'tuple<TokenIdentifier,u8>',
        },
      ],
    },
    {
      name: 'stages',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'variadic<multi<Timestamp,Stage>>',
          multi_result: true,
        },
      ],
    },
    {
      name: 'stage',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'Option<Stage>',
        },
      ],
    },
    {
      name: 'stage_number',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'Option<u8>',
        },
      ],
    },
    {
      name: 'stage_left_time',
      mutability: 'readonly',
      inputs: [],
      outputs: [
        {
          type: 'Option<u64>',
        },
      ],
    },
    {
      name: 'transfer_by_owner',
      onlyOwner: true,
      mutability: 'mutable',
      payableInTokens: [
        '*',
      ],
      inputs: [],
      outputs: [],
    },
    {
      name: 'pay',
      mutability: 'mutable',
      payableInTokens: [
        '*',
      ],
      inputs: [
        {
          name: 'signed_message',
          type: 'SignedMessage',
        },
        {
          name: 'signature',
          type: 'bytes',
        },
      ],
      outputs: [],
    },
    {
      name: 'withdraw',
      onlyOwner: true,
      mutability: 'mutable',
      inputs: [
        {
          name: 'token',
          type: 'TokenIdentifier',
        },
      ],
      outputs: [],
    },
  ],
  hasCallback: false,
  types: {
    SignedMessage: {
      type: 'struct',
      fields: [
        {
          name: 'sender_address',
          type: 'Address',
        },
        {
          name: 'input_payment_token',
          type: 'TokenIdentifier',
        },
        {
          name: 'input_payment_amount',
          type: 'BigUint',
        },
        {
          name: 'output_payment_amount',
          type: 'BigUint',
        },
        {
          name: 'valid_until_timestamp',
          type: 'u64',
        },
      ],
    },
    Stage: {
      type: 'struct',
      fields: [
        {
          name: 'stage_number',
          type: 'u8',
        },
        {
          name: 'total_tokens',
          type: 'BigUint',
        },
        {
          name: 'left_tokens',
          type: 'BigUint',
        },
      ],
    },
    Timestamp: {
      type: 'struct',
      fields: [
        {
          name: 'start',
          type: 'u64',
        },
        {
          name: 'end',
          type: 'u64',
        },
      ],
    },
  },
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

export const CrowdSaleABI = AbiRegistry.create(ABI);
