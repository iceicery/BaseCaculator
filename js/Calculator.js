let biString = "";
let number = 0;
let operator = "";

export default class Calculator {
    constructor(base) {
        this.base = base;
    }

    clickNumberEventListener() {
        for (let i = 0; i < this.base; i++) {
            document.querySelector(`.btn${this.base}${i}`).addEventListener('click', () => {
                biString = biString + i;
                document.querySelector(`.res${this.base}`).textContent = biString;
            })
        }
    }
    clickOperatorListener() {
        document.querySelector(`.btnSum${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "sum";
            biString = "";
        })

        document.querySelector(`.btnSub${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "sub";
            biString = "";
        })

        document.querySelector(`.btnMul${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "mul";
            biString = "";
        })
        document.querySelector(`.btnDiv${this.base}`).addEventListener('click', () => {
            number = parseInt(biString, this.base);
            operator = "div";
            biString = "";
        })
    }
    setEventListener() {
        this.clickNumberEventListener();
        this.clickOperatorListener();
        document.querySelector(`.btnEql${this.base}`).addEventListener('click', () => {
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
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
        })

        document.querySelector(`.btnClr${this.base}`).addEventListener('click', () => {
            biString = "";
            number = 0;
            operator = "";
            document.querySelector(`.res${this.base}`).textContent = "";
        })
    }


}