/*common */

Vue.use(Buefy, {
  defaultIconPack: "fas",
});
new Vue({
  el: "#lp",

  data() {
    return {
      plan1: false,
      plan2: false,
      plan3: false,
      ActiveBtn: false,
      inWidth: window.innerWidth,
      ActiveBtnFx: false,
      ActiveBtnCc: false,
      ActiveBtnHk: false,

      menu: [
        { url: "#plan", title: "リペアを学ぶ3コース" },
        { url: "#rbs", title: "RBSについて" },
        { url: "#salon", title: "オンラインサロンについて" },
        { url: "#only", title: "独立について" },
        { url: "#cta", title: "お問い合わせ" },
      ],
      cases: [
        {
          bef: "images/common/bef_1.jpg",
          aft: "images/common/aft_1.jpg",
        },
        {
          bef: "images/common/bef_2.jpg",
          aft: "images/common/aft_2.jpg",
        },
        {
          bef: "images/common/bef_3.jpg",
          aft: "images/common/aft_3.jpg",
        },
        {
          bef: "images/common/bef_4.jpg",
          aft: "images/common/aft_4.jpg",
        },
        {
          bef: "images/common/bef_5.jpg",
          aft: "images/common/aft_5.jpg",
        },
        {
          bef: "images/common/bef_6.jpg",
          aft: "images/common/aft_6.jpg",
        },
      ],
      plans: [
        {
          plan: "fenix",
          img: "images/common/fenix.png",
          title: "フェニックス",
          kingaku: "108万円～",
          kikan: "約1年",
          youtube:
            '<iframe  src="https://www.youtube.com/embed/4QQ6KbpfF_k" title="フェニックスコース" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },

        {
          plan: "cocco",
          img: "images/common/cocco.svg",
          title: "コッコ",
          kingaku: "45万円～",
          kikan: "約6ヵ月",
          youtube:
            '<iframe src="https://www.youtube.com/embed/vv29p0wbtxU" title="RBSコッココースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },

        {
          plan: "hiyoko",
          img: "images/common/hiyoko.svg",
          title: "ひよこ",
          kingaku: "8.1万円〜",
          kikan: "約2〜5ヵ月",
          youtube:
            '<iframe  src="https://www.youtube.com/embed/v3USEkud8F8" title="RBSひよこコースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        },
      ],

      courses: [
        {
          plan: "fenix",
          img: "images/common/fenix.png",
          title: "フェニックス",
          kingaku: "108万円～",
          kikan: "約1年",
          youtube:
            '<iframe  src="https://www.youtube.com/embed/4QQ6KbpfF_k" title="フェニックスコース" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          subtitle:
            "稼げる補修屋は対策が違う！<br>20年の経験と実績に基づいた経営コンサル",
        },

        {
          plan: "cocco",
          title: "コッココース",
          img: "/images/common/cocco.svg",
          text: "経営が難しいと思った人、営業、拡大、経営は実はこんなに簡単だった！",
          kingaku: "45万円～",
          kikan: "約6ヵ月",
          youtube:
            '<iframe src="https://www.youtube.com/embed/vv29p0wbtxU" title="RBSコッココースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          subtitle:
            "技術だけでは成功できない！<br>経営にまつわる営業、拡大、集客方法を徹底的に学ぶ！",
        },

        {
          plan: "hiyoko",
          title: "ひよこコース",
          img: "/images/common/hiyoko.svg",
          text: "空いた時間毎日コツコツ学んで、開業を目指そう！",
          kingaku: "16,830円～/月額",
          kingaku: "8.5万円・9.0万円",
          kikan: "約5ヵ月",
          kikan2: "サブスク：３ヶ月・６ヶ月",
          youtube:
            '<iframe  src="https://www.youtube.com/embed/v3USEkud8F8" title="RBSひよこコースPR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
          subtitle:
            '空いた時間毎日コツコツ学んで、<br class="sp">開業を目指そう！',
        },
      ],
      hiyoko_Jitu: true,
      hiyoko_Zagaku: false,
      cocco_Jitu: true,
      cocco_Zagaku: false,
      hiyokoJitu: [
        "床キズ補修",
        "道具紹介",
        "調色基礎編",
        "ツヤの原理",
        "枠キズ補修",
        "スキマ補修",
        "建材のスリキズ補修",
        "段板凹み（対強度）補修",
        "サッシカラースプレー補修",
        "カップガン金属系吹き付け",
        "コーキングの打ち方",
        "アクセントクロス",
        "玄関ドア凹み",
        "テスト",
        "テスト解説",
      ],
      hiyokoZa: [
        "営業、経営は難しくない！これだけ守れランチェスター戦略",
        "リペアの取引先の種類1",
        "リペアの取引先の種類2",
        "仕上げ不良クレーム",
        "困ったを聞き出す力",
      ],
      coccoJitu: [
        "床劣化剥がれ",
        "ムラなく吹く塗装のコツ",
        "床色あわせ補修",
        "建具の陥没穴 割れ",
        "素材を痛めない灰汁洗い",
        "洗面ボウル",
        "ガルバ調色塗装",
        "パネル補修",
        "磨き鏡面仕上げ",
        "サイディング補修",
        "瓦 石材補修",
        "浴室床シート貼り",
        "浴室壁塗装",
        "白木の単板貼り",
        "ブロック、コンクリート補修",
        "建材シート貼り",
        "大理石補修",
        "実技テスト",
        "実技テスト解説",
      ],
      coccoZa: [
        "リペアの潜在客はこんなにいる？！仕事の取れる秘訣",
        "営業、経営は難しくない！これだけ守れランチェスター戦略",
        "営業嫌い、苦手と思っている人のための最強営業",
        "リペアの取引先の種類1",
        "リペアの取引先の種類2",
        "一度仕事をしたら大間違い！取引には必ず番手がある",
        "勝つ見積書の期限",
        "見積書の作り方",
        "DM種まき営業（新築編）",
        "DM種まき営業（賃貸編）",
        "DM種まき営業（在宅リフォーム編）",
        "最高のお客を呼び込む最強営業",
        "クレーム処理編part1仕上げ不良クレーム",
        "クレーム処理編part2テープ見落としクレーム",
        "クレーム処理編part3それでも起こりうるクレーム",
        "困ったを聞き出す力",
        "こんな客とは取引するな！いつか必ず損をする",
        "こんな客とは取引するな！いつか必ず損をするpart2",
        "仕事は無くならない！？単価をあげる成功方法",
        "新規現場の監督との距離を縮める方法",
        "新規客を一発で顧客に変える方法",
        "オーナーはババ抜き？！",
        "今後のリペアにはどういう変化が求められるのか",
        "座学テスト１",
        "座学テスト１解説",
        "座学テスト２",
        "座学テスト２解説",
      ],
      steps: [
        "RBSのコースの受講",
        "動画を何度も見て復習",
        "サロンで仲間や情報収集",
        "副業・独立開始",
      ],
      problem: [
        {
          icon: "cash-multiple",
          img: "/images/common/nayami1.jpg",
          text: "集客方法や顧客獲得がうまくいかない・・",
        },
        {
          icon: "youtube",
          img: "/images/common/nayami2.jpg",
          text: "閑散期と繁忙期の仕事量のムラが激しい・・",
        },
        {
          icon: "laptop",
          img: "/images/common/nayami3.jpg",
          text: "施工管理業務で引き渡し当日にキズを見つけてしまったが予算が取れない、急な依頼なため業者が捕まらない",
        },
      ],
      place: false,
      // actClose:true,
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (!this.plan1) {
        this.plan1 = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.plan1 = !this.plan1;
      }
      if (!this.plan2) {
        this.plan2 = window.scrollY > 100;
      } else if (window.scrollY < 90) {
        this.plan2 = !this.plan2;
      }
    },

    clickMenu() {
      this.ActiveBtn = !this.ActiveBtn;
    },
    clickCloseMenu() {
      this.ActiveBtn = false;
    },

    btn(plan) {
      console.log("plandddddddddd", plan);
      if (plan == "fenix") {
        this.ActiveBtnFx = !this.ActiveBtnFx;
      } else if (plan == "hiyoko") {
        this.ActiveBtnHk = !this.ActiveBtnHk;
      } else {
        this.ActiveBtnCc = !this.ActiveBtnCc;
      }
    },

    hiyokoJ() {
      this.hiyoko_Jitu = !this.hiyoko_Jitu;
      this.hiyoko_Zagaku = !this.hiyoko_Zagaku;
    },
    hiyokoZ() {
      this.hiyoko_Zagaku = !this.hiyoko_Zagaku;
      this.hiyoko_Jitu = !this.hiyoko_Jitu;
    },
    coccoJ() {
      this.cocco_Jitu = !this.cocco_Jitu;
      this.cocco_Zagaku = !this.cocco_Zagaku;
    },
    coccoZ() {
      this.cocco_Jitu = !this.cocco_Jitu;
      this.cocco_Zagaku = !this.cocco_Zagaku;
    },
    // couron(){
    //   console.log('ooooooo')
    //   this.actClose = false;
    // }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
});

var swiper = new Swiper(".mvswiper", {
  loop: true,
  effect: "fade",
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
});
let offlineSwiper = new Swiper(".offlineSwiper", {
  loop: true, // ループ
  slidesPerView: 2, // 一度に表示する枚数
  speed: 1500, // 少しゆっくり(デフォルトは300)
  autoplay: {
    // 自動再生
    delay: 1000, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
