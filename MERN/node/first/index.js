import add from "./cal.js"; // default 
import { subt, multi } from "./cal.js"; // named
import otpGenerator from "otp-generator";

const res1 = add(2, 2);
// console.log(res1);

// const res2 = subt(40, 10);
// console.log(res2);

// const res3 = multi(10, 4);
// console.log(res3);

const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: true,
    upperCaseAlphabets: false,
    digits: true,
    specialChars: false
});
console.log(otp)