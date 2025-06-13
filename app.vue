<template>
  <MobileMenu/>
  <AppHeader/>
  <NuxtPage data-aos="fade-in"/>
  <AppFooter/>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default {
  /**
   * * Watch for route changes
   * This event is triggered when the route changes.
   * @param {Object} to - Route object
   * @param {Object} from - Route object
   */
  watch: {
    $route(to, from) {
      console.log('De', from.fullPath, 'a', to.fullPath);
    }
  },
  mounted() {
    AOS.init({
        disable: false, 
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false,
        debounceDelay: 50, 
        throttleDelay: 99, 
        
        offset: 120, 
        delay: 0, 
        duration: 400, 
        easing: 'ease', 
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom',
    });
  }
}
</script> 