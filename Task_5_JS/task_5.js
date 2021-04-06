class Car {

    static getSpecs(car){
        console.log(`maxSpeed:${car.maxSpeed},speed: ${car.speed},isOn: ${car.isOn},distance: ${car.distance},price: ${car.price}`);
    }
    
    constructor(speed = 0,price,maxSpeed,isOn = false,distance = 0 ) {
        this.speed = speed;
        this.price= price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;

    }
    get priceGet(){
      return this.price;

    }

    set priceSet(num){
        return this.price + num; }
    
    turnOn() {
        this.isOn = true;
    }
  
    
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    
        accelerate(value) {
        if(this.speed + value < this.maxSpeed)
        {
           this.speed += value;
        }
        else{
            console.log("Слишком быстро!")
        }
    }
   
    
    decelerate(value) {
        if(this.speed - value > 0)
        {
            this.speed -= value;
        }
        else{
            console.log( "Слишком медленно!")
        }
    }
    
    drive(hours) {
        if(this.isOn == true){
            this.distance += hours * this.speed;
            return this.distance;
        }
        else{
           console.log( "Машина не заведена!")
        }
    }
  }
  const mustang = new Car(  200, 50, true, 100,2000);
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000