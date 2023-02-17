let word = prompt('Test if your word is a palindrome: ')

function palindrome(word) {
    const len = word.length;
    for(let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            console.log('Not a palindrome.')
            return 'is not a palindrome' 
        }
    }
    return 'is a plaindrome'
}
const value = palindrome(word);

console.log(value)