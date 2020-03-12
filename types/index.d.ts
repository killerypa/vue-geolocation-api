import Vue, { ComponentOptions } from 'vue'
import VueGeolocationApi from './../src/vue-geolocation-api'

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
      geolocation?: boolean | string;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $geolocation: VueGeolocationApi;
    }
}

declare module '@nuxt/vue-app' {
    interface Context {
      $geolocation: VueGeolocationApi;
    }
}

declare module '@nuxt/types' {
    interface Context {
      $geolocation: VueGeolocationApi;
    }
}
