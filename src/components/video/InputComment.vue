<template>
  <van-field
    v-model="message"
    rows="1"
    autosize
    label="评论"
    type="textarea" 
    maxlength="100"
    placeholder="请输入有趣的评论~"
    show-word-limit
    @keyup.enter="sendMsg"
  />
</template> 

<script>
export default {
  name: "InputComment",
  data() {
      return {
          message:''
      }
  },
  methods:{
      sendMsg(){
          this.$bus.$emit("sendMsg",this.message)
          this.message=''
      }
  }
};
</script>

<style></style>
