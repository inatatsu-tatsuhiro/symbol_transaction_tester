import { NetworkType, Address, Account, TransactionType } from 'symbol-sdk'

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

export const txs = [
  {
    type: TransactionType.ACCOUNT_KEY_LINK,
    text: 'ACCOUNT_KEY_LINK',
  },
  {
    type: TransactionType.ACCOUNT_METADATA,
    text: 'ACCOUNT_METADATA',
  },
  {
    type: TransactionType.ACCOUNT_MOSAIC_RESTRICTION,
    text: 'ACCOUNT_MOSAIC_RESTRICTION',
  },
  {
    type: TransactionType.ACCOUNT_OPERATION_RESTRICTION,
    text: 'ACCOUNT_OPERATION_RESTRICTION',
  },
  {
    type: TransactionType.ADDRESS_ALIAS,
    text: 'ADDRESS_ALIAS',
  },
  {
    type: TransactionType.AGGREGATE_BONDED,
    text: 'AGGREGATE_BONDED',
  },
  {
    type: TransactionType.AGGREGATE_COMPLETE,
    text: 'AGGREGATE_COMPLETE',
  },
  {
    type: TransactionType.HASH_LOCK,
    text: 'HASH_LOCK',
  },
  {
    type: TransactionType.MOSAIC_ADDRESS_RESTRICTION,
    text: 'MOSAIC_ADDRESS_RESTRICTION',
  },
  {
    type: TransactionType.MOSAIC_ALIAS,
    text: 'MOSAIC_ALIAS',
  },
  {
    type: TransactionType.MOSAIC_DEFINITION,
    text: 'MOSAIC_DEFINITION',
  },
  {
    type: TransactionType.MOSAIC_GLOBAL_RESTRICTION,
    text: 'MOSAIC_GLOBAL_RESTRICTION',
  },
  {
    type: TransactionType.MOSAIC_METADATA,
    text: 'MOSAIC_METADATA',
  },
  {
    type: TransactionType.MOSAIC_SUPPLY_CHANGE,
    text: 'MOSAIC_SUPPLY_CHANGE',
  },
  {
    type: TransactionType.MOSAIC_SUPPLY_REVOCATION,
    text: 'MOSAIC_SUPPLY_REVOCATION',
  },
  {
    type: TransactionType.MULTISIG_ACCOUNT_MODIFICATION,
    text: 'MULTISIG_ACCOUNT_MODIFICATION',
  },
  {
    type: TransactionType.NAMESPACE_METADATA,
    text: 'NAMESPACE_METADATA',
  },
  {
    type: TransactionType.NAMESPACE_REGISTRATION,
    text: 'NAMESPACE_REGISTRATION',
  },
  {
    type: TransactionType.NODE_KEY_LINK,
    text: 'NODE_KEY_LINK',
  },
  {
    type: TransactionType.RESERVED,
    text: 'RESERVED',
  },
  {
    type: TransactionType.SECRET_LOCK,
    text: 'SECRET_LOCK',
  },
  {
    type: TransactionType.SECRET_PROOF,
    text: 'SECRET_PROOF',
  },
  {
    type: TransactionType.TRANSFER,
    text: 'TRANSFER',
  },
  {
    type: TransactionType.VOTING_KEY_LINK,
    text: 'VOTING_KEY_LINK',
  },
  {
    type: TransactionType.VRF_KEY_LINK,
    text: 'VRF_KEY_LINK',
  },
]
