//String All methods


const single = 'single quotes'
const double = "double quotes"
const backtick = `backtick`
// console.log(single, double, backtick);

const char = single.charAt(0).toUpperCase()
// console.log(char);

const browserType = "mozila"
if(browserType.includes("zila")){
    //console.log("found Zila");
}else{
    //console.log("no zilla found");
}

if(browserType.startsWith("zila")){
    //console.log("start withzilla");
}else{
    //console.log("mozilla not found");
}

if(browserType.endsWith("zila")){
    //console.log("ends with zila");
}else{
    //console.log("mozilla  not found");
}

const tagline = "MDN - Resources for developers, by developers";
//console.log(tagline.indexOf("developers"));
//console.log(tagline.indexOf("R"));


//console.log(browserType.slice(1,4));

//console.log(tagline.toLocaleLowerCase());
//console.log(tagline.toUpperCase());

const browserType1 = browserType.replace("moz","van")

const str = "      The quick red fox jumped over the Lazy dog's back";

//const index = 4
//console.log(`the character is the following index${index} and ${str.charAt(index)}`);
//console.log(`the character is the following index${index} and ${str.charCodeAt(index)}`);
//console.log(`the character is the following index${index} and ${str.codePointAt(index)}`);
//console.log(str.concat("Every character"));
//console.log(str.endsWith("back"));
// const regex = /[A-Z]/g;
// const found = str.match(regex);
// console.log(found);

// let last4digits = str.slice(-4)
// console.log(last4digits);

// console.log(str.split(" "));

// const mood = "Hello, world!";
// console.log(mood.repeat(3));

//console.log(str.replace('dog', 'monkey'));
//console.log(str.search("dog"));
//console.log(str.trim());
