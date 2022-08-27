import { TestPublicAccount } from './SymbolData'
import { epochAdjustment, TestAddress, TestNetworkType } from './SymbolData'
import { requestSign, setTransaction } from 'sss-module'
import {
  AccountKeyLinkTransaction,
  Deadline,
  LinkAction,
  PlainMessage,
  TransferTransaction,
} from 'symbol-sdk'

const deadline = Deadline.create(epochAdjustment)

export const createAccountKeyLinkTransaction = () => {
  return AccountKeyLinkTransaction.create(
    deadline,
    TestPublicAccount.publicKey,
    LinkAction.Link,
    TestNetworkType
  )
}

export const createTransferTransaction = () => {
  return TransferTransaction.create(
    deadline,
    TestAddress,
    [],
    PlainMessage.create('test-message'),
    TestNetworkType
  )
}
