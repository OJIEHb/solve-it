<template>
  <div class="md-layout">
    <grey-wolf-form @submit="onSubmit"/>
  </div>
</template>

<script>
  import GreyWolfForm from '@/components/GreyWolfForm'

  export default {
    components: {
      GreyWolfForm
    },
    name: 'grey-wolf',
    methods: {
      onSubmit(problem) {
        console.log(problem);
      }
    }
  }
</script>
