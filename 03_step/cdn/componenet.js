import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {

  setup() {
    const counter = reactive({ count: 0 })
    const message = ref('Hello World!')

    return {
      counter,
      message
    }
  }
}
