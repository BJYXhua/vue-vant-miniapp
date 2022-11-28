<template>
  <van-tab :title="title" name="1">
    <div class="category">
      <div
        class="categoryContent"
        v-for="(item, index) in lists(classify)"
        :key="index"
      >
        <div class="categoryImg">
          <img :src="item.src" alt="" />
        </div>
        <div class="categoryText">
          <span>{{ item.title }}</span>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </van-tab>
</template>

<script>
export default {
    props:['title','lists','classify']
};
</script>

<style scoped>
.category {
  margin-bottom: 150px;
}
.categoryContent {
  width: 100%;
  height: 120px;
  display: flex;
  padding-left: 20px;
  padding-top: 3px;
  white-space: nowrap;
}
.categoryContent .categoryImg img {
  width: 90%;
  height: 85%;
  border-radius: 10px;
}
.categoryContent .categoryImg {
  width: 42%;
  background-color: rgb(245, 245, 245);
  text-align: center;
  padding: 10px;
}
.categoryContent .categoryText {
  padding-left: 10px;
}
.categoryContent .categoryText p {
  width: 85%;
  white-space: pre-wrap;
}
.categoryContent span {
  display: inline-block;
  margin-top: 20px;
}
</style>
