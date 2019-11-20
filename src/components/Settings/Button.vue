<template>
  <nav>
    <div>

      <div class="level-item">
        <p class="subtitle is-12">
          Label
        </p>
        <p class="control">
          <input type="text" class="input" v-model="el.label">
        </p>
      </div>    

      <div class="level-item">
         <p class="subtitle is-12">
          Color
        </p>
        <p class="control">        
          <select class="control" v-model="el.color">
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="yellow">yellow</option>
            <option value="white">white</option>
          </select>
        </p>
      </div>
      
      <div class="level-item">    
        <p class="subtitle is-12">
          Link
        </p>   
        <p class="control">
          <input type="text" class="input" v-model="el.href">
        </p>     
      </div>
    </div>
  </nav>
  
</template>

<script>

export default  {
  
  name: 'Button',

  props:
  {
    el: Object,
  },

  data()
  {
    return {

    }
  },

  methods:
  {
  },
};

</script>

<style lang="sass">
@import '../../assets/sass/library'

.label
  width: 125px


</style>