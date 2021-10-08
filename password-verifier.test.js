const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    verifyPassword
}
    = require("./password-verifier");

describe("Tests utility functions", () => {
    test("isNotNull null should false", () => {
        expect(isNotNull(null)).toBe(false);
    });

    test("hasRightLength 2 less than 9 characters expect to be true", () => {
        expect(hasRightLength("2")).toBe(true);
    });

    test("hasRightLength henkie1 less than 9 characters expect to be true", () => {
        expect(hasRightLength("henkie1")).toBe(true);
    });

    test("hasRightLength Henkiehenkiehenkiehenkie less than 9 characters should be false", () => {
        expect(hasRightLength("Henkiehenkiehenkiehenkie")).toBe(false);
    });

    test("hasUpperCaseCharacter Henkie expect to be true", () => {
        expect(hasUpperCaseCharacter("Henkie")).toBe(true);
    });

    test("hasUpperCaseCharacter HENKIE expect to be true", () => {
        expect(hasUpperCaseCharacter("HENKIE")).toBe(true);
    });

    test("hasUpperCaseCharacter henk should be false", () => {
        expect(hasUpperCaseCharacter("henk")).toBe(false);
    });

    test("hasLowerCaseCharacter henk expect to be true", () => {
        expect(hasLowerCaseCharacter("henk")).toBe(true);
    });

    test("hasLowerCaseCharacter HENK should be false", () => {
        expect(hasLowerCaseCharacter("HENK")).toBe(false);
    });

    test("hasDigit henk1 expect to be true", () => {
        expect(hasDigit("henk1")).toBe(true);
    });

    test("hasDigit 123456 expect to be true", () => {
        expect(hasDigit("123456")).toBe(true);
    });

    test("hasDigit 000 expect to be true", () => {
        expect(hasDigit("000")).toBe(true);
    });

    test("hasDigit henk should be false", () => {
        expect(hasDigit("henk")).toBe(false);
    });

})

describe("Tests Outer function", () => {
    test("Verify Password Henk1 expect to be true", () => {
        expect(verifyPassword("Henk1")).toBe(true);
    });

    test("Verify Password null should be false", () => {
        expect(verifyPassword("")).toBe(false);
    });

    test("Verify Password 1234 should be false", () => {
        expect(verifyPassword("1234")).toBe(false);
    });

    test("Verify Password Henkishenk123 expect to be true", () => {
        expect(verifyPassword("Henkishenk123")).toBe(true);
    });

})
