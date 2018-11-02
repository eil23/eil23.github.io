<template>
  <section>
    <div class='flexed'>
      <Project title='Filler A' location='https://www.' description='Todo...' />
      <Project title='Filler A' location='https://www.' description='Todo...' />
      <Project title='Filler A' location='https://www.' description='Todo...' />
      <Project title='Filler A' location='https://www.' description='Todo...' />
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
