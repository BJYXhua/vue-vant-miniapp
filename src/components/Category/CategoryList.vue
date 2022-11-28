<template>

   <van-tabs v-model="active" animated>
    <CategoryItem :title="'办公软件'" :lists='lists' :classify='classify.software' ></CategoryItem>
    <CategoryItem :title="'平面设计'" :lists='lists' :classify='classify.designList' ></CategoryItem>
    <CategoryItem :title="'影视动画'" :lists='lists' :classify='classify.cartoonList' ></CategoryItem>
    <CategoryItem :title="'UI设计'" :lists='lists' :classify='classify.UIdesignList' ></CategoryItem>
    <CategoryItem :title="'编程开发'" :lists='lists' :classify='classify.programming' ></CategoryItem>
  
  </van-tabs>
</template>

<script>
import CategoryItem from '@/components/Category/CategoryItem.vue'
export default {
    name:"CategoryList",
    props:["classify","lists"],
    data(){
      return{
        active: 1,
        value: "",
      }

    },
    components:{
      CategoryItem
    }

 

}
</script>

<style scoped>

</style>