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
const myTarget = document.querySelectorAll('[data-nav-number]');

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
  threshold: '.6'
};
  
// myObserverにIntersectionObserverのインスタンスを代入
const myObserver = new IntersectionObserver(myIntersect, myOptions);

  // 複数の対象要素を監視
  for (let n = 0; n < myTarget.length; n++) {
    myObserver.observe(myTarget[n]);
  }

  /*
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
  console.log(myTarget[1]);
}
*/

//本番用のコード
//一応完成したが、改良の余地あり
/*
function myIntersect(entries, myObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //下から戻ってきたときにたけのこに付与されているis-activeを削除する
      if (entry.target.getAttribute('data-nav-number') == 0) {
        navTakenoko.classList.remove('is-active');
      //たけのこ
      }else if (entry.target.getAttribute('data-nav-number') == 1) {
        navTakenoko.classList.remove('is-target__takenoko');
        navTakenoko.classList.add('is-active');
        //console.log(myTarget[0].getAttribute('data-nav-number'));
        //下から戻るとき
        navAsari.classList.remove('is-active');
      //あさり
     } else if(entry.target.getAttribute('data-nav-number') == 2) {
        navAsari.classList.remove('is-target__asari');
        navTakenoko.classList.remove('is-active');
        navAsari.classList.add('is-active');

        //下から戻るとき
        navNanohana.classList.remove('is-active');
        
      //菜の花
      } else if(entry.target.getAttribute('data-nav-number') == 3) {
        navNanohana.classList.remove('is-target__asari');
        navAsari.classList.remove('is-active');
        navNanohana.classList.toggle('is-active');
        //下から戻るとき
        navSansai.classList.remove('is-active');
        
      //山菜
    } else if(entry.target.getAttribute('data-nav-number') == 4) {
        navSansai.classList.remove('is-target__asari');
        navNanohana.classList.remove('is-active');
        navSansai.classList.toggle('is-active');
        //下から戻るとき
        navSakuranbo.classList.remove('is-active');
        
      //さくらんぼ
    } else if(entry.target.getAttribute('data-nav-number') == 5) {
      navSakuranbo.classList.remove('is-target__asari');
      navSansai.classList.remove('is-active');
      navSakuranbo.classList.add('is-active');
       }
      }
    })   
  }
*/

/*
//entriesについて調べる
  function myIntersect(entries, myObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //navTakenoko.classList.remove('is-target__takenoko');
        //navTakenoko.classList.toggle('is-active');
        //console.log(myTarget[0].getAttribute('data-nav-number'));
        
        //entryは入った要素
        console.log(entry);
        console.log(entries);
        console.log(myTarget[0]);
        console.log(myTarget[1]);
        console.log(myTarget[2]);
        } 
      }
    )}
*/