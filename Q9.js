// As a web developer, you =eed to create a fu=ctio= that takes a user=ame stri=9 as i=put a=d checks if it
// co=tai=s o=ly u=ique characters. Use a Set to impleme=t this efficie=tly.


function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")

uniqueCharactersCheck("anurag")
