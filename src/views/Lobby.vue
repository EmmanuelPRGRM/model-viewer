<template>
<v-container 
    fluid
    class="fill-height background"
    id="lobby-container">
    <v-btn
    id="btn1"
    class="mx-2 A1 pulse"
    fab
    dark
    large
    color="purple"
    @click="loaded">
    <v-icon>
        {{svgPath}}
      </v-icon> 
    </v-btn>
    <iframe src="https://studio.onirix.com/modelviewer/1819b28d139f444c9a79247cdaf3aca5?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjcyOTksImFzc2V0SWQiOjIyMzY4NSwicm9sZSI6OCwiaWF0IjoxNjEyNDMyMzI2fQ.zTudon0vrj8wzcN3jEWo_Ql3jhxo0Pa0UqXGWUA4Sbw&showThumb=true"
        style="width: 480px; height: 480px; border: 1px solid #dddddd; border-radius: 10px;">
        </iframe>
</v-container>   
</template>

<script>
import { mdiArrowTopLeftThick } from '@mdi/js'

export default {

  data: () => ({
    svgPath: mdiArrowTopLeftThick,
    loaded: false
  }),
};


</script>

<style scoped>

.background
{
    background-image: url("~@/assets/lobby.png") !important;
    background-size: cover;
    z-index: 1;
}
.A1
{
    position: absolute;
    top: 400px;
    left: 640px;
    z-index: 0;
}
.pulse
{
    animation: pulse-animation 2s infinite;
}
@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgb(120, 0, 150);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}
.iframe
{
    height: 900px;
    width: 1920px;
    z-index: 1;
    /*visibility: hidden;*/
}
</style>