<template>
  <div class="contents">
    <div class="project-section">
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project.title">
          <!-- クリックイベントを追加 -->
          <v-card @click="showProjectDetail(project)" width="300px" height="300px" class="hoverable-card">
            <v-img :src="project.image" aspect-ratio="1.4" ></v-img>
            <v-card-title class="project-title">{{ project.title }}</v-card-title>
          
          </v-card>
        </v-col>
      </v-row>

      <!-- ポップアップダイアログを追加 -->
      <v-dialog v-model="dialog" max-width="1000px">
  <v-card>

    <!-- Use a v-row to split the content -->
    <v-row>

      <!-- Left Column: for the title, subtitle, and language -->
      <v-col cols="6">
        <v-card-title class="custom-title">{{ currentProject.title }}</v-card-title>
<v-card-subtitle class="custom-subtitle">{{ currentProject.subtitle }}</v-card-subtitle>
<div class="language-title">使用言語など</div>
<v-card-text class="custom-language">{{ currentProject.language }}</v-card-text>



      </v-col>

      <!-- Right Column: for the image -->
      <v-col cols="6">
        <v-img :src="currentProject.image" aspect-ratio="1.7" class="project-image"></v-img>
      </v-col>

   

    <!-- Card actions remain the same, outside the v-row -->
    
      <!-- 作品のURLへのリンクボタン -->
      <v-col cols="6">
      <v-btn class="button"   :href="currentProject.url" target="_blank" color="white">DEMO</v-btn>
    </v-col>
  </v-row>

  </v-card>
</v-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'マイナビwebサイト',
          subtitle: 'レスポンシブ対応のwebサイトの作成をおこないました。',
          image: require('@/assets/my-navi-project.jpeg'),
          url: 'https://example.com/project1' , // 作品のURLを追加
          language: 'html css jquery'

        },
        // さらに作品を追加
      ],
      dialog: false,  // ダイアログ表示のためのフラグ
      currentProject: {}  // 現在表示しているプロジェクトの詳細
    };
  },
  methods: {
    showProjectDetail(project) {
      this.currentProject = project;
      this.dialog = true;
    }
  }
};
</script>

<style scoped>

.row {
  margin: 0;
}
.project-section {
  margin-top: 40px;
}
.contents {
  margin: 0 auto;
  width: 1000px;
}
.v-sheet.v-card:not(.v-sheet--outlined) {

box-shadow: none;
}
.project-image {
  margin-top: 30px;
  width: 500px;
  height: 300px;
}
.project-title {
  font-size: 20px;
  font-family: 'Zen Maru Gothic', sans-serif;
 
  
}

.hoverable-card {
  transition: transform 0.3s ease; /* カードのサイズ変更のアニメーション */
}

.hoverable-card:hover {
  transform: scale(1.05); /* カードのサイズを5%大きくする */
  cursor: pointer; /* カーソルを手の形にする */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6); /* カードの下に影を追加してさらに浮き出ているように見せる */
}


.custom-title {
  font-weight: 600;
  font-size: 20px; /* 例: フォントサイズを24pxに設定 */
  color: #333; /* 例: 文字色を#333に設定 */
  justify-content: center;
  margin: 30px;
  
  font-family: 'Zen Maru Gothic', sans-serif;
  
  
}

.custom-subtitle {
  justify-content: center;
  margin-left: 30px;
  font-weight: 500;
  font-size: 15px; /* 例: フォントサイズを20pxに設定 */
  color: #999;  /* 例: 文字色を#666に設定 */
  font-family: 'Zen Maru Gothic', sans-serif;
}

.custom-language {
  font-size: 18px; /* 例: フォントサイズを18pxに設定 */
  color: #999; /* 例: 文字色を#999に設定 */
  font-family: 'Zen Maru Gothic', sans-serif;
 margin-left: 30px;
  font-weight: 500;
}

.language-title {
  font-size: 20px; 
  margin: 20px;
  justify-content: center;
  display: flex;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-weight: 600;

}
/* モバイルデバイス用のスタイル (画面幅が768px以下の場合) */








/* あなたのスタイルをここに書いてください */
</style>
