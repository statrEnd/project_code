
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Logo></Logo>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
  import Logo from './head/Head.vue'
  import Aside from '../pages/aside/Aside.vue'

</script>

<style scoped>

/* mian过渡效果 */
.fade-enter-active, .fade-leave-active {  
  transition: opacity 0.5s;  
}  
  
.fade-enter, .fade-leave-to {  
  opacity: 0;  
}



.common-layout {
  width: 100%;
  height: 100%;
}
.el-aside {
background: #779be9;
}


.el-aside {
  --sb-track-color: #F3F3FD;
  --sb-thumb-color: #19b0d6;
  --sb-size: 4px;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color);
}

.el-aside::-webkit-scrollbar {
  width: var(--sb-size) 
}

.el-aside::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 5px;
}

.el-aside::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 6px;
  
  }

.el-main {
  overflow-y: auto;
}
.el-footer {
  border: 1px solid firebrick;

}
</style>