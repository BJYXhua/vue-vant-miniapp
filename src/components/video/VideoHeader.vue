<template>
      <video width="100%" height="99%" controls="controls" :poster="src">
       <!-- eslint-disable-next-line vue/no-parsing-error -->
      <source src="../../assets/video/video-ps.mp4" type="video/mp4"></source>
      <object width="" height="" type="application/x-shockwave-flash" data="../../assets/video/video-ps.swf">
        <param name="movie" value="../../assets/video/video-ps.swf" />
        <param name="flashvars" value="autostart=true&amp;file=../../assets/video/video-ps.swf" />
      </object> 当前浏览器不支持 video直接播放，点击这里下载视频：
      <a href="myvideo.webm">下载视频</a>
    </video>
</template>

<script>
export default {
    name:'VideoHeader',
    props:['src']
}
</script>
 
<style>

</style>