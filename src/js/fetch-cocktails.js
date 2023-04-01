export function fetchRandomCocktails(amount) {
    const allPromises = [];

    for (let count = 0; count < amount; count++) {
        allPromises.push(fetch('https://thecocktaildb.com/api/json/v1/1/random.php').then(response => response.json()));
    }

    return Promise.all(allPromises).then(data => {
        return data.map(item => item.drinks[0]);
    })
}