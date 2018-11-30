<template>
  <bat-gang-form @submit="onSubmit"/>
</template>

<script>
  import BatGangForm from '@/components/BatGangForm'

  export default {
    components: {
      BatGangForm
    },
    name: 'bat-gang',
    methods: {
      onSubmit(problem) {
        console.log(problem);
      }
    }
  }
</script>
