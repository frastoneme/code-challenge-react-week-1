import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  function fetchTransactions() {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then(setTransactions);
  }
  useEffect(fetchTransactions, []);

  function handleSearch(search) {
    if (search === "") {
      fetchTransactions(transactions);
    } else {
      const findTransactions = transactions.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setTransactions(findTransactions);
    }
  }
  function removeData(id) {
    const reviewTransactions = transactions.filter((transaction) => {
      return transaction.id !== id;
    });
    setTransactions(reviewTransactions);
  }

  function handleAddTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactions} deleteRecord={removeData} />
    </div>
  );
}
export default AccountContainer;