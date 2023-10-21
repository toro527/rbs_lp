

/*common */

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
/*スクロール高さ*/
var hightMixin = {
  data: function () {
    return {
      visible: false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.visible) {
        this.visible = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.visible = !this.visible;
      }
    },
  }
}

new Vue({
  el: '#lp',
  
  data () {
    return {
      ActiveBtn: false,
      inWidth : window.innerWidth,
      ActiveBtn2: false,
      ActiveBtn3: false,
      menu: [        
        {url:'#plan',title:'私たちについて'},
        {url:'#',title:'マイページ'},
        /* childs:[
            {url:'/mypage/profile/',title:'プロフィール編集'},
            {url:'/mypage/plan/',title:'プランページ'},
            {url:'/mypage/coin/',title:'コイン購入'},
          ]
        },*/
        {url:'/qa/',title:'よくある質問'},
        {url:'/company/',title:'会社概要'},
        {url:'/privacy/member/',title:'会員利用規約'},
        {url:'/privacy/',title:'プライバシーポリシー'},
        {url:'/privacy/legal/',title:'特定商取引法に関する表記'},
        {url:'/sitemap/',title:'サイトマップ'},  
        {url:'logOut',title:'ログアウト'},      
      ],
      contacts:[
        { 
          icon: 'images/common/tel_head.png',
          title:'電話でのお問合わせ',
          tel:'0544265539',
          link_txt:'0544-26-5539',
          time:'受付時間 平日9：00-17：00'
        },
        { 
          icon:'images/common/letter.png',
          title:'メールでのお問合わせ',
          link:'contact.html',              
        }
      ],
      
      about:[
        {icon:'cash-multiple',text:'技術と経営知識を身につければ継続、永続的に稼ぐことができる'},
        {icon:'youtube',text:'閑散期と繁忙期の仕事量のムラをならして安定経営ができる'},
        {icon:'laptop',text:'リペア屋さんに頼まなくてもできるようになれるから、品質や経費や工期に安心できる'}
      ],
      support: [
        { title:'無料会員から始められる', text: 'いきなり有料会員ではなく、まずは14日間の無料会員登録をして頂き、実際の会員となった際の学べるイメージを体感することが可能です！', img: '/images/common/plan1.jpg', },
        { title:'個人のレベルに合わせたプラン', text: 'リペアの仕事は、性別・年齢に大きな影響がない仕事なので、初心者の方・興味がある方・副業で始めたい方・既に仕事をしているがもっとバリバリやりたい方へそれぞれのプランをご用意しています。', img: '/images/common/plan2.jpg', },
        { title:'卒業者のみ入会できるオンラインサロン', text: '同じ悩みを抱えた人にこそ知って学んでもらい、卒業したあともサロンで一緒に共有し協力し合って頑張りあえる仲間とともに、お互いに良くなる道に進みたいと心の底から思っています。',img:'/images/common/plan3.jpg', },     
        { title:'安心して副業・独立開始ができる', text: 'いままでのステップから技術+ノウハウ+集客+経営・オンラインサロンでの情報集と仲間づくりにより初めてでも、副業・独立に踏み出しやすくなります！',img: '/images/common/plan4.jpg', },        
      ],
      course: [
        { title:'フェニックスコース', img: '/images/common/fenix.png',text: '稼げる補修屋は対策が違う！10年後も勝ち続ける経営コンサル',kingaku:'120万円～',kikan:'約1年' ,youtube: '<iframe  src="https://www.youtube.com/embed/4QQ6KbpfF_k" title="フェニックスコース" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', },

        { title:'ひよこコース', img: '/images/common/hiyoko.svg',text: '空いた時間に毎日コツコツ学んでたった5ヶ月で開業できるオンラインリペアスクール',kingaku:'16,830円～/月額',kikan:'約5ヵ月' ,youtube: '<iframe  src="https://www.youtube.com/embed/v3USEkud8F8" title="RBSひよこコースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', }, 
        { title:'コッココース', img: '/images/common/cocco.svg',text: '経営が難しいと思った人、営業、拡大、経営は実はこんなに簡単だった！',kingaku:'45万円～',kikan:'約6ヵ月', youtube: '<iframe src="https://www.youtube.com/embed/vv29p0wbtxU" title="RBSコッココースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', },
      ],
      salons:[
        {url:'images/common/onlin-img4.jpg',title:'同じ志を持った仲間がたくさんいる',txt:'このRBSで学んだことで皆様の考え方や経営戦略は近いものになっていると思います。なので同じ方向性で仕事をしている仲間を作ることができます'},      
        {url:'images/common/onlin-img2.jpg',title:'仲間からのスカウトや仕事の共有ができる',txt:'自身の現場の応援要請やお互いに協力できるパートナーやチームを作ったりと様々な交流をしていきます'},
        {url:'images/common/onlin-img3.jpg',title:'困りごとを解決！',txt:'困ったことやわからないことをサロンの先輩方にアドバイスを求めたり、質問相談をして、ちいさな疑問も解決！'},      
      ],
      steps:[
      'RBSのコースの受講','動画を何度も見て復習','サロンで仲間や情報収集','副業・独立開始']
      ,
      hiyoko_Jitu:false,
      hiyoko_Zagaku:false,
      cocco_Jitu:false,
      cocco_Zagaku:false,
      hiyokoJitu:[
        '床キズ補修','道具紹介','調色基礎編','ツヤの原理','枠キズ補修','スキマ補修','建材のスリキズ補修','段板凹み（対強度）補修','サッシカラースプレー補修','カップガン金属系吹き付け','コーキングの打ち方','アクセントクロス','玄関ドア凹み','テスト','テスト解説'
      ],
      hiyokoZa:[
        '営業、経営は難しくない！これだけ守れランチェスター戦略','リペアの取引先の種類1','リペアの取引先の種類2','仕上げ不良クレーム','困ったを聞き出す力'
      ],
      coccoJitu:[
        '床劣化剥がれ','ムラなく吹く塗装のコツ','床色あわせ補修','建具の陥没穴 割れ','素材を痛めない灰汁洗い','洗面ボウル','ガルバ調色塗装','パネル補修','磨き鏡面仕上げ','サイディング補修','瓦 石材補修','浴室床シート貼り','浴室壁塗装','白木の単板貼り','ブロック、コンクリート補修','建材シート貼り','大理石補修','実技テスト','実技テスト解説'
      ],
      coccoZa:[
        'リペアの潜在客はこんなにいる？！仕事の取れる秘訣',
        '営業、経営は難しくない！これだけ守れランチェスター戦略',
        '営業嫌い、苦手と思っている人のための最強営業',
        'リペアの取引先の種類1',
        'リペアの取引先の種類2',
        '一度仕事をしたら大間違い！取引には必ず番手がある',
        '勝つ見積書の期限','見積書の作り方',
        'DM種まき営業（新築編）',
        'DM種まき営業（賃貸編）',
        'DM種まき営業（在宅リフォーム編）',
        '最高のお客を呼び込む最強営業',
        'クレーム処理編part1仕上げ不良クレーム',
        'クレーム処理編part2テープ見落としクレーム',
        'クレーム処理編part3それでも起こりうるクレーム',
        '困ったを聞き出す力',
        'こんな客とは取引するな！いつか必ず損をする',
        'こんな客とは取引するな！いつか必ず損をするpart2',
        '仕事は無くならない！？単価をあげる成功方法',
        '新規現場の監督との距離を縮める方法',
        '新規客を一発で顧客に変える方法',
        'オーナーはババ抜き？！',
        '今後のリペアにはどういう変化が求められるのか',
        '座学テスト１',
        '座学テスト１解説',
        '座学テスト２',
        '座学テスト２解説',
      ]
    }
  },
  methods: {
    clickMenu() {
      this.ActiveBtn = !this.ActiveBtn
    },
    clickCloseMenu() {
      this.ActiveBtn = false
    },
   
    hiyokoJ(){
      this.hiyoko_Jitu = !this.hiyoko_Jitu;
    },
    hiyokoZ(){
      this.hiyoko_Zagaku = !this.hiyoko_Zagaku;
    },
    coccoJ(){
      this.cocco_Jitu = !this.cocco_Jitu;
    },
    coccoZ(){
      this.cocco_Zagaku = !this.cocco_Zagaku;
    }
  
  },  
})


