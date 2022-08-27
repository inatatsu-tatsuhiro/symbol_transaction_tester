import { TestPublicAccount } from './SymbolData'
import { epochAdjustment, TestAddress, TestNetworkType } from './SymbolData'
import { requestSign, setTransaction } from 'sss-module'
import {
  AccountKeyLinkTransaction,
  AccountMetadataTransaction,
  Deadline,
  LinkAction,
  PlainMessage,
  TransferTransaction,
  UInt64,
} from 'symbol-sdk'

const deadline = Deadline.create(epochAdjustment)
const emptyValue = new Uint8Array(10)

// ACCOUNT_KEY_LINK
export const createAccountKeyLink = () => {
  return AccountKeyLinkTransaction.create(
    deadline,
    TestPublicAccount.publicKey,
    LinkAction.Link,
    TestNetworkType
  )
}

// ACCOUNT_METADATA
export const createAccountMetadata = () => {
  return AccountMetadataTransaction.create(
    deadline,
    TestAddress,
    UInt64.fromUint(1000),
    1,
    emptyValue,
    TestNetworkType
  )
}

// ACCOUNT_MOSAIC_RESTRICTION
export const createAccountMosaicRestriction = () => {}

// ACCOUNT_OPERATION_RESTRICTION
export const createAccountOperationResriction = () => {}
// ADDRESS_ALIAS
export const createAddressAlias = () => {}

// AGGREGATE_BONDED
export const createAggregateBonded = () => {}

// AGGREGATE_COMPLETE
export const createAggregateCreate = () => {}

// HASH_LOCK
export const createHashLock = () => {}

// MOSAIC_ADDRESS_RESTRICTION
export const createMosaicAddressRestriction = () => {}
// MOSAIC_ALIAS
export const createMosaicAlias = () => {}

// MOSAIC_DEFINITION
export const createMosaicDefinition = () => {}

// MOSAIC_GLOBAL_RESTRICTION
export const createMosaicGlobalRestriction = () => {}

// MOSAIC_METADATA
export const createMosaicMetadata = () => {}

// MOSAIC_SUPPLY_CHANGE
export const createMosaicSupplyChange = () => {}

// MOSAIC_SUPPLY_REVOCATION
export const createMosaicSupplyRevocation = () => {}

// MULTISIG_ACCOUNT_MODIFICATION
export const createMultisigAccountModification = () => {}

// NAMESPACE_METADATA
export const createNamespaceMetadata = () => {}

// NAMESPACE_REGISTRATION
export const createNamespaceRegistration = () => {}

// NODE_KEY_LINK
export const createNodeKeyLink = () => {}

// RESERVED
export const createReserved = () => {}

// SECRET_LOCK
export const createSecretLock = () => {}

// SECRET_PROOF
export const createSecretProof = () => {}

// TRANSFER
export const createTransfer = () => {
  return TransferTransaction.create(
    deadline,
    TestAddress,
    [],
    PlainMessage.create('test-message'),
    TestNetworkType
  )
}

// VOTING_KEY_LINK
export const createVotingKeyLink = () => {}

// VRF_KEY_LINK
export const createVRFKeyLink = () => {}
