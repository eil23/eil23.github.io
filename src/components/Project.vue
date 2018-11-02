<template>
  <div ref='border' class='border'>
    <a :class='{ main: !isFullscreen, turn: isFullscreen }' href='#' v-on:click='fullscreen'>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </a>
    <iframe :class='{ frame: isFullscreen, turn: !isFullscreen }' height='100vh' width='100vw' :src='location'></iframe>
  </div>
</template>

<script>
import { fullscreen } from '../other/fullscreen'

export default {
  name: 'Project',
  data: () => ({
    isFullscreen: false
  }),
  methods: {
    fullscreen () {
      if (!this.isFullscreen) {
        this.isFullscreen = true

        setTimeout(() => {
          fullscreen(this.$refs.border)
          .then(() => {
            this.isFullscreen = false
          })
        })

      }
    }
  },
  props: [ 'title', 'location', 'description' ]
}
</script>


<style>
.border {
  flex: 1 0 30%;
  margin: 0.5em;
  border: solid 2px black;
  background: white;
}

.turn {
  display: none;
}

.main {
  padding: 1em;
  --margin: 2px;
  width: calc(100% - var(--margin) * 2);
  height: calc(100% - var(--margin) * 2);
  margin: var(--margin);
  border: inherit;
  display: block;

  color: black;
}

.main {
  text-decoration: none;
}

.frame {
  --margin: 2px;
  width: calc(100% - var(--margin) * 2);
  height: calc(100% - var(--margin) * 2);
  padding: 0;
  box-sizing: border-box;
  margin: var(--margin);
  border: inherit;
}
</style>
