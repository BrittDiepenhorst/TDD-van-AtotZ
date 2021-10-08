// Utility functions 
const isNotNull = str => str !== null;

const hasRightLength = str => str.length <= 8;

const hasUpperCaseCharacter = (str) => {
    const regex = new RegExp("[ˆA-Z]");
    const rex = regex.test(str);
    return rex;
}

const hasLowerCaseCharacter = (str) => {
    const regex = new RegExp("[ˆa-z]");
    const rex = regex.test(str);
    return rex;
}

const hasDigit = (str) => {
    const regex = new RegExp("[ˆ0-9]");
    const rex = regex.test(str);
    return rex;
}

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};