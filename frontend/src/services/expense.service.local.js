
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'expense'

export const expenseService = {
    query,
    getById,
    save,
    remove,
}
window.cs = expenseService


async function query(filterBy = { txt: '', price: 0 }) {
    var expenses = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        expenses = expenses.filter(expense => regex.test(expense.vendor) || regex.test(expense.description))
    }
    if (filterBy.price) {
        expenses = expenses.filter(expense => expense.price <= filterBy.price)
    }
    return expenses
}

function getById(expenseId) {
    return storageService.get(STORAGE_KEY, expenseId)
}

async function remove(expenseId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, expenseId)
}

async function save(expense) {
    var savedExpense
    if (expense._id) {
        savedExpense = await storageService.put(STORAGE_KEY, expense)
    } else {
        // Later, owner is set by the backend
        expense.owner = userService.getLoggedinUser()
        savedExpense = await storageService.post(STORAGE_KEY, expense)
    }
    return savedExpense
}
