<template>
  <section id="banner">
    <v-img
      :height="ratio ? `calc(${100 / ratio}vh)` : this.$vuetify.display.smAndDown ? '70vh' : '90vh'"
      :src="generateBackground()"
      style="margin-top: -65px"
      max-width="100%"
      cover
      alt="banner"
    >
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col
            class="text-white text-center"
            :style="{
              'margin-top': ratio ? '5vh' : this.$vuetify.display.smAndDown ? '-5vh' : '-25vh',
            }"
          >
            <v-btn
              v-if="button && button.title"
              :href="button.link"
              class="mb-5 text-none font-weight-bold rounded-xl"
              :style="{ 'border-color': button.color, 'border-width': '1.5px' }"
              variant="outlined"
              size="large"
              >{{ button.title }}</v-btn
            >
            <v-markdown v-if="title" class="font-weight-bold text-md-h1 text-h3" :source="title" />
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
/**
 * Export default
 */
export default {
  name: 'homeBannerComponent',
  props: {
    // define a ratio to handle banne height
    ratio: {
      type: [Number, String],
      default: null,
    },
    // title to display
    title: {
      type: String,
      default: null,
    },
    // button to display
    button: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    generateBackground() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return this.config.home.darkBackground;
      }
      return this.config.home.lightBackground;
    },
  },
};
</script>
