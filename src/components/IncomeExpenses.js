import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions.filter((transaction) => transaction.amount > 0);
  const incomesArr = incomes.map((income) => income.amount);
  const totalIncome = incomesArr.reduce((a, b) => a + b, 0);
  const expenses = transactions.filter((transaction) => transaction.amount < 0);
  const expensesArr = expenses.map((expense) => expense.amount);
  const totalExpenses = expensesArr.reduce((a, b) => a + b, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(totalExpenses)}
        </p>
      </div>
    </div>
  );
};
