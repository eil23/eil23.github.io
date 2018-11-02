<template>
  <div id='Content'>
    <Header @goto=change />
    <h2 class='page'>{{ current }}</h2>
    <div class='body'>
      <transition name='swap-content'>
        <Home v-if="current === 'Home'" />
        <Portfolio v-else-if="current === 'Portfolio'" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'

export default {
  name: 'App',
  components: { Header, Home, Portfolio },
  data: () => ({
    current: 'Home'
  }),
  methods: {
    change (page) {
      this.current = page
    }
  }
}
</script>

<style>
body {
  font-size: 20px;
  background: #EFEAEA;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body {
  max-width: 45vw;
  line-height: 1.7em;
  margin: 4em 15vw;
  padding: 1em;
  width: auto;
  box-sizing: border-box;
  background: white;
  border: solid 2px black;
  font-family: 'Playfair Display';
  overflow: hidden;
}

.page {
  font-family: 'Source Serif Pro';
  text-align: center;
  position: absolute;
  z-index: 100;
  bottom: 0.5em;
  left: 0;
  right: 0;
}

.swap-content-enter-active {
  transition: transform 500ms, opacity 500ms;
}

.swap-content-leave-active {
  transition: transform 750ms, opacity 350ms;
}

.swap-content-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.swap-content-leave-to {
  position: fixed;
  opacity: 0;
  transform: translateX(100%);
  overflow: hidden;
}

.anchor {
  color: darkblue;
  border: solid 2px black;
  padding: 0 0.3em 0.1em;
  transition: color 250ms, border 250ms;
}

.anchor:hover {
  color: blue;
  border-color: blue;
}

@media screen and (max-width: 850px) {
  .body {
    max-width: 70vw;
  }
}

</style>
