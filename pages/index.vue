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
import axios from 'axios'

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
      const formData = new FormData()

      for (const [key, value] of Object.entries(this.form)) {
        formData.append(key, value)
      }

      await axios
        .post('{endpoint}', formData)
        .then(({ data }) => {
          // const { redirect } = data
          // // Redirect used for reCAPTCHA and/or thank you page
          // window.location.href = redirect
        })
        .catch((e) => {
          // window.location.href = e.response.data.redirect
        })
    },
  },
}
</script>
