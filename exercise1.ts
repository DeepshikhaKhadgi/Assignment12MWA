let bankAccount:{money:number,deposit:(value:number)=>number} = {
    money:2000,
    deposit(value){
      return  this.money +=value;
    }
};

let myself:{name:string, bankAccount: typeof bankAccount, hobbies: string[]} = {
    name:"Asaad",
    bankAccount: bankAccount,
    hobbies : ["Violin","Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);