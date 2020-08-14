import Calculator from "./Calculator.js";

const biCalculator = new Calculator(2,"");
biCalculator.setEventListener();

const octCalculator=new Calculator(8,"");
octCalculator.setEventListener();

const decCalculator=new Calculator(10,"");
decCalculator.setEventListener();

const hexCalculator=new Calculator(16,"");
hexCalculator.setEventListener();
