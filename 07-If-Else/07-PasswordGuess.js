function passwordGuess(guess) {
    let password = 's3cr3t!P@ssw0rd';
    if (guess[0] === password) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
passwordGuess(['s3cr3t!P@ssw0rd']);