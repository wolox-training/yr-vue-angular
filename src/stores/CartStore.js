import { defineStore } from 'pinia';

export const useStoreCart = defineStore('BookStore', {
  state: () => {
    return {
      items: [],
    };
  },

  getters: {
    itemsCount() {
      return this.items.length;
    },
  },

  actions: {
    addItem(item) {
      this.items.push(item);
    },

    removeItem(item) {
      const idx = this.items.findIndex((book) => book.name === item.name);
      if (idx > -1) this.items.splice(idx, 1);
    },
  },
});
