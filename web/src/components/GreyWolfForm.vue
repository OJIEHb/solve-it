<template>
  <form class="md-layout" @submit.prevent="$emit('submit', value)">
    <md-steppers :md-active-step.sync="active" class="stepper">
      <md-step id="first" md-label="First Step" md-description="Target function" :md-done.sync="first">
        <div class="md-layout md-alignment-top-center">
          <div class="md-layout-item md-size-60">
            <md-field>
              <label>Target function</label>
              <md-select v-model="value.targetFunction" name="targetFunction" id="targetFunction" required>
                <md-option value="alpine">Alpine</md-option>
                <md-option value="aqley">Aqley</md-option>
                <md-option value="elliptical">Elliptical</md-option>
                <md-option value="grivonk">Grivonk</md-option>
                <md-option value="rastrigin">Rastrigin</md-option>
                <md-option value="rosenbroke">Rosenbroke</md-option>
                <md-option value="schwefel">Schwefel</md-option>
                <md-option value="schwefel2">Schwefel 2</md-option>
                <md-option value="spherical">Spherical</md-option>
                <md-option value="weierstrass">Weierstrass</md-option>
              </md-select>
            </md-field>
            <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
          </div>
        </div>
      </md-step>

      <md-step id="second" md-label="Second Step" md-description="Search space" :md-done.sync="second">
        <div class="md-layout md-alignment-top-center">
          <div class="md-layout-item md-size-60">
            <span class="md-title dimensions">Dimensions:</span>
            <md-button class="md-fab md-mini md-plain" @click="removeBound">
              <md-icon>remove</md-icon>
            </md-button>
            <span class="md-title dimensions">{{value.dimensions}}</span>
            <md-button class="md-fab md-mini md-primary" @click="addBound">
              <md-icon>add</md-icon>
            </md-button>
            <div v-for="(bound, i) in value.bounds" class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-field>
                  <label for="max">d{{i+1}} Max</label>
                  <md-input v-model="bound.max" id="max" required/>
                </md-field>
              </div>
              <div class="md-layout-item">
                <md-field>
                  <label for="min">d{{i+1}} Min</label>
                  <md-input v-model="bound.min" id="min" required/>
                </md-field>
              </div>
            </div>
            <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
          </div>
        </div>
      </md-step>

      <md-step id="third" md-label="Third Step" md-description="Algorithm details" :md-done.sync="third">
        <div class="md-layout md-alignment-top-center">
          <div class="md-layout-item md-size-60">
            <md-field>
              <label for="maxIterationNumber">Max iteration number</label>
              <md-input v-model="value.maxIterationNumber" type="number" min="0" id="maxIterationNumber" required/>
            </md-field>
            <md-field>
              <label for="wolfNumber">Wolf number</label>
              <md-input v-model="value.wolfNumber" type="number" min="0" id="wolfNumber" required/>
            </md-field>
            <md-field>
              <label for="accuracy">Accuracy</label>
              <md-input v-model="value.accuracy" id="accuracy" type="number" min="0" step="any" required/>
            </md-field>
            <md-button type="submit" class="md-raised md-primary">Solve</md-button>
            <md-progress-spinner v-if="disabled" :md-diameter="30" :md-stroke="3" md-mode="indeterminate" style="margin-top: 10px"></md-progress-spinner>
          </div>
        </div>
      </md-step>
    </md-steppers>
  </form>
</template>

<script>
  export default {
    name: 'grey-wolf-form',
    props: ['disabled', 'value'],
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
    }),
    methods: {
      setDone(id, index) {
        this[id] = true;

        if (index) {
          this.active = index
        }
      },
      addBound() {
        this.value.bounds.push({min: 0, max: 0});
        this.value.dimensions++;
      },
      removeBound() {
        if (this.value.bounds.length > 2) {
          this.value.bounds.pop();
          this.value.dimensions--;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stepper {
    width: 75%;
    left: 0;
    right: 0;
    margin: auto;
  }

  .dimensions {
    line-height: 48px;
  }
</style>
