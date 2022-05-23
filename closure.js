/* 
==> akhner balance er man koto eta jante parbo na. ar atai closure.
const bank = owner => {
    balance = 0;
    return amount => {
        //balance = balance + amount;
        balance += amount;
        return balance;
    }
} 
*/
// this concept litte bit advance
const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            //balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            //balance = balance + amount;
            balance -= amount;
            return balance;
        }
    }
}

const BankAsia = bank('Mr. Arfan Ali');
console.log(BankAsia.deposit(100));
console.log(BankAsia.deposit(300));
console.log(BankAsia.deposit(100));
console.log(BankAsia.balance);
console.log(BankAsia.deposit(200));
console.log(BankAsia.withdraw(200));
console.log(BankAsia.withdraw(50));  
