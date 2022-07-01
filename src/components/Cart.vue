<template lang="pug">
button.cart(@click='handleOpenCart' type='button')
  img(:src='cartImg')
  .cart-content-count     
    | {{cartStore.itemsCount}}
.popup(:class='classCartOpen')
  .popup-content
    img.close(@click='handleOpenCart' :src='closeImg')
    .popup-title
      | Tu carrito de compras 
      .popup-container(v-if='cartStore.itemsCount')
        .popup-content-details(v-for='item in cartStore.items')
          .popup-content-item
            | {{item.title}} - {{item.author}}
            img.popup-cover-delete(:src='deleteImg' @click='handleDeleteItem(item)') 
          .popup-content-item-line
      div(v-else)
        img.popup-empty-img(:src='cartEmpyImg')
        .popup-empty-title
          | El carrito está vacío
        .popup-empty-desciption
          | Parece que no tenés items en tu carrito de compras.
 
</template>

<script>
import { useStoreCart } from '@/stores/CartStore';
import { ref, computed } from 'vue';

export default {
  name: 'Cart',

  setup() {
    const cartImg = require('@/assets/cart.png');
    const cartStore = useStoreCart();
    const isOpenCart = ref(false);
    const classCartOpen = computed(() => ({
      showPopup: isOpenCart.value,
      removePopup: !isOpenCart.value,
    }));
    const closeImg = require('@/assets/close.png');
    const deleteImg = require('@/assets/delete.png');
    const cartEmpyImg = require('@/assets/cartEmpy.png');

    const handleOpenCart = () => {
      isOpenCart.value = !isOpenCart.value;
    };

    const handleDeleteItem = (item) => {
      cartStore.removeItem(item);
    };

    return {
      cartImg,
      cartStore,
      isOpenCart,
      handleOpenCart,
      classCartOpen,
      closeImg,
      deleteImg,
      handleDeleteItem,
      cartEmpyImg,
    };
  },
};
</script>
