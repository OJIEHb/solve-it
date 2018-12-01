<template>
  <div class="md-layout">
    <md-progress-bar  md-mode="indeterminate"></md-progress-bar>
    <grey-wolf-form @submit="onSubmit" :disabled="isLoaded"/>
  </div>
</template>

<script>
  import GreyWolfForm from '@/components/GreyWolfForm';
  import GreyWolfService from '@/services/GreyWolfService';

  const greyWolfService = new GreyWolfService();

  export default {
    components: {
      GreyWolfForm
    },
    name: 'grey-wolf',
    data: () => ({
      isLoaded: false
    }),
    methods: {
      onSubmit(problem) {
        this.isLoaded = true;
        // TODO: clean up
        problem.wolfNumber = parseInt(problem.wolfNumber);
        problem.maxIterationNumber = parseInt(problem.maxIterationNumber);
        problem.accuracy = parseFloat(problem.accuracy);
        problem.bounds = problem.bounds.map(({min, max}) => ({max: parseInt(max), min: parseInt(min)}));
        greyWolfService.solve(problem)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.isLoaded = false;
          })
      }
    }
  }
</script>
