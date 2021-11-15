<template>
    <div class="warp">
       
       <Lunbo/>
        <page />
        <major />
        <aviation />

        <HotTopics />
        <Information />

        <Career />

        <Five />

        <Foot/>

        
    </div>
    
</template>
<script>


import Lunbo from '@/views/header/header_lun.vue'

import page from '@/views/page/page.vue'
import major from '@/views/major/major.vue'
import aviation from '@/views/major/aviation.vue'

import HotTopics from '@/views/hottopics/HotTopics.vue'
import Information from '@/views/hottopics/Information.vue'
import Career from '@/views/StudentCareer/Career.vue'
import Five from '@/views/Five/index.vue'

import Foot from '@/views/foot/foot.vue'



export default {
    components:{
     
        Lunbo,
        page,
        major,
        aviation,
        HotTopics,
        Information,
        Career,
        Five,
        Foot,

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
