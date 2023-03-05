// js

function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    //takes in two arguments, a name and a language, and returns a phrase using those arguments
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    //takes in two arguments, a name and a language, and language defaults to JavaScript
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}