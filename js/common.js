//本当は.is-targetとかにしてquerySelectorAllでノードリストとして処理したい
/*
const myTargetTakenoko = document.querySelector('.is-target__takenoko');
const myTargetAsari = document.querySelector('.is-target__asari');
const myTargetNanohana = document.querySelector('.is-target__nanohana');
const myTargetSansai = document.querySelector('.is-target__sansai');
const myTargetSakuranbo = document.querySelector('.is-target__sakuranbo');
*/

const myTarget = document.querySelectorAll('.is-target');

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
const myObserver = new IntersectionObserver(myIntersect, myOptions);
myObserverTakenoko.observe(myTarget);

function myIntersect(entries, myIntersectTakenoko) {
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