function pcGameShop(input) {
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    let totalGames = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        let game = input[i];
        if (game === 'Hearthstone') {
            hearthstone++;
        } else if (game === 'Fornite'){
            fornite++;
        } else if (game === 'Overwatch'){
            overwatch++;
        } else {
            others++;
        }
    }
    console.log(`Hearthstone - ${((hearthstone / totalGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / totalGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / totalGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / totalGames) * 100).toFixed(2)}%`);
}
pcGameShop([4, "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
