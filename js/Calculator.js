let biString = "";
let number = 0;
let operator = "";

export default class Calculator {
    constructor(base,resEq) {
        this.base = base;
        this.resEq=resEq;
    }

    clickNumberEventListener() {
        for (let i = 0; i < this.base; i++) {
            document.querySelector(`.btn${this.base}${i}`).addEventListener('click', () => {
                biString = biString + i;
                this.resEq=this.resEq+i;
                document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            })
        }
    }
    clickOperatorListener() {
        document.querySelector(`.btnSum${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "sum";
            this.resEq=this.resEq+"+";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            biString = "";
        })

        document.querySelector(`.btnSub${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "sub";
            this.resEq=this.resEq+"-";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            biString = "";
        })

        document.querySelector(`.btnMul${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "mul";
            this.resEq=this.resEq+"*";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            biString = "";
        })
        document.querySelector(`.btnDiv${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "div";
            this.resEq=this.resEq+"-";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            biString = "";
        })
    }
    
    calculate(){
        let n = parseInt(biString, this.base);
            if (operator === "sum") {
                number = number + n;
            }
            if (operator === "sub") {
                number = number - n;
            }
            if (operator === "mul") {
                number = number * n;
            }
            if (operator === "div") {
                number = number / n;
            }
    }

    setEventListener() {
        this.clickNumberEventListener();
        this.clickOperatorListener();
        document.querySelector(`.btnEql${this.base}`).addEventListener('click', () => {
            this.calculate();
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            this.resEq=this.resEq+"=";
            document.querySelector(`.res${this.base}__eq`).textContent=this.resEq;
        })

        document.querySelector(`.btnClr${this.base}`).addEventListener('click', () => {
            biString = "";
            number = 0;
            operator = "";
            this.resEq="";
            document.querySelector(`.res${this.base}`).textContent = "";
            document.querySelector(`.res${this.base}__eq`).textContent="";         
        })
    }


}