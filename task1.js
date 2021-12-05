
class AClass { 
    Numbers = [];
    constructor(n) { 
        this.n = n;
        if(!n) {
            throw new Error('No args');
        }
        this.#fill();
    }

    #fill() { 
        for (let i=0; i < this.n; i++) {
            this.Numbers.push(Math.floor(Math.random()*(10-1+1)+1)); //random numbers 1-10
        }
    }

    factorial() { 
        const Factorials = this.Numbers.map(
            function getFactorial (number) {
                return (number == 0 ? 1 : number * getFactorial(number-1));
            }
        )
        console.log(Factorials);
    }

    sort() {
    }

}


class Class1 extends AClass {
    sort(){
        this.Numbers = this.Numbers.sort(function(x, y){
            return x - y;
        });
        console.log(this.Numbers);
        this.factorial();
    }
}


class Class2 extends AClass {
    sort(){
        this.Numbers = this.Numbers.sort(function(x, y){
            return y - x;
        });
        console.log(this.Numbers);
        this.factorial();
    }
}

const test = new Class1(1);
const test2 = new Class2(2);
test.sort();
test2.sort();
