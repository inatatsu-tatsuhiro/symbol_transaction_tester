import './App.css'
import { requestSign, setTransaction } from 'sss-module'
import {
  createAccountKeyLinkTransaction,
  createTransferTransaction,
} from './libs/TransactionCreater'
import { TransactionType } from 'symbol-sdk'

function App() {
  const accopuntKeyLinkTransaction = () => {
    const tx = createAccountKeyLinkTransaction()
    console.log({ tx })
    setTransaction(tx)
    requestSign().then((signedTx) => {
      console.log({ signedTx })
    })
  }
  const transferTransaction = () => {
    const tx = createTransferTransaction()
    console.log({ tx })
    setTransaction(tx)
    requestSign().then((signedTx) => {
      console.log({ signedTx })
    })
  }

  const setTx = (type: TransactionType) => {}

  return (
    <div className="App">
      <button onClick={accopuntKeyLinkTransaction}>AccountKeyLink</button>
      <button onClick={transferTransaction}>Transfer</button>
    </div>
  )
}

export default App
