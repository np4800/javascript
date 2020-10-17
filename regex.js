console.log('---REGEX TUTORIAL---');

let reg = /harry/;  // This is regurlar expression in JS
reg = /harry/g; //global
// reg = /harry/i; //case-insensitive
console.log(reg);
console.log(reg.source);

// Function to match expressions

let s = "This is great code with harry in harry is good tutor";

let result = reg.exec(s); // This function will return an array for match or null for no match
console.log(result);
result = reg.exec(s);
console.log(result);

let result1 = reg.test(s); // This function will return true if "reg" is there in string "s"
console.log(result1);

// let result2 = reg.match(s);  // this wrong way of defining the match function. Correct way is follows
let result2 = s.match(reg);
// This funtion will return an array of result or null. e.g if there is an existence of harry 2 times the it will shown as 2 elements of array in the result.
console.log(result2);

let result3 = s.search(reg); // Return index of the first match else -1
console.log(result3);

let result4 = s.replace(reg, 'Nikhil'); // returns new replaced with all the replacements
console.log(result4);

console.log("---METACHARACTER TUTORIAL---");
let regex = /harry/;
regex = /^harry/;
regex = /ry$/;
regex = /h.rry/;
regex = /h*rry/;
regex = /ha?rryi?t/;

let str = "The harry is a good boy and harry is code with harry";

let result5 = regex.exec(str);
console.log(result5);

if (regex.test(str)) {
  console.log(`The string ${str} MATCHES ${regex.source}`);
} else {
  console.log(`The string ${str} DOES NOT MATCH ${regex.source}`);
}

console.log("---CHARACTER SETS---");
let regexp = /h[a-z]rry/;
regexp = /h[aty]rry/;
regexp = /h[^aty]rry/; // cannot be any of a t y
regexp = /h[^aty]rr[yYu]/; // cannot be any of a t y + can be of u y
regexp = /h[a-zA-Z]rr[yu0-9][0-9]/;


//Quantifiers
regexp = /har{2}y/; // r can occur exactly 2 times;
regexp = /har{0,2}y/; // r can occur 0 or 1 or 2 times;

// Groupings
regexp = /(har){2}/;

let str1 = "harry bhai";
str1 = "harhar bhai";
let result6 = regexp.exec(str1);

console.log(result6);
if (regexp.test(str1)) {
  console.log(`String ${str1} MATCHES ${regexp.source}`);
} else {
  console.log(`String ${str1} NOT MATCHES ${regexp.source}`);
}

console.log('---SHORTHAND CHARCTER CLASSES---');

let regexp1 = /\war/; // word character - _ or alphabet or numbers
regexp1 = /\w+d1r/; // \w+ means one or more word characters
regexp1 = /\Wbhai/; // Non word character
regexp1 = /\d999/; // \d match one or more digits
regexp1 = /\d+/; // \d match digits
regexp1 = /\D999/; // \D match non digits
regexp1 = /\ska number/; // \s means match white spaces
regexp1 = /\s+ka number/; // \s means match one or more white spaces
regexp1 = /\4r5r\b/; // word boundary

// Assertions
regexp1 = /h(?=y)/;
regexp1 = /h(?!y)/;

let str2 = "harry bhai";
str2 = "harh7rd1r4r5r bhai hyrriyka ka number 99999999999";
let result7 = regexp1.exec(str2);

console.log(result7);
if (regexp1.test(str2)) {
  console.log(`String ${str2} MATCHES ${regexp1.source}`);
} else {
  console.log(`String ${str2} NOT MATCHES ${regexp1.source}`);
}
