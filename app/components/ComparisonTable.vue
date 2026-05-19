<template>
  <div class="comparison-table-wrap">
    <table class="table is-fullwidth is-striped">
      <thead>
        <tr>
          <th scope="col" class="feature-cell"></th>
          <th scope="col">Cloud</th>
          <th scope="col">Partners</th>
          <th scope="col">Self-hosted</th>
          <th scope="col">On-premise</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="feature in features" :key="feature.name">
          <th scope="row" class="feature-cell">{{ feature.name }}</th>
          <td>{{ feature.cloud }}</td>
          <td>{{ feature.partners }}</td>
          <td>{{ feature.selfhosted }}</td>
          <td>{{ feature.onpremise }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
.comparison-table-wrap
  margin 1.5em 0
  overflow-x auto

table.table
  th
    background #f5f5f5

  .feature-cell
    width 18%
    min-width 140px
    background #fafafa

  thead th
    text-align center
</style>
