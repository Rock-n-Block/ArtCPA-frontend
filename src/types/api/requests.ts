export type GetSignatureRequest = {
  tokenAddress: string,
  amountToPay: string,
  senderAddress: string,
};

export type GetSignatureActionPayload = {
  data: GetSignatureRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSignatureGet: (data: any) => void;
};
