import { TestPublicAccount } from './SymbolData'
import { epochAdjustment, TestAddress, TestNetworkType } from './SymbolData'
import { getActiveAddress, getActivePublicKey } from 'sss-module'
import {
  AccountKeyLinkTransaction,
  AccountMetadataTransaction,
  Address,
  AggregateTransaction,
  Convert,
  Deadline,
  HashLockTransaction,
  KeyGenerator,
  LinkAction,
  MetadataTransactionService,
  Mosaic,
  MosaicDefinitionTransaction,
  MosaicFlags,
  MosaicId,
  MosaicNonce,
  MosaicSupplyChangeAction,
  MosaicSupplyChangeTransaction,
  MosaicSupplyRevocationTransaction,
  NamespaceId,
  NamespaceMetadataTransaction,
  NetworkType,
  PlainMessage,
  PublicAccount,
  RepositoryFactoryHttp,
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
  const key = KeyGenerator.generateUInt64Key('METADATA')
  const value = Convert.utf8ToUint8('before-metadata')
  const pubkey = getActivePublicKey()
  const acc = PublicAccount.createFromPublicKey(pubkey, NetworkType.TEST_NET)

  const tx = AccountMetadataTransaction.create(
    deadline,
    acc.address,
    key,
    value.length,
    value,
    NetworkType.TEST_NET
  ).setMaxFee(200)

  const aggregateTransaction = AggregateTransaction.createComplete(
    deadline,
    [tx.toAggregate(acc)],
    NetworkType.TEST_NET,
    []
  ).setMaxFeeForAggregate(200, 0)

  return aggregateTransaction
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
export const createMosaicDefinition = () => {
  const duration = UInt64.fromUint(0)
  const isSupplyMutable = true
  const isTransferable = true
  const isRestrictable = true
  const isRevokable = true
  const divisibility = 0
  const networkType = NetworkType.TEST_NET

  const nonce = MosaicNonce.createRandom()
  const mosaicId = MosaicId.createFromNonce(
    nonce,
    Address.createFromRawAddress(getActiveAddress())
  )
  const defTx = MosaicDefinitionTransaction.create(
    Deadline.create(epochAdjustment),
    nonce,
    mosaicId,
    MosaicFlags.create(
      isSupplyMutable,
      isTransferable,
      isRestrictable,
      isRevokable
    ),
    divisibility,
    duration,
    networkType
  )

  const supTx = MosaicSupplyChangeTransaction.create(
    Deadline.create(epochAdjustment),
    mosaicId,
    MosaicSupplyChangeAction.Increase,
    UInt64.fromUint(1000000 * Math.pow(10, divisibility)),
    networkType
  )

  const pubKey = getActivePublicKey()

  const aggregateTransaction = AggregateTransaction.createComplete(
    Deadline.create(epochAdjustment),
    [
      defTx.toAggregate(PublicAccount.createFromPublicKey(pubKey, networkType)),
      supTx.toAggregate(PublicAccount.createFromPublicKey(pubKey, networkType)),
    ],
    networkType,
    []
  ).setMaxFeeForAggregate(1000, 0)

  return aggregateTransaction
}

// MOSAIC_GLOBAL_RESTRICTION
export const createMosaicGlobalRestriction = () => {}

// MOSAIC_METADATA
export const createMosaicMetadata = () => {}

// MOSAIC_SUPPLY_CHANGE
export const createMosaicSupplyChange = () => {}

// MOSAIC_SUPPLY_REVOCATION
export const createMosaicSupplyRevocation = () => {
  const addr = 'TDHROMJBKZKPWLBDET53Y6UBLP3XM6U7IW6EEGY'
  const mosaic = '0A5A1B054331C320'
  return MosaicSupplyRevocationTransaction.create(
    Deadline.create(epochAdjustment),
    Address.createFromRawAddress(addr),
    new Mosaic(
      new MosaicId(mosaic), // mosice ID 16進数
      UInt64.fromUint(Number(10) * 10)
    ),
    NetworkType.TEST_NET
  ).setMaxFee(200)
}

// MULTISIG_ACCOUNT_MODIFICATION
export const createMultisigAccountModification = () => {}

// NAMESPACE_METADATA
export const createNamespaceMetadata = () => {
  const key = KeyGenerator.generateUInt64Key('TEST')
  const value = 'aaa'
  const publicAccount = PublicAccount.createFromPublicKey(
    'B5876628B63E0C8ED93F51BA61DF779ECF8E290EDBDF0B4B4589D95F9003B6DB',
    NetworkType.TEST_NET
  )
  return NamespaceMetadataTransaction.create(
    Deadline.create(epochAdjustment),
    publicAccount.address,
    key,
    new NamespaceId(''),
    value.length,
    Convert.utf8ToUint8(value),
    NetworkType.TEST_NET
  )
}

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
  ).setMaxFee(200)
}

// VOTING_KEY_LINK
export const createVotingKeyLink = () => {}

// VRF_KEY_LINK
export const createVRFKeyLink = () => {}
