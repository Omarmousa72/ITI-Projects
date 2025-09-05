// 1-
// Types
let x :number = 5;
let y :String = "Omar";
let q :boolean = true;
let arr :number[] = [1,2,3,4,5];
let arr2 :Array<String> = ["Omar", "Ali", "Ahmed"];
let arr3 :any[] = [1, "Omar", true, 4.5];
console.log(x);
console.log(y);
console.log(q);
console.log(arr);
console.log(arr2); 
console.log(arr3);
// Union Types
let z :number | String;
z = "Value";
console.log(z);
z = 10;
console.log(z);
// Function with typed arguments and return type
function add(a:number, b:number): Number{
    return a + b;
}
console.log("Sum is: " + add(5, 10));
// Enum
enum directions {
    Up,
    Down,
    Left,
    Right
}
console.log(`The up direction is: ${directions.Up}`);
// Generics
function something<T>(argument:T):T{
    return argument;
}
console.log(something<String>("Hello from generics"));
console.log(something<Number>(100));
// --- IGNORE --- 
// Modules
// Uncomment these 2-lines to test modules code but now its commented to avoid error because modules somehow is not working.
// import {test} from './index2';
// test(); 
// --- IGNORE ---   
// 2-
class Point2D{
    protected x:number;
    protected y:number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    calculateLength = ():number => {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
let point1:Point2D = new Point2D(2,4);
console.log(`The length of x,y is ${point1.calculateLength()}`);
// 3-
class Point3D extends Point2D{
    private z:number;
    constructor(x:number, y:number, z:number){
        super(x,y);
        this.z = z;
    }
    override calculateLength = ():number =>{
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
}
let point2:Point3D = new Point3D(2,4,6);
console.log(`The length of x,y,z is ${point2.calculateLength()}`);
