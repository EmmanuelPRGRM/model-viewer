<template> 
     <model-viewer camera-orbit="calc(10rad + env(window-scroll-y) * 5rad) calc(80deg + env(window-scroll-y) * 180deg) calc(20m - env(window-scroll-y) * 10m)"
     src="https://poly.googleusercontent.com/downloads/c/fp/1604586730812122/diid0LsmhDO/6q__BJZAR-R/Bike.gltf"
     ios-src="https://poly.googleusercontent.com/downloads/c/fp/1604586730812122/diid0LsmhDO/adnH3DzXqib/Bike.usdz"
     camera-controls 
     auto-rotate
     shadow-intensity="3">
     <button slot="ar-button">
      Activate AR
    </button>
     <button class="Hotspot" slot="hotspot-1" data-position="-0.3311613803609567m 6.190922580516299m 2.1206867141849637m" data-normal="-0.8339359077626521m 0.5512586081465973m 0.02578465994263987m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Saddle</div>
    </button><button class="Hotspot" slot="hotspot-2" data-position="2.1323208583720388m 7.077934662402237m -1.5653607699115606m" data-normal="0.1953126708653722m 0.3700606671613213m -0.9082444952872287m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Handle Bar Grip</div>
    </button><button class="Hotspot" slot="hotspot-3" data-position="-0.2742884169090285m 4.1215320168799146m 5.630535276246283m" data-normal="-0.9455872070907553m 0.24462382138750008m 0.2145320950256209m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Tire</div>
    </button><button class="Hotspot" slot="hotspot-4" data-position="-0.18838606075283337m 3.101274718449552m 5.9328106767191935m" data-normal="-0.6453020372516488m -0.2217583917951126m -0.7310324865471557m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Rim</div>
    </button><button class="Hotspot" slot="hotspot-5" data-position="-0.18431955063943659m 5.2978310868371485m 1.481062284604516m" data-normal="-0.9979739810638082m 0.050418852919074636m -0.03880557163576428m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Seat Post</div>
    </button><button class="Hotspot" slot="hotspot-6" data-position="-0.11291630335563951m 6.490634716000202m -1.807366638186556m" data-normal="-0.634386946086643m 0.38259560174744933m -0.6716947283985262m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Head Tube</div>
    </button><button class="Hotspot" slot="hotspot-7" data-position="-1.0310867743451482m 3.6890392498680917m 1.5002211269885741m" data-normal="-0.9626283332671856m 0.27082594408815536m 0m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Pedal</div>
    </button><button class="Hotspot" slot="hotspot-8" data-position="-0.6317920088768008m 2.521699475073206m 1.3991112078576666m" data-normal="-1m 0m 0m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Crank Arm</div>
    </button><button class="Hotspot" slot="hotspot-9" data-position="0.38220511742252605m 2.814420859179099m 3.089903560033676m" data-normal="0.9938610083554897m -0.008743202112278328m 0.11028985668425262m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Chain</div>
    </button><button class="Hotspot" slot="hotspot-11" data-position="0.5509337459651569m 2.0884581982281603m 1.1242486511548004m" data-normal="0.9999805831779988m 0.005431894064766123m 0.00305414371942997m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Chain Rings</div>
    </button><button class="Hotspot" slot="hotspot-12" data-position="0.6213546714082573m 4.201717544711849m -2.9898380798211877m" data-normal="0.8819238782069516m 0.22510649850288256m -0.4141706621432543m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Fork</div>
    </button><button class="Hotspot" slot="hotspot-13" data-position="0.637056536344609m 2.2909253263362506m -3.9745333611847107m" data-normal="0.9951854111170344m 0.04680341291640337m -0.08611293769925571m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Hub</div>
    </button><button class="Hotspot" slot="hotspot-15" data-position="0.06942293765599675m 1.4637986065055473m -4.257677149065317m" data-normal="0.917936902653972m 0.07966049940443883m -0.38864643003721m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Spokes</div>
    </button>
    <h1 class="title">3D bike model ni bouncing emman</h1>
     </model-viewer>    
</template>

<script>

import modelviewer from "@google/model-viewer/dist/model-viewer.js"

export default {
    component: { modelviewer }
}
</script>

<style scoped>

model-viewer
{
    width: 1920px;
    height: 1080px;
    margin: 0 auto;
    z-index: 0;
    align-content: center;

}

button[slot="ar-button"]{
  background-color: white;
  border-radius: 4px;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
}
    
button{
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: blue;
    box-sizing: border-box;
  }
button[slot="hotspot-1"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-2"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-3"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-4"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-5"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-6"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-7"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-8"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-9"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-10"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-11"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-12"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-13"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-14"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
  button[slot="hotspot-15"]{
    --min-hotspot-opacity: 0;
    background-color: rgb(208, 255, 0);
  }
.HotspotAnnotation{
    background-color: #ffffff;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 10px;
}
</style>