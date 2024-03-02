export function NewExpense({ handleChange, newExpensesAdd }) {
    return (
        <section>
            <p>enter new monthly expenses, and write some information about it so our AI can help you analyze and have better budget</p>

            <div>
                <label htmlFor="">new expenses</label>
                <input type="number" name="expenses-amount" onChange={handleChange} />
                <label> info about expenses</label>
                <input type="text" name="expenses-info" onChange={handleChange} />
                <button onClick={() => newExpensesAdd()}>add</button>
            </div>
        </section>
    )
}