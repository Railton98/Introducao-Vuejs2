<template>

  <div class="slider">
      <h3>{{title}}</h3>
      <span v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

      <div ref="scroller" class="row">
        <div class="row__inner">

          <filme v-for="filme in filmes" :key="filme.id" :titulo="filme.titulo" :imagem="filme.imagem"/>

        </div>
      </div>

        <span v-on:mouseover="scrollDireita()" v-on:onmouseout="clearScroll()"  class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>
    </div>

</template>

<script>

import Filme from './Filme';

export default {
  props: ['title', 'filmes'],
  components: {
    Filme
  },
  methods: {
    scrollDireita() {
      const self = this;
      this.intervalo = setInterval(function() { self.$refs.scroller.scrollLeft += 1 }  , 5);
    },
    scrollEsquerda() {
      const self = this;
      this.intervalo = setInterval(function() { self.$refs.scroller.scrollLeft -= 1 }  , 5);
    },
    clearScroll() {
      clearInterval(this.intervalo);
    }
  }
}

</script>

<style lang="scss">

</style>
