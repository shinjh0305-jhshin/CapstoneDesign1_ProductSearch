<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-dark"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                :class="`carousel-item ${i == 0 ? 'active' : ''}`"
                :key="i"
                v-for="(productImg, i) in productImage"
              >
                <img :src="getImageUrl(productImg)" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ productDetail.name }}</h5>
              <h5 class="card-title pt-3 pb-3 border-top">
                ?????? : {{ formatCurrency(productDetail.price) }}??? | ?????? ?????? :
                {{ productDetail.portion }}{{ productDetail.unit }}
              </h5>
              <p class="card-text border-top pt-3">
                <span class="badge bg-dark me-1">{{ productDetail.category }}</span>
                <span class="badge bg-red me-1"
                  >{{ productDetail.ordered }}/{{ productDetail.people }}???</span
                >
                <span class="badge bg-blue me-1">3?????? ??????</span>
              </p>
              <p class="card-text pb-3">{{ productDetail.source }}</p>
              <p class="card-text pb-3">????????? ?????????</p>
              <div class="card-text border-top pb-3">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">????????????</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="changeCount('-')"
                        >-</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="userPrice"
                        style="width: 50px"
                        v-model="total"
                        @keyup="calculatePrice()"
                      />
                      <span
                        class="input-group-text"
                        style="cursor: pointer"
                        @click="changeCount('+')"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>??? ?????? ??????</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3 id="totalPrice">{{ currencyFormat(totalPrice) }}</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="col-12 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">?????? ??????</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12">
          {{ productDetail.content }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import useAxios from "@/modules/axios";
import currencyFormat from "@/modules/currencyFormatter.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const { axiosGet, axiosPost } = useAxios();

const route = useRoute();
let productId = route.query.product_id;

let productDetail = ref({}); //?????? ???????????? ????????? ?????? ??????
let productImage = ref([]); //?????? ???????????? ????????? ????????? ???(XXX.PNG)
let total = ref(1); //???????????? ??????????????? ?????? ????????? ??????
let totalPrice = ref(0); //???????????? ??? ?????? ??????

//???????????? ?????? ????????? ???????????? ????????? ???, 1??? ????????? ????????? ?????? ??????
onMounted(() => {
  const userPrice = document.getElementById("userPrice");
  userPrice.addEventListener("focusout", checkData);

  function checkData(event) {
    if (total.value < 1) {
      total.value = 1;
      totalPrice.value = productDetail.value.price;
    }
  }
});

//total ??????
function changeCount(cnt = "") {
  cnt === "+" ? total.value++ : total.value--;
  if (total.value < 1) total.value = 1;
  calculatePrice();
}

//totalPrice ??????
function calculatePrice() {
  totalPrice.value = productDetail.value.price * total.value;
}

//????????? #,### ????????? ???????????????.
function formatCurrency(value) {
  return currencyFormat(value);
}

//?????? ?????? ????????? ?????? ????????????
const saveDetail = function (respData) {
  productDetail.value = respData[0];
  totalPrice.value = productDetail.value.price;
};

//?????? ????????? ????????? ?????? ????????????
const saveImage = function (respData) {
  productImage.value = respData.result.map((x) => x.path);
  console.log(productImage.value);
};

//?????? ?????? ??????
function getProductDetail() {
  axiosGet(`/product/${productId}`, saveDetail);
}

//?????? ????????? ??????
function getProductImage() {
  axiosGet(`/image/${productId}`, saveImage);
}

//???????????? ?????? ???????????? ????????????.
const getImageUrl = (name) => {
  return `https://gongu-image.s3.ap-northeast-2.amazonaws.com/${name}`;
};

//onCreated
getProductDetail();
getProductImage();
</script>
