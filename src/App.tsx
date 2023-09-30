import './App.css'
import {
  getActiveAddress,
  getActivePublicKey,
  requestSSS,
  requestSign,
  setTransaction,
} from 'sss-module'
import {
  createAccountKeyLink,
  createAccountMetadata,
  createMosaicDefinition,
  createMosaicSupplyRevocation,
  createNamespaceMetadata,
  createTransfer,
} from './libs/TransactionCreator'
import {
  Account,
  AggregateTransaction,
  Convert,
  Deadline,
  KeyGenerator,
  Listener,
  MetadataTransactionService,
  MosaicId,
  NamespaceId,
  NetworkType,
  PublicAccount,
  RepositoryFactoryHttp,
  Transaction,
  TransactionService,
  TransactionType,
  UInt64,
} from 'symbol-sdk'
import { txs } from './libs/SymbolData'
import { useEffect } from 'react'
import {
  epochAdjustment,
  TestAddress,
  TestNetworkType,
} from './libs/SymbolData'
interface SSSWindow extends Window {
  SSS: any
}

const deadline = Deadline.create(epochAdjustment)

declare const window: SSSWindow
const GENERATION_HASH =
  '49D6E1CE276A85B70EAFE52349AACCA389302E7A9754BCF1221E79494FC665A4'
const NODE_URL = 'https://sym-test-03.opening-line.jp:3001'

function App() {
  const setTx4 = () => {
    const key = UInt64.fromHex('AEB37E8BA5D3AB32')

    const value = 'after'
    const pubkey = getActivePublicKey()
    const acc = PublicAccount.createFromPublicKey(pubkey, NetworkType.TEST_NET)
    const repo = new RepositoryFactoryHttp(
      'https://sym-test-03.opening-line.jp:3001'
    )

    const metaRepo = repo.createMetadataRepository()
    const metaSer = new MetadataTransactionService(metaRepo)

    // metaSer
    //   .createAccountMetadataTransaction(
    //     deadline,
    //     NetworkType.TEST_NET,
    //     acc.address,
    //     key,
    //     value,
    //     acc.address,
    //     UInt64.fromUint(1000000)
    //   )
    metaSer
      .createNamespaceMetadataTransaction(
        deadline,
        NetworkType.TEST_NET,
        acc.address,
        NamespaceId.createFromEncoded('95B8D8FB6A675190'),
        key,
        value,
        acc.address,
        UInt64.fromUint(1000000)
      )
      .toPromise()
      .then((tx) => {
        if (!!tx) {
          const aggregateTransaction = AggregateTransaction.createComplete(
            deadline,
            [tx.toAggregate(acc)],
            NetworkType.TEST_NET,
            []
          ).setMaxFeeForAggregate(200, 0)
          setTransaction(aggregateTransaction)
          requestSign().then((signedTx) => {
            console.log({ signedTx })

            const rep = new RepositoryFactoryHttp(NODE_URL)
            const txRep = rep.createTransactionRepository()
            const nsRep = rep.createNamespaceRepository()
            const msRep = rep.createMultisigRepository()
            const recRep = rep.createReceiptRepository()

            const txSer = new TransactionService(txRep, recRep)

            // txRep.announce(signedTx)
            const wsEndpoint = NODE_URL.replace('http', 'ws') + '/ws'
            const listener = new Listener(wsEndpoint, nsRep, WebSocket, msRep)

            listener.open().then(() => {
              txSer.announce(signedTx, listener).subscribe(
                (tx) => console.log('tx', tx),
                (e) => console.log('err', e)
              )
            })
          })
        }
      })
  }
  const setTx3 = () => {
    const key = UInt64.fromHex('AEB37E8BA5D3AB32')

    const value = 'after'
    const pubkey = getActivePublicKey()
    const acc = PublicAccount.createFromPublicKey(pubkey, NetworkType.TEST_NET)
    const repo = new RepositoryFactoryHttp(
      'https://sym-test-03.opening-line.jp:3001'
    )

    const metaRepo = repo.createMetadataRepository()
    const metaSer = new MetadataTransactionService(metaRepo)

    // metaSer
    //   .createAccountMetadataTransaction(
    //     deadline,
    //     NetworkType.TEST_NET,
    //     acc.address,
    //     key,
    //     value,
    //     acc.address,
    //     UInt64.fromUint(1000000)
    //   )
    metaSer
      .createMosaicMetadataTransaction(
        deadline,
        NetworkType.TEST_NET,
        acc.address,
        new MosaicId('07B5276EA6F94F63'),
        key,
        value,
        acc.address,
        UInt64.fromUint(1000000)
      )
      .toPromise()
      .then((tx) => {
        if (!!tx) {
          const aggregateTransaction = AggregateTransaction.createComplete(
            deadline,
            [tx.toAggregate(acc)],
            NetworkType.TEST_NET,
            []
          ).setMaxFeeForAggregate(200, 0)
          setTransaction(aggregateTransaction)
          requestSign().then((signedTx) => {
            console.log({ signedTx })

            const rep = new RepositoryFactoryHttp(NODE_URL)
            const txRep = rep.createTransactionRepository()
            const nsRep = rep.createNamespaceRepository()
            const msRep = rep.createMultisigRepository()
            const recRep = rep.createReceiptRepository()

            const txSer = new TransactionService(txRep, recRep)

            // txRep.announce(signedTx)
            const wsEndpoint = NODE_URL.replace('http', 'ws') + '/ws'
            const listener = new Listener(wsEndpoint, nsRep, WebSocket, msRep)

            listener.open().then(() => {
              txSer.announce(signedTx, listener).subscribe(
                (tx) => console.log('tx', tx),
                (e) => console.log('err', e)
              )
            })
          })
        }
      })
  }
  const setTx2 = () => {
    const key = KeyGenerator.generateUInt64Key('METADATA')

    const value = 'before'
    const pubkey = getActivePublicKey()
    const acc = PublicAccount.createFromPublicKey(pubkey, NetworkType.TEST_NET)
    const repo = new RepositoryFactoryHttp(
      'https://sym-test-03.opening-line.jp:3001'
    )

    const metaRepo = repo.createMetadataRepository()
    const metaSer = new MetadataTransactionService(metaRepo)

    // metaSer
    //   .createAccountMetadataTransaction(
    //     deadline,
    //     NetworkType.TEST_NET,
    //     acc.address,
    //     key,
    //     value,
    //     acc.address,
    //     UInt64.fromUint(1000000)
    //   )
    metaSer
      .createMosaicMetadataTransaction(
        deadline,
        NetworkType.TEST_NET,
        acc.address,
        new MosaicId('76FFE5FD6F943591'),
        key,
        value,
        acc.address,
        UInt64.fromUint(1000000)
      )
      .toPromise()
      .then((tx) => {
        if (!!tx) {
          const aggregateTransaction = AggregateTransaction.createComplete(
            deadline,
            [tx.toAggregate(acc)],
            NetworkType.TEST_NET,
            []
          ).setMaxFeeForAggregate(200, 0)
          setTransaction(aggregateTransaction)
          requestSign().then((signedTx) => {
            console.log({ signedTx })

            const rep = new RepositoryFactoryHttp(NODE_URL)
            const txRep = rep.createTransactionRepository()
            const nsRep = rep.createNamespaceRepository()
            const msRep = rep.createMultisigRepository()
            const recRep = rep.createReceiptRepository()

            const txSer = new TransactionService(txRep, recRep)

            // txRep.announce(signedTx)
            const wsEndpoint = NODE_URL.replace('http', 'ws') + '/ws'
            const listener = new Listener(wsEndpoint, nsRep, WebSocket, msRep)

            listener.open().then(() => {
              txSer.announce(signedTx, listener).subscribe(
                (tx) => console.log('tx', tx),
                (e) => console.log('err', e)
              )
            })
          })
        }
      })
  }

  const setTx = (type: TransactionType) => {
    const tx: Transaction = (() => {
      switch (type) {
        case TransactionType.ACCOUNT_KEY_LINK:
          return createAccountKeyLink()
        case TransactionType.ACCOUNT_METADATA:
          return createAccountMetadata()
        // return createAccountMetadata()
        // case TransactionType.ACCOUNT_MOSAIC_RESTRICTION:
        // case TransactionType.ACCOUNT_OPERATION_RESTRICTION:
        // case TransactionType.ADDRESS_ALIAS:
        // case TransactionType.AGGREGATE_BONDED:
        // case TransactionType.AGGREGATE_COMPLETE:
        // case TransactionType.HASH_LOCK:
        // case TransactionType.MOSAIC_ADDRESS_RESTRICTION:
        // case TransactionType.MOSAIC_ALIAS:
        case TransactionType.MOSAIC_DEFINITION:
          return createMosaicDefinition()
        // case TransactionType.MOSAIC_GLOBAL_RESTRICTION:
        // case TransactionType.MOSAIC_METADATA:
        // case TransactionType.MOSAIC_SUPPLY_CHANGE:
        case TransactionType.MOSAIC_SUPPLY_REVOCATION:
          return createMosaicSupplyRevocation()
        // case TransactionType.MULTISIG_ACCOUNT_MODIFICATION:
        case TransactionType.NAMESPACE_METADATA:
          return createNamespaceMetadata()
        // case TransactionType.NAMESPACE_REGISTRATION:
        // case TransactionType.NODE_KEY_LINK:
        // case TransactionType.RESERVED:
        // case TransactionType.SECRET_LOCK:
        // case TransactionType.SECRET_PROOF:
        case TransactionType.TRANSFER:
          return createTransfer()
        // case TransactionType.VOTING_KEY_LINK:
        // case TransactionType.VRF_KEY_LINK:
        default:
          return createTransfer()
      }
    })()
    console.log({ tx })
    setTransaction(tx)
    requestSign().then((signedTx) => {
      console.log({ signedTx })

      const rep = new RepositoryFactoryHttp(NODE_URL)
      const txRep = rep.createTransactionRepository()
      const nsRep = rep.createNamespaceRepository()
      const msRep = rep.createMultisigRepository()
      const recRep = rep.createReceiptRepository()

      const txSer = new TransactionService(txRep, recRep)

      // txRep.announce(signedTx)
      const wsEndpoint = NODE_URL.replace('http', 'ws') + '/ws'
      const listener = new Listener(wsEndpoint, nsRep, WebSocket, msRep)

      listener.open().then(() => {
        txSer.announce(signedTx, listener).subscribe(
          (tx) => console.log('tx', tx),
          (e) => console.log('err', e)
        )
      })
    })
  }

  useEffect(() => {
    // window.SSS.setMessage('test message')
    // const f = async () => {
    //   const res = await window.SSS.callbackMessage(hellow)
    //   console.log({ res })
    // }
    // f()
    requestSSS()
  }, [])

  return (
    <div className="App">
      {txs.map((tx) => (
        <button onClick={() => setTx(tx.type)}>{tx.text}</button>
      ))}
      <button onClick={() => setTx4()}>UPDATE METADATA</button>
    </div>
  )
}

export default App
