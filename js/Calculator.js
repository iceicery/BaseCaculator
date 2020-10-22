let biString = "";
let number = 0;
let operator = "";
let whatBase = "";

export default class Calculator {
    constructor(base, resEq) {
        this.base = base;
        this.resEq = resEq;
    }

    clickNumberEventListener() {
        for (let i = 0; i < this.base; i++) {
            document.querySelector(`.btn${this.base}${i}`).addEventListener('click', () => {
                if (whatBase !== "" && whatBase !== this.base) {
                    this.disableButton();
                    this.disableNumberButton();
                    this.disableClrButton();  
                    return;
                }
                if (i > 9) {
                    i = String.fromCharCode(97 + i - 10);
                }
                biString = biString + i;
                this.resEq = this.resEq + i;
                document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
                whatBase = this.base;
                this.enableButton();
            })
        }
    }
    clickOperatorListener() {
        document.querySelector(`.btnSum${this.base}`).addEventListener('click', () => {

            this.resEq = this.resEq + "+";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            let inputNumber = parseInt(biString, this.base);
            this.calculate(inputNumber);
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            operator = "sum";
            biString = "";
            this.disableButton();
        })

        document.querySelector(`.btnSub${this.base}`).addEventListener('click', () => {
            this.resEq = this.resEq + "-";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            let inputNumber = parseInt(biString, this.base);
            this.calculate(inputNumber);
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            operator = "sub";
            biString = "";
            this.disableButton();
        })

        document.querySelector(`.btnMul${this.base}`).addEventListener('click', () => {

            this.resEq = this.resEq + "*";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            let inputNumber = parseInt(biString, this.base);
            this.calculate(inputNumber);
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            operator = "mul";
            biString = "";
            this.disableButton();
        })
        document.querySelector(`.btnDiv${this.base}`).addEventListener('click', () => {

            this.resEq = this.resEq + "/";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            let inputNumber = parseInt(biString, this.base);
            this.calculate(inputNumber);
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            operator = "div";
            biString = "";
            this.disableButton();
        })
    }

    calculate(inputNumber) {
        if (operator === "") {
            number = inputNumber;
        }
        if (operator === "sum") {
            number = number + inputNumber;
        }
        if (operator === "sub") {
            number = number - inputNumber;
        }
        if (operator === "mul") {
            number = number * inputNumber;
        }
        if (operator === "div") {
            number = number / inputNumber;
        }
    }

    disableButton() {
        document.querySelector(`.btnSum${this.base}`).disabled = true;
        document.querySelector(`.btnSub${this.base}`).disabled = true;
        document.querySelector(`.btnMul${this.base}`).disabled = true;
        document.querySelector(`.btnDiv${this.base}`).disabled = true;
        document.querySelector(`.btnEql${this.base}`).disabled = true;
    }

    disableNumberButton() {
        for (let i = 0; i < this.base; i++) {
            document.querySelector(`.btn${this.base}${i}`).disabled = true;

        }
    }
    disableClrButton(){
        document.querySelector(`.btnClr${this.base}`).disabled = true;
    }

    enableClrButton(){
        document.querySelector(`.btnClr${this.base}`).disabled = false;
    }


    enableButton() {
        document.querySelector(`.btnSum${this.base}`).disabled = false;
        document.querySelector(`.btnSub${this.base}`).disabled = false;
        document.querySelector(`.btnMul${this.base}`).disabled = false;
        document.querySelector(`.btnDiv${this.base}`).disabled = false;
        document.querySelector(`.btnEql${this.base}`).disabled = false;
    }

    enableNumberButton() {
        for (let i = 0; i < this.base; i++) {
            document.querySelector(`.btn${this.base}${i}`).disabled = false;

        }
    }
    clickEqualEventListener() {
        document.querySelector(`.btnEql${this.base}`).addEventListener('click', () => {
            let n = parseInt(biString, this.base);
            this.calculate(n);
            document.querySelector(`.res${this.base}`).textContent = number.toString(this.base);
            this.resEq = this.resEq + "=";
            document.querySelector(`.res${this.base}__eq`).textContent = this.resEq;
            this.disableButton();
            this.disableNumberButton();
        })
    }

    clickClrEventListener() {
        document.querySelector(`.btnClr${this.base}`).addEventListener('click', () => {
            biString = "";
            number = 0;
            operator = "";
            this.resEq = "";
            document.querySelector(`.res${this.base}`).textContent = "";
            document.querySelector(`.res${this.base}__eq`).textContent = "";
            whatBase="";
            this.enableButton();
            this.enableNumberButton();
        })
    }

    setEventListener() {
        this.clickNumberEventListener();
        this.clickOperatorListener();
        this.clickEqualEventListener();
        this.clickClrEventListener();
    }


}