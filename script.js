const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const isPalindrome = (testString) => {
    return stringToAlphanumArray(testString).join("") === stringToAlphanumArray(testString).reverse().join("");
};

const stringToAlphanumArray = (testString) => {
    const chars = testString.toLowerCase().split("");
    return chars.filter((char) => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char));
};

const checkIsPalindrome = (testString) => {
    if (testString === '') {
        alert('Please input a value');
        return;
    }
    resultDiv.replaceChildren();
    originalTestString = testString;
    let resultText = `${originalTestString} ${
        isPalindrome(testString) ? "is" : "is not"
    } a palindrome`
    const pTag = document.createElement('p');
    pTag.innerText = resultText;
    resultDiv.appendChild(pTag);
};

checkButton.addEventListener('click', () => {
    checkIsPalindrome(textInput.value);
});