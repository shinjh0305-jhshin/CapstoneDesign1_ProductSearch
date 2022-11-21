<template>
  <main class="mt-3 text-center">
    <div class="container">
      <div class="float-end mb-1">
        <router-link to="/create">
          <button type="button" class="btn btn-dark">제품 등록</button>
        </router-link>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>모집현황</th>
            <th>마감일자</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in productList" :key="i">
            <td><img :src="getImageUrl(product.path)" style="height: 50px; width: auto" /></td>
            <router-link :to="{ name: 'Detail', query: { product_id: product.id } }">
              <td>{{ product.name }}</td>
            </router-link>
            <td>{{ formatCurrency(product.price) }}원</td>
            <td>{{ product.ordered }} / {{ product.people }}</td>
            <td>{{ formatTime(product.ends) }}</td>
            <td>
              <button type="button" class="btn btn-warning me-1">수정</button>
              <button type="button" class="btn btn-danger">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import useAxios from "@/modules/axios";
import currencyFormat from "@/modules/currencyFormatter.js";
import { ref } from "vue";

const { axiosGet, axiosPost } = useAxios();

const productList = ref([]);

const saveResult = function (respData) {
  productList.value = respData;
};

function getProductList() {
  axiosGet("/product/list", saveResult);
}

const getImageUrl = (name) => {
  return `https://gongu-image.s3.ap-northeast-2.amazonaws.com/${name}`;
};

//금액을 #,### 형태로 포맷팅한다.
function formatCurrency(value) {
  return currencyFormat(value);
}

function formatTime(value) {
  var temp = value.split("T");
  return temp[0];
}

getProductList(); //script setup에서는 created를 안 써도 된다.
</script>

<style scoped>
.card-img-top {
  height: 15rem;
  object-fit: contain;
  padding: 0.5rem;
}
.card {
  margin-bottom: 20px;
}
</style>
