import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {

  setup() {
    const titleClass = ref('title')

    return {
      titleClass
    }
  }
}
