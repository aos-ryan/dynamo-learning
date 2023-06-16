<template>
  <div id="app">
    <h1>Sign Up!</h1>

    <form @submit.prevent="handleSubmit">
      <input
        v-model="form.name"
        type="text"
        name="name"
        placeholder="Enter name"
        required
      />
      <input
        v-model="form.email"
        type="email"
        name="email"
        placeholder="Enter email"
        required
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    handleSubmit: async function () {
      const formData = {}
      formData.id = uuidv4()
      formData.name = this.form.name
      formData.email = this.form.email

      const response = await fetch('/.netlify/functions/put-db', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      const resData = await response.json()
      return resData
    },
  },
}
</script>
