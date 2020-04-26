<template>
  <div>
       <canvas width="800" height="700" id="Canvas">
       您的浏览器不支持画布工具
    </canvas>
    <div>这是修改过的信息</div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    mounted() { 
   this.$axios({
        url: "/api",
        method: "get"
      }).then(res => {
        console.log(res)
      });
    //   var arr=[]
    // var array=[]
    // var color = ['','red', 'yellow', '#000']
    // for (var i = 0; i < arr.length; i++) {
    //     array.push({
    //         x: arr[i][0],
    //         y: arr[i][1],
    //         w: color[arr[i][2]]
    //     })
    // }
    // var c = document.getElementById("Canvas");
    // var ctx = c.getContext("2d");
    // ctx.beginPath();
    // ctx.scale(0.1, 0.1);
    // ctx.moveTo(arr[0][0],arr[0][1]);
    // for (let i = 0; i < arr.length; i++) {
    //     ctx.lineTo(arr[i][0],arr[i][1])
    // }
    // ctx.stroke();
    },
}
</script>
<style scoped>
  
</style>