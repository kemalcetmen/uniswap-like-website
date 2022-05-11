export const transactionSchema = {
    name: 'transactions',
    type: 'document',
      title: 'Transactions',
    fields: [
      {
        name: 'fromAddress',
        type: 'string',
        title: 'From (Wallet Address)'
      },
      {
        name: 'toAddress',
        type: 'string',
        title: 'To (Wallet Address)'
      },
      {
        name: 'amount',
        type: 'number',
        title: 'Amount'
      },
      {
        name: 'timestamp',
        type: 'datetime',
        title: 'Timestamp'
      },
      {
        name: 'txHash',
        type: 'string',
        title: 'Transaction Hash'
      },
    ]
  }