<template lang="pug">
.book-detail-container(v-if='book.author')
  button.book-detail(type='button' @click='handleGoBack')
      span.book-arrow-back-content
        i.book-arrow-back.left-arrow
      | Atrás
  .book-detail-content
      img.book-detail-cover(:src='book.image_url')
      .badge-content(v-if='handleIsValidBadge(book.author)') 
        img.badge(:src='badgeImg')
      .book-desciption-content
        .book-detail-title
          | {{ book.title }}
          span.book-genre
            | ({{ book.genre }})
        .book-line
        .book-features-title(
          v-for='book in bookDetail' :key='book.title')
            | {{ $t(book.title) }}
            span.book-features-detail
              | {{ book.desciption }}
</template>

<script>
import { ref, computed, watchEffect } from 'vue';
import { getBookId } from '@/services/BookService';
import route from '@/router';

export default {
  setup() {
    const idBook = computed(() => router.currentRoute.value.params.idBook);
    const book = ref([]);
    const badgeImg = require('@/assets/badge.png');
    const bookDetail = computed(() => {
      return [
        {
          title: 'books.Author',
          desciption: book.value.author,
        },
        {
          title: 'books.editorial',
          desciption: book.value.editor,
        },
        {
          title: 'books.year',
          desciption: book.value.year,
        },
      ];
    });

    const handleGoBack = () => route.go(-1);

    const handleIsValidBadge = (value) => {
      return value === 'Piers Anthony';
    };

    watchEffect(() => {
      if (idBook.value) {
        getBookId(idBook.value)
          .then((res) => (book.value = res.data))
          .catch((err) => console.log(err));
      }
    });

    return { book, badgeImg, handleGoBack, bookDetail, handleIsValidBadge };
  },
};
</script>
