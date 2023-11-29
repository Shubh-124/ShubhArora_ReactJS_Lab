import axios from "axios";
import { IExpenseCreateItem } from "../models/expense";

const getAllExpenseItems = async () => {

  const response = await axios.get("http://localhost:3000/expenses")

  return response.data;
}

const createNewExpenseItem = async (newExpenseObj: IExpenseCreateItem) => {

  const response = await axios.post(
    "http://localhost:3000/expenses", newExpenseObj, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return response.data;
}

export { getAllExpenseItems, createNewExpenseItem }