import { NetworkType, Address, Account } from 'symbol-sdk'

const privatekey = import.meta.env.VITE_TEST_ACCOUNT_PRIVATE_KEY as string

export const epochAdjustment = 1637848847
export const generationHash =
  '7FCCD304802016BEBBCD342A332F91FF1F3BB5E902988B352697BE245F48E836'
export const TestNetworkType = NetworkType.TEST_NET

export const TestAccount = Account.createFromPrivateKey(
  privatekey,
  TestNetworkType
)
export const TestAddress = TestAccount.address
export const TestPublicAccount = TestAccount.publicAccount
