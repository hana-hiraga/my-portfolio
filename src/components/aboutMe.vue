<template>
  <v-container fluid class="about-me">
    <v-row>
      <v-col md="6" ref="introduce" class="introduce">
        <h3>自己紹介</h3>
        <p>1999年埼玉県生まれ。大学卒業後はオーストラリアのシドニーへ２年間留学。留学中は語学学校と現地のレストランでのアルバイト生活。
          英語のスキルだけではなく、他の専門的な能力も必要だと感じ、エンジニアのキャリアに興味を持つようになり、現在はプログラミングスクールに通い、より深い知識と技術の習得に努めています。
          現時点で私はまだ初心者の段階にいるので、これからもっと深く学び、今後さまざまなプロジェクトに貢献すべく、日々努力していきたいと思っています。
          

        </p>
      </v-col>
      <v-col md="6" class="skill">
        <h3>テクニカルスキル</h3>
        <ul>
  <li><strong>HTML/CSS:</strong> Webページの基本的なマークアップとスタイリングを行うことができます。</li>
  <li><strong>JavaScript:</strong> JavaScriptを使って、基本的なインタラクティブなウェブサイトを開発することができます。</li>
  <li><strong>Vue.js:</strong> Vue.jsの基本的な知識を持っており、シンプルなシングルページアプリケーションを作成することができます。</li>
  <li><strong>jQuery:</strong> jQueryを使用して、DOM操作やイベントハンドリング、アニメーション等を実装することができます。</li>
  <li><strong>自己学習:</strong> プログラミングスクールでの学習を経て、HTML、CSS、JavaScriptの基本を理解。それを基に、Vue.jsやjQueryなどのフレームワーク・ライブラリの学習を独学で進めています。</li>
</ul>
        <!-- ここにスキルの一覧またはグラフを表示 -->
      </v-col>

      
    </v-row>
    <v-row class="mt-14" >

      <v-col md="6" class="personal" >
        <h3>パーソナルアンケート</h3>
        <div class="question">
          <h4>Q.趣味</h4>
        <p>A.サウナ・ゴルフ・本・キックボクシング</p>
        </div>
        <div class="question">
          <h4>Q.休日の過ごし方</h4>
        <p>A.温泉に行く</p>
        </div>
       
      
        <div class="question">
          <h4>Q.尊敬する人</h4>
        <p>A.母</p>
        </div>
        <div class="question">
          <h4>Q.私が日々大切にしていること</h4>
        <p>A.日々の食事・習慣</p>
        </div>
     
        
        
      </v-col>

      <v-col md="6" class="experience">
  <h3>経験</h3>
  <ul>
    <li>
      <strong>学び：</strong>
      フロントエンドエンジニアリングに関する知識をスクールや独学で積極的に学んできた。特に、デジタルハリウッドスクールでのコンペ形式のサイト作成経験を通じて、実践的なスキルを身につけた。
    </li>
    <li>
      <strong>アルバイト経験：</strong>
      大学生時代にはBEAMSのアパレル店員として3年間の貴重な経験を積み、顧客対応や商品管理、店舗運営のスキルを習得。また、卒業後はオーストラリアのレストランでホールスタッフとして勤務し、異文化環境でのコミュニケーション能力や柔軟性を培った。
    </li>
  </ul>
 
</v-col>

    </v-row>

  </v-container>
</template>

<script>
import ScrollReveal from 'scrollreveal'
export default {
  name: 'AboutMe',
  mounted() {
    // 一般的なオプション設定
    const options = {
      origin: 'bottom', // 下から上へアニメーション
      distance: '100px', // 移動距離
      duration: 1000, // アニメーション時間
      delay: 2, // 遅延時間
      scale: 1, // スケール
      easing: 'ease', // イージング効果
      viewFactor: 0.3, // 要素がどれくらい画面に表示されたらアニメーションを開始するか
      reset: false // スクロールするたびにアニメーションをリセットするか
    };

    // 自己紹介セクションのアニメーション
    ScrollReveal().reveal(this.$refs.introduce, options);

    // その他のセクションを追加したい場合、以下のように追加します
    ScrollReveal().reveal('.skill', options);
    ScrollReveal().reveal('.personal', options);
    ScrollReveal().reveal('.experience', options);
  }
};
</script>








<style scoped>
.about-me {
  margin-top: 48px;
  font-size: 14px;
    line-height: 2;
    font-weight: 500;
}


.introduce p {
  margin-top: 30px;
}

.skill {
  padding-left: 30px;
}


.skill ul {
  margin-top: 30px;
}
.skill li {
  margin-top: 20px;
}

.personal h3{
  margin-bottom: 30px;

}
.question {
  margin-bottom: 40px;
}
.experience {
  padding-left: 30px;
  
  
}
.experience ul {
  margin-top: 30px;
}
.experience li {
  margin-bottom: 20px;
}



</style>

