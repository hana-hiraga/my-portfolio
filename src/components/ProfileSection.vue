<template>

  <header id="headerAlternate">
    <img class="header-top-img" src="@/assets/top.gif" alt="トップ画像" />

    <div class="content">
      <div class="profile-info">
        <img
          class="profile-image"
          src="@/assets/my-profile-img.jpeg"
          alt="Profile Image"
        />

        <div class="profile-text" ref="profileText">
          <span>UI・UXデザイナー、フロントエンドエンジニア志望</span>
          
          <p><strong>平賀 はな</strong></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style scoped>




.header-top-img {
  
  position: fixed;
  top: -0px;
  left: 0;
  width: 100%;
  z-index: -1;

}

.profile-info {
  display: flex;
  align-items: center;
  
  margin-top: -70px;
}



.profile-image {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-top: -400px;
  margin-left: 200px;
  opacity: 0.5;
}

.profile-text {
  margin-left: 60px;
  text-align: left;
  margin-top: -400px;
}
.profile-text span {
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
}
.profile-text p {
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
}

.content {
  position: relative;
  z-index: 1;
  background: white;
  padding-top: 50px;
  width: 1000px;
  margin: 0 auto;
}
</style>
