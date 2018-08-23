<template>
  <div class="hello">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" id="add-skill" placeholder="Enter a skill you have..." v-model="skill" v-validate="'required|min:5'" name="skill" data-vv-validate-on="none">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}</li>
        </transition-group>
      </ul>
      <p>These are the skills that you possess. 👀</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstApp',
  props: {},
  data() {
    return {
      skill: '',
      skills: [
        { "skill": "VueJS" },
        { "skill": "Javascript" }
      ]
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({skill: this.skill})
          this.skill = ''
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/stylesheets/FirstApp.css" scoped></style>
