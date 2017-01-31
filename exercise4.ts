class Person{
    private _firstName: string = "";

    get firstName(){
        return this._firstName;
    }

    set firstName(value:String){
        this._firstName = value.toUpperCase();
    }

    enumerable: true;
    configurable:true;
   
}

let person = new Person();
person.firstName = "Asaad";
console.log(person.firstName);