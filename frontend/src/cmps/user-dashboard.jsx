import { useEffect, useState } from "react"
import { userService } from "../services/user.service"
import { expenseService } from '../services/expense.service.local'

// component
import { NewExpense } from "./new-expense"
import { UserTableData } from "./table-user-data"


export function UserDashboard() {
    const [newExpenses, setNewExpenses] = useState(false)
    const [income, setIncome] = useState(null)
    const [currUser, setCurrUser] = useState({ name: '', income: 0 })
    const [userData, setUserData] = useState({ monthlyIncome: 0, monthlyExpenses: [] })
    const objExpenses = { amount: 0, info: '' }

    useEffect(() => {
        handleCurrentUser()

    }, [])

    // if in expenses in local storage there is existing expenses with the same logged in id
    // get the logged in user id
    // get the expenses objects
    // search in each object by expenses owner id
    // if there is match by id get the expenses object 


    useEffect(() => {
        async function saveUserData() {
            await expenseService.save(userData);
        }

        if (userData.monthlyIncome !== 0) {
            saveUserData();
        }
    }, [userData]);



    async function handleCurrentUser() {
        const loggedInUser = userService.getLoggedinUser()
        setCurrUser((prevCurrUser) => ({
            ...prevCurrUser,
            name: loggedInUser.fullname
        }))


    }

    function handleChange(ev) {
        const { name, value } = ev.target
        const numericValue = name === 'expenses-amount' ? +value : value;
        name === 'expenses-amount' ? objExpenses['amount'] = numericValue : objExpenses['info'] = value
    }

    // when user set his income
    async function onSetBudget(income) {
        const integerValue = +income
        if (!integerValue) return console.log('user didnt set monthly income')
        await setUserData((prevUserData) => ({
            ...prevUserData,
            monthlyIncome: integerValue
        }))
    }

    async function newExpensesAdd() {
        setUserData((prevUserData => ({
            ...prevUserData,
            monthlyExpenses: [...prevUserData.monthlyExpenses, objExpenses],
        })))
    }

    return (
        <section>
            <div>
                <p>Welcome {currUser.name}</p>

                <p>set information so our tool can help you track your monthly budget</p>
                <p>first, enter your monthly income</p>
                <p>after your enter your monthly income just add your monthly expenses</p>

                {/* {userData.monthlyIncome === 0 ? <div>
                    <label htmlFor="">your monthly income
                        <input type="number" placeholder="monthly income" onChange={(e) => setIncome(e.target.value)} />
                        <button onClick={() => onSetBudget(income)}>Set Budget</button>
                    </label>
                </div> : null} */}
                <div>
                    <label htmlFor="">your monthly income
                        <input type="number" placeholder="monthly income" onChange={(e) => setIncome(e.target.value)} />
                        <button onClick={() => onSetBudget(income)}>Set Budget</button>
                    </label>
                </div>

                <button onClick={() => setNewExpenses(!newExpenses)}>add new expenses</button>

                {newExpenses ?
                    <NewExpense handleChange={handleChange} newExpensesAdd={newExpensesAdd} />
                    : null}
            </div>

            <div>
                <UserTableData userData={userData}/>
                
            </div>
        </section>
    )
}