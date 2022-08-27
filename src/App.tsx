import './App.css'
import { requestSign, setTransaction } from 'sss-module'
import { createAccountKeyLink, createTransfer } from './libs/TransactionCreater'
import { Transaction, TransactionType } from 'symbol-sdk'
import { txs } from './libs/SymbolData'

function App() {
  const setTx = (type: TransactionType) => {
    const tx: Transaction = (() => {
      switch (type) {
        case TransactionType.ACCOUNT_KEY_LINK:
          return createAccountKeyLink()
        // case TransactionType.ACCOUNT_METADATA:
        // case TransactionType.ACCOUNT_MOSAIC_RESTRICTION:
        // case TransactionType.ACCOUNT_OPERATION_RESTRICTION:
        // case TransactionType.ADDRESS_ALIAS:
        // case TransactionType.AGGREGATE_BONDED:
        // case TransactionType.AGGREGATE_COMPLETE:
        // case TransactionType.HASH_LOCK:
        // case TransactionType.MOSAIC_ADDRESS_RESTRICTION:
        // case TransactionType.MOSAIC_ALIAS:
        // case TransactionType.MOSAIC_DEFINITION:
        // case TransactionType.MOSAIC_GLOBAL_RESTRICTION:
        // case TransactionType.MOSAIC_METADATA:
        // case TransactionType.MOSAIC_SUPPLY_CHANGE:
        // case TransactionType.MOSAIC_SUPPLY_REVOCATION:
        // case TransactionType.MULTISIG_ACCOUNT_MODIFICATION:
        // case TransactionType.NAMESPACE_METADATA:
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
    })
  }

  return (
    <div className="App">
      {txs.map((tx) => (
        <button onClick={() => setTx(tx.type)}>{tx.text}</button>
      ))}
    </div>
  )
}

export default App
