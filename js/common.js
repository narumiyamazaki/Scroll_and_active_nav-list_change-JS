//本当は.is-targetとかにしてquerySelectorAllでノードリストとして処理したい
/*
const myTargetTakenoko = document.querySelector('.is-target__takenoko');
const myTargetAsari = document.querySelector('.is-target__asari');
const myTargetNanohana = document.querySelector('.is-target__nanohana');
const myTargetSansai = document.querySelector('.is-target__sansai');
const myTargetSakuranbo = document.querySelector('.is-target__sakuranbo');
*/

//これだと上手くいかないので
//const myTarget = document.querySelectorAll('.is-target');

//dataの方ではどうか？
const myTarget = document.querySelectorAll('[data-nav-number]')

//これも共通にして、querySelectorAllとかにしてノードリストとして処理できるのでは？
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

  // 複数の対象要素を監視
  for (let n = 0; n < myTarget.length; n++) {
    myObserver.observe(myTarget[n]);
  }

function myIntersect(entries, myObserver) {
    entries.forEach((entry) => {
      if (entries[0].isIntersecting) {
        //navTakenoko.classList.remove('is-target__takenoko');
        navTakenoko.classList.toggle('is-active');
        
      } else if(entries[1].isIntersecting) {
        navAsari.classList.toggle('is-active');
      
      } else if(entries[2].isIntersecting) {
        navNanohana.classList.toggle('is-active');

      } else if(entries[3].isIntersecting) {
        navSansai.classList.toggle('is-active');
      
      } else if(entries[4].isIntersecting) {
        navSakuranbo.classList.toggle('is-active');
      
      }else{
        return;
      }
  });
  console.log(entries);
}