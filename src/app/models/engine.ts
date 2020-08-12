export class Engine {
    fuel:'Petrol' | 'disel' | 'electric';
    power:number;
    consumption:number;

    Engine(){
        this.fuel = 'Petrol';
        this.power = 0;
        this.consumption = 0;

    }
}
