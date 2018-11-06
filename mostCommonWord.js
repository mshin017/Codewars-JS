//Define a function that takes an array of strings, 
//and returns the most commonly occurring string that array 

function mostCommon(arr) {
    var count = {}, item, countItem, 
    highest,
    currentHighest = 0;

    while(item = arr.pop()) { 
        countItem = (count[item] || 0) + 1;
        if (countItem > currentHighest) {
            currentHighest = countItem;
            highest = item;
        }
        count[item] = countItem;
    }

    return highest;
}
mostCommon();