import { useEffect, useState } from "react"

export function UserTableData({ userData }) {
    const [amountLeft, setAmountLeft] = useState(null)

    useEffect(() => {
        const amountLeft = calcAmountLeft
        setAmountLeft(amountLeft)
    }, [userData])

    function calcAmountLeft() {
        // 1. get the user monthly budget
        // 2. calculate monthly budget minus the user expenses
        // 3. save the result

        const budget = userData.monthlyIncome
        const totalExpenses = userData.monthlyExpenses.reduce((acc, expense) => acc + expense.amount, 0)
        const amountLeft = budget - totalExpenses
        console.log('amountLeft', amountLeft)
        return amountLeft
    }


    return (
        <div>
            <p>Your monthly budget: {userData.monthlyIncome}</p>
            <table>
                <thead>
                    <tr>
                        <th>info</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.monthlyExpenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.info}</td>
                            <td>{expense.amount}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <p>amount left after expenses: {amountLeft}</p>
        </div>
    )
}
