import { ref, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export default {

  setup() {
    console.log('vue from CDN');
    const count = ref(0);
    
    function increment(){
	//update component state
	count.value++;
      };

    return {
     increment,
     count
    }
  }
}
