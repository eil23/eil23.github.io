<template>
  <section>
    <div class='flexed'>
      <Project title='Project 1' location='https://www.' description='Todo...' />
      <Project title='Project 2' location='https://www.' description='Todo...' />
      <Project title='Project 3' location='https://www.' description='Todo...' />
      <Project title='Project 4' location='https://www.' description='Todo...' />
    </div>
  </section>
</template>

<script>
import Project from '../Project'

export default {
  name: 'Portfolio',
  components: { Project }
}
</script>


<style>
.flexed {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
