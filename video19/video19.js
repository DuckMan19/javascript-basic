console.log("Hello world from Hao");

let sum = (a, b) =>{ 
    return a + b;
}
console.log(`check sum ${sum(9, 5)}`);


let obj ={
    name : 'Hao',
    address:'HCM',
    getName:function(){
        return this.name;
    }
}
console.log("get Name obj: ",obj.getName()); 