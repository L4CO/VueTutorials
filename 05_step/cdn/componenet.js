import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {

  setup() {
    console.log('vue from CDN');
    const text = ref(''); 
    
    return {
      text 
    }
  }
}
