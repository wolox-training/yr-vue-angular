<template lang="pug">
.book-search 
  input.book-search-input(v-model='inputSearch' type='search' :placeholder='$t("books.search")')
  img.book-icon-search(:src='iconSearch' alt='Search icon')
.books-container(v-if='booksFiltered')
  .books(v-for='book in booksFiltered' :key='book.id'
  )
    router-link(:to='`/books/${book.id}`')
      img.book-cover(:src='book.image_url' :alt='book.title')
      .book-title
        | {{ book.title }}
      .book-author
        | {{ book.author }}
    button.cart-add(type='button' @click='handleAddCartBook(book)')
      | +
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { getBook } from '@/services/BookService';
import { useStoreCart } from '@/stores/CartStore';

export default {
  name: 'BookList',

  setup() {
    const books = ref([]);
    const iconSearch = require('@/assets/search-icon.png');
    const inputSearch = ref('');
    const booksFiltered = computed(() =>
        inputSearch.value
          ? books.value.page.filter((book) =>
              book.title
                .toLowerCase()
                .includes(inputSearch.value.toLowerCase()),
            )
          : books.value.page,
      ),
    const cartStore = useStoreCart();
    const handleAddCartBook = (book) => {
      cartStore.addItem(book);
    };

    onMounted(() => {
      getBook()
        .then((res) => (books.value = res.data))
        .catch((error) => console.log(error));
    });

    return { booksFiltered, iconSearch, inputSearch, handleAddCartBook };
  },
};
</script>
