<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">제품 등록</h2>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품명</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="product.name" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">총 금액</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="product.total" />
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">모일 인원</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="product.people" />
            <span class="input-group-text">명</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">공구 단가</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="product.price" />
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">공구 단위</label>
        <div class="col-auto">
          <div class="input-group mb-3">
            <span class="input-group-text">1인당</span>
            <input type="text" class="form-control" v-model="product.portion" />
            <select class="form-select" v-model="product.unit">
              <option v-for="(name, i) in units" :key="i" v-text="name" :value="name"></option>
            </select>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">구매 경로</label>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>온라인</option>
            <option value="1">오프라인</option>
          </select>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">카테고리</label>
        <div class="col-auto">
          <select class="form-select" aria-label="Default select example">
            <option selected>식료품</option>
            <option value="1">생필품</option>
            <option value="1">주방용품</option>
          </select>
        </div>
      </div>
      <div class="mb-3 row">
        <!--추후 bootstrap vue로 수정-->
        <label class="col-md-3 col-form-label">태그</label>
        <div class="col-md-9">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="mb-3 row">
        <!--추후 bootstrap vue로 수정-->
        <label class="col-md-3 col-form-label">공구 마감일</label>
        <div class="col-md-9">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">썸네일 이미지</label>
        <div class="col-md-9">
          <input class="form-control" type="file" accept="image/png, image/jpeg" />
          <div class="alert alert-info" role="alert">
            <ul>
              <li>파일 확장자 : png, jpg만 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">상세 이미지</label>
        <div class="col-md-9">
          <input class="form-control" type="file" accept="image/png, image/jpeg" multiple />
          <div class="alert alert-info" role="alert">
            <ul>
              <li>최대 5개 가능</li>
              <li>파일 확장자 : png, jpg만 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">상품 설명</label>
        <div class="col-md-9">
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <router-link to="/sales">
            <button type="button" class="col-12 btn btn-block btn-lg btn-dark">취소하기</button>
          </router-link>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger">저장하기</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";

const units = ["개", "권", "병", "장", "팩", "묶음", "박스", "세트", "자루", "켤레"];

const product = reactive({
  name: "",
  total: 0,
  people: 2,
  price: 0,
  portion: 0,
  unit: "개",
  source: "",
  category: 0,
  tags: "",
  ends: "",
});
</script>
