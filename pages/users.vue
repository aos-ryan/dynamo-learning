<template>
  <div id="app">
    <h1>Users</h1>
    <div v-for="item in users" :key="item.id.S">
      Name: {{ item.Name.S }} <br />
      Email: {{ item.Email.S }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      users: [],
    }
  },
  async created() {
    const response = await (await fetch('/.netlify/functions/read-db')).json()
    response.Items.forEach((item) => {
      console.log(item)
      this.users.push(item)
    })
  },
}
</script>
