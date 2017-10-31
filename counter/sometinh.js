class Person{
    constructor(counter){
        this.counter=counter;
        setInterval(()=>this.count(), 1500);
    }
    count(){
        console.log(this.counter);
        this.counter+=1;
    }
}
let Josh=new Person(156);