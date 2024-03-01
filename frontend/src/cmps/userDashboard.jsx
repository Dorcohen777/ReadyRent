import { useEffect, useState } from "react"
import { userService } from "../services/user.service"

export function UserDashboard() {
    const [currUser, setCurrUser] = useState(null)
    const [newExpenses, setNewExpenses] = useState(false)
    const [userData, setUserData] = useState({ monthlyIncome: 0, monthlyExpenses: [] })
    const objExpenses = { amount: 0, info: '' }

    useEffect(() => {
        const loggedInUser = getCurrUser()
        setCurrUser(loggedInUser.fullname)
    })

    // get the user name
    function getCurrUser() {
        const currUser = userService.getLoggedinUser()
        return currUser
    }

    function newExpensesAdd() {
        setUserData((prevUserData => ({
            ...prevUserData,
            monthlyExpenses: [...prevUserData.monthlyExpenses, objExpenses],
        })))
    }

    function handleChange(ev) {
        const { name, value } = ev.target
        const numericValue = name === 'expenses-amount' ? +value : value;
        name === 'expenses-amount' ? objExpenses['amount'] = numericValue : objExpenses['info'] = value

        console.log(objExpenses)
    }

    return (
        <section>
            <p>Welcome {currUser}</p>


            <p>set information so our tool can help you track your monthly budget</p>
            <p>first, enter your monthly income</p>
            <p>after your enter your monthly income just add your monthly expenses</p>
            <div>
                <label htmlFor="">your monthly income
                    <input type="number" name="" placeholder="monthly income" />
                </label>
            </div>
            <button onClick={() => setNewExpenses(!newExpenses)}>add new expenses</button>


            {newExpenses ?
                <section>
                    <p>enter new monthly expenses, and write some information about it so our AI can help you analyze and have better budget</p>

                    <div>
                        <label htmlFor="">new expenses</label>
                        <input type="number" name="expenses-amount" onChange={handleChange} />
                        <label> info about expenses</label>
                        <input type="text" name="expenses-info" onChange={handleChange} />
                        <button onClick={() => newExpensesAdd()}>add</button>
                    </div>
                </section> : null}

        </section>
    )
}