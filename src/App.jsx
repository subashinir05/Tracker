import { useState } from 'react'
import AddTransaction from './Components/AddTransaction'
import './App.css'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExp from './Components/IncomeExp'
import TransactionList from './Components/TransactionList'

function App() {
  //Main initial data
  const initialState = {
    transaction: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ],
  }


  //used useState for updateing and passing props for other components
  const [transactions, setTransaction] = useState(initialState.transaction);

  //function for delete transaction card using ID in History
  function deleteTransaction(id){
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransaction(updatedTransactions);
  }
  
  //function for adding transaction card using text and amount as parameter from the user and id generate with random function [1-1000000] number in History
  function addTransaction(text, amount) {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount

    };
    setTransaction([...transactions,newTransaction])
  }

  return (
    <>
      {/* List of components and props(State,functions) are passed */}
      <Header />
      <Balance transactions={ transactions} />
      <IncomeExp transactions={ transactions} />
      <TransactionList transactions={transactions} deleteTransaction={ deleteTransaction} />
      <AddTransaction transactions={transactions} addTransaction={ addTransaction} />
    </>
  )
}

export default App
// Additonally add some modules and add favicon and title heading in index.html and upload it in GitHub....
