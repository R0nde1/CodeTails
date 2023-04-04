export const FavoriteStorage = {
    cocktailsKey: 'fav-cocktails',
    ingredientsKey: 'fav-ingredients',

    getCocktails() {
        return JSON.parse(localStorage.getItem(this.cocktailsKey)) || [];
    },
    getIngredients() {
        return JSON.parse(localStorage.getItem(this.ingredientsKey)) || [];
    },
    isCocktailInFavorite(id) {
        return this.getCocktails().includes(id);
    },
    isIngredientInFavorite(id) {
        return this.getIngredients().includes(id);
    },
    addCocktail(id) {
        const tmp = this.getCocktails();
        tmp.push(id);
        localStorage.setItem(this.cocktailsKey, JSON.stringify(tmp));
    },
    removeCocktail(id) {
        const tmp = this.getCocktails();
        const idIndex = tmp.indexOf(id);

        tmp.splice(idIndex, 1);
        localStorage.setItem(this.cocktailsKey, JSON.stringify(tmp));
    },
    addIngredient(id) {
        const tmp = this.getIngredients();
        tmp.push(id);
        localStorage.setItem(this.ingredientsKey, JSON.stringify(tmp));
    },
    removeIngredient(id) {
        const tmp = this.getIngredients();
        const idIndex = tmp.indexOf(id);

        tmp.splice(idIndex, 1);
        localStorage.setItem(this.ingredientsKey, JSON.stringify(tmp));
    }
}