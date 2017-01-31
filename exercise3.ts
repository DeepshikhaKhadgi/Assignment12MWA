class baseObject{
    width:number = 0;
    length:number =0;
}

class rectangle extends baseObject{

    constructor(public width:number,public length:number){
        super();
        
    }

    calcSize():number{
        return this.width * this.length;
    }
}

let rectangleObj = new rectangle(5,2);
console.log(rectangleObj.calcSize());
