<template>
  <section id="slideshow" :style="style('section', setup)">
    <v-container ref="slideShowContainer" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
      <v-row align="center" justify="center" class="px-3 py-8">
        <homeTitleComponent v-bind:setup="setup"></homeTitleComponent>
        <v-carousel
          v-if="setup.content.length > 0"
          v-model="step"
          cycle
          :height="setup.slide.height"
          hide-delimiter-background
          hide-delimiters
          :show-arrows="false"
          :interval="setup.slide.interval || 6000"
          :class="`${config.vuetify.theme.rounded}`"
        >
          <v-carousel-item v-for="({ img, text, color }, i) in setup.content" :key="i" :src="img" cover>
            <v-container class="fill-height" :style="`max-width: ${config.vuetify.theme.maxWidth}`">
              <v-row align="center" justify="center">
                <v-col class="text-center text-white text-h3">
                  <v-markdown v-if="text" :style="`color: ${color};`" :source="text" />
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
        <homeDynamicIsland
          v-if="steps > 0"
          :container="slideShowContainer"
          :step="step"
          :steps="steps"
          :action="stepper"
          :text="setup.slide.text"
        ></homeDynamicIsland>
      </v-row>
    </v-container>
  </section>
</template>

<script>
/**
 * Module dependencies.
 */
import { style } from '../../../lib/helpers/theme';
import homeTitleComponent from './utils/home.title.component.vue';
import homeDynamicIsland from './utils/home.dynamicIsland.component.vue';

/**
 * Export default
 */
export default {
  name: 'homeSlideshowComponent',
  data() {
    return {
      step: 0,
      slideShowContainer: null,
    };
  },
  props: {
    setup: {
      type: Object,
      default: () => ({ data: [] }),
    },
  },
  components: {
    homeTitleComponent,
    homeDynamicIsland,
  },
  computed: {
    steps() {
      return this.setup.content.length - 1;
    },
  },
  methods: {
    style,
    stepper(direction) {
      switch (direction) {
        case '+':
          this.step += 1;
          break;
        case '-':
          this.step -= 1;
          break;
        default:
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.slideShowContainer = this.$refs.slideShowContainer;
    });
  },
};
</script>
