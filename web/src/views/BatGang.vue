<template>
  <div class="md-layout">
    <bat-gang-form v-if="!result" v-model="problem" @submit="onSubmit" :disabled="isLoaded"/>
    <bat-gang-result v-if="result" v-model="result"/>
  </div>
</template>

<script>
  import BatGangForm from '@/components/BatGangForm';
  import BatGangResult from '@/components/BatGangResult';
  import BatGangService from '@/services/BatGangService';

  const batGangService = new BatGangService();

  export default {
    components: {
      BatGangForm,
      BatGangResult
    },
    name: 'bat-gang',
    data: () => ({
      isLoaded: false,
      result: null,
      problem: {
        targetFunction: 'alpine',
        dimensions: 2,
        bounds: [{min: 0, max: 0}, {min: 0, max: 0}],
        maxIterationNumber: 250,
        batNumber: 50,
        alpha: 0.5,
        gamma: 0.5,
        frequency: {min: 0, max: 2}
      }
    }),
    methods: {
      onSubmit(problem) {
        this.isLoaded = true;
        // TODO: clean up
        problem.batNumber = +problem.batNumber;
        problem.maxIterationNumber = +problem.maxIterationNumber;
        problem.alpha = +problem.alpha;
        problem.gamma = +problem.gamma;
        problem.gamma = +problem.gamma;
        problem.frequency.min = +problem.frequency.min;
        problem.frequency.max = +problem.frequency.max;
        problem.bounds = problem.bounds.map(({min, max}) => ({max: +max, min: +min}));
        batGangService.solve(problem)
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
