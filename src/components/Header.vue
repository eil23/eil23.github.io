<template>
  <div id='Header'>
    <div class='title'>
      <h1>Eil23</h1>
      <button class='burger' v-on:click='toggle'>=</button>
    </div>
    <nav ref='navigation' class='navigation'>
      <ul>
        <li><a href='#Home' v-on:click=goto>Home</a></li>
        <li><a href='#Portfolio' v-on:click=goto>Portfolio</a></li>
        <li><a href='#Other' v-on:click=goto>Other</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header',

  data: () => ({
    active: 'Home',
    navigation: false
  }),

  methods: {
    goto (event) {
      this.active = event.target.innerText
      this.$emit('goto', event.target.innerText)
    },

    toggle () {
      const nav = this.$refs.navigation
      this.navigation = !this.navigation
      nav.style.setProperty('--navigation', this.navigation ? '100vh' : '0')
    }
  }
}
</script>

<style scoped>
#Header {
  display: flex;
  width: 100%;
  font-family: 'K2D';
  text-align: center;
  background: white;
  box-shadow: 0 0 2px black;
}

#Header h1 {
  margin: 0.3em 1em;
  font-size: 1.5em;;
}

.navigation {
  --navigation: 0;
  flex: 1;
  overflow: hidden;
  transition: max-height 350ms;
}

.navigation ul {
  display: flex;
  height: 100%;

  list-style: none;
}

.navigation li {
  margin: 0 0.5em;
}

.navigation li:last-child {
  margin-left: auto;
}

.navigation a {
  line-height: 2.5em;
  display: block;
  height: 100%;
  padding: 0 1em;
  transition: color 250ms;
  color: darkblue;
}

.navigation a:hover {
  color: blue;
}

.burger {
  display: none;
}

@media screen and (max-width: 750px) {
  #Header {
    display: initial;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .navigation {
    max-height: var(--navigation);
  }

  .navigation ul {
    flex-direction: column;
  }

  .navigation li {
    width: 75%;
    margin: 0.5em auto;
  }

  .burger {
    display: initial;
  }
}
</style>
