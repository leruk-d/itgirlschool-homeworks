class Worker{
    constructor(name,surname,rate,days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate,days){
        return this.rate * this.days;
    }
}