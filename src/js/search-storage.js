export const SearchStorage = {
    storageKey: 'search-storage',
    getSearch() {
        return JSON.parse(localStorage.getItem(this.storageKey));
    },
    setSearch(searchQuery) {
        localStorage.setItem(this.storageKey, JSON.stringify(searchQuery));
    },
    cleanStorage() {
        localStorage.removeItem(this.storageKey);
    }
}
