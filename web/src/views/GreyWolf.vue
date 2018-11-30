<template>
  <div class="md-layout">
    <md-progress-bar v-if="!isLoaded" md-mode="indeterminate"></md-progress-bar>
    <grey-wolf-form @submit="onSubmit"/>
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
      isLoaded: true
    }),
    methods: {
      onSubmit(problem) {
        this.isLoaded = false;
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
            this.isLoaded = true;
          })
      }
    }
  }
</script>
