<template lang="pug">
.book-search 
  input.book-search-input(v-model='inputSearch' type='search')
  img.book-icon-search(:src='iconSearch')
.books-container(v-if='booksFiltered')
  router-link.books(
    v-for='book in booksFiltered'
    :to='{ path: `book/${book.id}`}'
    :key='book.id'
  )
    img.book-cover(:src='book.image_url' :alt='book.title')
    .book-title
      | {{ book.title }}
    .book-author
      | {{ book.author }}
    button.cart-add(type='button')
      | +
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { getBook } from '@/services/BookService';

export default {
  name: 'BookList',

  setup() {
    const books = ref([]);
    const iconSearch = require('@/assets/search-icon.png');
    const inputSearch = ref('');
    const booksFiltered = ref(
      computed(() =>
        inputSearch.value
          ? books.value.page.filter((book) =>
              book.title
                .toLowerCase()
                .includes(inputSearch.value.toLowerCase()),
            )
          : books.value.page,
      ),
    );

    onMounted(() => {
      getBook()
        .then((res) => (books.value = res.data))
        .catch((error) => console.log(error));
    });

    return { booksFiltered, iconSearch, inputSearch };
  },
};
</script>
