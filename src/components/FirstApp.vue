<template>
  <div class="hello">
    <h1>Skills</h1>
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" id="add-skill" placeholder="Enter a skill you have..." v-model="skill" v-validate="'required|min:5'" name="skill" data-vv-validate-on="none">
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutDown">
          <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}
            <i class="fa fa-minus-circle remove-skill" v-on:click="remove(index)" title="Remove"></i>
          </li>
        </transition-group>
      </ul>
      <p v-if="this.skills.length">These are the skills that you possess. 👀</p>
      <p v-if="this.skills.length <= 0">Seems like there are no skills yet dude. 🐒</p>
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
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
}
</script>

<style src="../assets/stylesheets/FirstApp.css" scoped></style>
<style src="../assets/stylesheets/Colors.css"></style>
