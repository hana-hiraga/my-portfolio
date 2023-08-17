<template>
  <div id="app">
    <v-app-bar v-if="!isProjectDetail" app>
      <div class="header-brand">
        <div class="brand-name">HANA HIRAGA's</div>
        <div class="brand-profile">Portfolio Site</div>
        
      </div>
     
    
      
    </v-app-bar>

    <v-app v-if="!isProjectDetail">
      <ProfileSection id="profile" />

      <div class="contents">
        <v-toolbar>
          <v-spacer></v-spacer>

          <v-btn text to="/aboutMe" :class="isActive('/aboutMe')"
            >Profile</v-btn
          >

          <v-btn text to="/ProjectSection" :class="isActive('/ProjectSection')"
            >Works</v-btn
          >
        </v-toolbar>
        <router-view />
      </div>
    </v-app>
    <router-view v-if="isProjectDetail" />
  </div>
</template>

<script>
import ProfileSection from "./components/ProfileSection.vue";

export default {
  name: "App",
  components: {
    ProfileSection,
  },
  data() {
    return {
      scrollPosition: 0,
      drawer: false,
    };
  },
  computed: {
    isProjectDetail() {
      return this.$route.name === "project-detail"; // 詳細ページのルート名を確認
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    isActive(route) {
      return this.$route.path === route ? "active-btn" : "";
    },
    scrollTo(sectionId) {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      this.drawer = false;
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      const brandElement = document.querySelector(".header-brand");
      if (brandElement) {
        // この行を追加
        if (this.scrollPosition > 50) {
          brandElement.style.opacity = "0";
        } else {
          brandElement.style.opacity = "1";
        }
      }
    },
  },
};
</script>

<style scoped>
#app {
  margin-top: 400px;
}



.contents {
  margin: 0 auto;
  width: 1000px;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  background-color: transparent;
  box-shadow: none;
}
.active-btn {
  font-weight: bold;
}
.header-brand {
  position: fixed;
  right: 40px;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 1;
  transition: opacity 0.5s ease; /* フェイドアウトのアニメーション */

  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 2px;
}
.brand-name {
  /* 縦書き */
}
.brand-profile {
  font-family: "Karla", "Source Sans Pro", "NotoSansCJKjp",
    "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", sans-serif;
  margin-top: 5px;
  writing-mode: vertical-rl; /* 縦書き */
}
.nav-icon {
  left: 0;
}
.fixed-hamburger {
  position: fixed;
  left: 0;
  top: 16px; /* 任意の上端の位置 */
  padding: 16px;
  cursor: pointer;
  z-index: 1000; /* 他の要素より前面に表示するためのz-index */
  color: aquamarine;
}
</style>
