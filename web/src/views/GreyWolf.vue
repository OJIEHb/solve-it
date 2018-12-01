<template>
  <div class="md-layout">
    <grey-wolf-form v-if="!result" v-model="problem" @submit="onSubmit" :disabled="isLoaded"/>
    <grey-wolf-result v-if="result" v-model="result"/>
  </div>
</template>

<script>
  import GreyWolfForm from '@/components/GreyWolfForm';
  import GreyWolfResult from '@/components/GreyWolfResult';
  import GreyWolfService from '@/services/GreyWolfService';

  const greyWolfService = new GreyWolfService();

  export default {
    components: {
      GreyWolfForm,
      GreyWolfResult
    },
    name: 'grey-wolf',
    data: () => ({
      isLoaded: false,
      result: null,
      problem: {
        targetFunction: 'alpine',
        dimensions: 2,
        bounds: [{min: 0, max: 0}, {min: 0, max: 0}],
        maxIterationNumber: 250,
        wolfNumber: 50,
        accuracy: 0.00001
      }
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
            this.result = res.data;
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
