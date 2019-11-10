'use strict';

let message;
const problems = 'Cнятие такой суммы не возможно, недостаточно средств на счету';

const account = {
    balance: 0,

    transactions: [],

    deposit(amount) {
        const transactionDeposit = { id: 'id-1', type: 'deposit', amount: 0 }
        this.addTransaction(transactionDeposit);

        return this.balance += amount;
    },

    withdraw(amount) {
        const transactionWithdraw = { id: 'id-2', type: 'withdraw', amount: 0 }
        this.addTransaction(transactionWithdraw);

        return this.balance < amount ? problems : this.balance -= amount;
    },

    addTransaction(transaction) {
        return this.transactions.push(transaction);
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        let res;
        for (let i = 0; i < this.transactions.length; i += 1) {

            const arr = this.transactions[i];
            if (arr.id === id) {
                res = this.transactions[i];
            };
        }
        return res;
    },

};

//===method-1====
console.log('deposit:', account.deposit(300));

//===method-2====
console.log('withdraw:', account.withdraw(350));

//=====method-3=====
console.log('addTransaction:', account.addTransaction({ id: 'id-3', type: 'type-withdraw', amount: 0 }));

//====method-4=====
console.log('get balance:', account.getBalance());

//===method-5======
console.log('get transaction details:', account.getTransactionDetails('id-2'));

//==method-6==getTransactionTotal(type) {}, - пробую разобраться.


console.log('трансакции:', account.transactions);

console.log('массив account:', account);