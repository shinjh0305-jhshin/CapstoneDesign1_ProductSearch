<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected></option>
            <option value="1">생활용품</option>
            <option value="2">주방용품</option>
            <option value="3">식품</option>
          </select>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
          <div class="card" style="width: 18rem">
            <img :src="getImageUrl(product.path)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark me-1">{{ product.category }}</span>
                <span class="badge bg-primary me-1">3/6명</span>
                <span class="badge bg-warning me-1">3일뒤 마감</span>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <router-link :to="{ name: 'Detail', query: { product_id: product.id } }">
                    <button type="button" class="btn btn-sm btn-outline-secondary">공구 참여</button>
                  </router-link>
                </div>
                <small class="text-dark">1인당 {{ product.price }}원</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import useAxios from "@/modules/axios";
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
  return new URL(`../assets/${name}`, import.meta.url).href;
};

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
