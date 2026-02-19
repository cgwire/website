<template>
<table>
  <thead>
    <tr>
      <th scope="col" class="feature-cell">Feature</th>
      <th scope="col" class="cloud-cell">Cloud</th>
      <th scope="col" class="self-hosted-cell">Self-hosted</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="feature in features">
      <td class="feature-cell">{{ feature.name }}</td>
      <td class="cloud-cell">{{ feature.cloud ? '✔️ ' : '❌' }}</td>
      <td class="self-hosted-cell">{{ feature.selfhosted ? '✔️ ' : '❌' }}</td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style lang="stylus" scoped>
.content table
  .cloud-cell
  .self-hosted-cell
    text-align  center
</style>
