//本当は.is-targetとかにしてquerySelectorAllでノードリストとして処理したい
const myTargetTakenoko = document.querySelector('.is-target__takenoko');
const myTargetAsari = document.querySelector('.is-target__asari');
const myTargetNanohana = document.querySelector('.is-target__nanohana');
const myTargetSansai = document.querySelector('.is-target__sansai');
const myTargetSakuranbo = document.querySelector('.is-target__sakuranbo');

//配列として変数に入れれないか？
const navTakenoko = document.querySelector('.p-nav__item__link--takenoko');
const navAsari = document.querySelector('.p-nav__item__link--asari');
const navNanohana = document.querySelector('.p-nav__item__link--nanohana');
const navSansai = document.querySelector('.p-nav__item__link--sansai');
const navSakuranbo = document.querySelector('.p-nav__item__link--sakuranbo');

// IntersectionObserverのオプション設定　...手順(3)の部分
let myOptions = {
  root: null,
  rootMargin: '0px 0px',
  threshold: '.7'
};
  
// myObserverにIntersectionObserverのインスタンスを代入
const myObserverTakenoko = new IntersectionObserver(myIntersectTakenoko, myOptions);
myObserverTakenoko.observe(myTargetTakenoko);

function myIntersectTakenoko(entries, myIntersectTakenoko) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navTakenoko.classList.remove('is-target__takenoko');
        navTakenoko.classList.add('is-active');
      } else {
        navTakenoko.classList.remove('is-active');
        //navTakenoko.classList.add('is-target__takenoko');
      }
  });
}

// myObserverにIntersectionObserverのインスタンスを代入
const myObserverAsari = new IntersectionObserver(myIntersectAsari, myOptions); 
myObserverAsari.observe(myTargetAsari);

function myIntersectAsari(entries, myIntersectTakenoko) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navAsari.classList.remove('is-target__asari');
        navAsari.classList.add('is-active');
      } else {
        navAsari.classList.remove('is-active');
        //navAsari.classList.add('is-target__asari');
      }
  });
}

// myObserverにIntersectionObserverのインスタンスを代入
const myObserverNanohana = new IntersectionObserver(myIntersectNanohana, myOptions); 
myObserverNanohana.observe(myTargetNanohana);

function myIntersectNanohana(entries, myIntersectNanohana) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navNanohana.classList.remove('is-target__nanohana');
        navNanohana.classList.add('is-active');
      } else {
        navNanohana.classList.remove('is-active');
        //navNanohana.classList.add('is-target__nanohana');
      }
  });
}

// myObserverにIntersectionObserverのインスタンスを代入
const myObserverSansai = new IntersectionObserver(myIntersectSansai, myOptions); 
myObserverSansai.observe(myTargetSansai);

function myIntersectSansai(entries, myIntersectNanohana) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navSansai.classList.remove('is-target__sansai');
        navSansai.classList.add('is-active');
      } else {
        navSansai.classList.remove('is-active');
        //navSansai.classList.add('is-target__sansai');
      }
  });
}

// myObserverにIntersectionObserverのインスタンスを代入
const myObserverSakuranbo = new IntersectionObserver(myIntersectSakuranbo, myOptions); 
myObserverSakuranbo.observe(myTargetSakuranbo);

function myIntersectSakuranbo(entries, myIntersectNanohana) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navSakuranbo.classList.remove('is-target__sakuranbo');
        navSakuranbo.classList.add('is-active');
      } else {
        navSakuranbo.classList.remove('is-active');
        //navSakuranbo.classList.add('is-target__sakuranbo');
      }
  });
}