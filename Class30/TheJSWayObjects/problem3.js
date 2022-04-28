// Account List
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges.
// These accounts are stored in an array.Next, the program credits 1000 to each account and shows its description.

// "owner: Sean, balance: 1000"
// "owner: Brad, balance: 1000"
// "owner: Georges, balance: 1000"

class Account {
  constructor(accoutnHolder) {
    this.name = accoutnHolder;
    this.balance = 0;
  }
  credit(amount) {
    this.balance += amount;
  }
  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

// const sean = new Account("Sean", 1000);
// const brad = new Account("Brad", 1000);
// const georges = new Account("Georges", 1000);

// use array storage and drop them into an array
const accountList = [
  new Account("Sean"),
  new Account("Brad"),
  new Account("Georges"),
];

console.log(accountList[0]);
console.log(accountList[1]);
console.log(accountList[2]);

accountList.forEach((item) => {
  item.credit(+1000);
  console.log(item.describe());
});
