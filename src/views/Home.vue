<template>
    <div class="warp">
        <Header />
          <main>
              <router-view></router-view>
          </main>

        <Footers />
        
    </div>
    
</template>
<script>

import Header from '@/components/headers.vue'



import Footers from '@/components/footers.vue'

export default {
    components:{
        Header,
       
        Footers,
    }
}
</script>

<style lang='scss' scoped>
.warp{
    background: #eaeaea;
    width: 100%;
    padding: 0 0 .42rem 0;
}

</style>
