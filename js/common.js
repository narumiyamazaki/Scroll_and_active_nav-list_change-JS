//dataの方ではどうか？
const myTarget = document.querySelectorAll('[data-nav-number]');

const myNavTarget = document.querySelectorAll('.is-nav-target');

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

  //完成コード
  function myIntersect(entries, myObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //下から戻ってきたときにたけのこに付与されているis-activeを削除する
        if (entry.target.getAttribute('data-nav-number') == 0) {
          myNavTarget[0].classList.remove('is-active');
        
          //たけのこ
        }else if (entry.target.getAttribute('data-nav-number') == 1) {
          myNavTarget[0].classList.remove('is-target__takenoko');
          myNavTarget[0].classList.add('is-active');
          console.log(myNavTarget);
          //console.log(myTarget[0].getAttribute('data-nav-number'));
          
          //下から戻るとき
          myNavTarget[1].classList.remove('is-active');
        
        } else if(entry.target.getAttribute('data-nav-number') == 2) {
          //上のis-activeを削除
          myNavTarget[0].classList.remove('is-active');
          
          myNavTarget[1].classList.remove('is-target__asari');
          myNavTarget[1].classList.add('is-active');
  
          //下から戻るとき
          myNavTarget[2].classList.remove('is-active');
          
        //菜の花
        } else if(entry.target.getAttribute('data-nav-number') == 3) {
          //上のis-activeを削除する
          myNavTarget[1].classList.remove('is-active');
          
          myNavTarget[2].classList.remove('is-target__nanohana');
          myNavTarget[2].classList.add('is-active');
          
          //下から戻るとき
          myNavTarget[3].classList.remove('is-active');
          
        //山菜
      } else if(entry.target.getAttribute('data-nav-number') == 4) {
          //上のis-activeを削除する
          myNavTarget[2].classList.remove('is-active');
          
          myNavTarget[3].classList.remove('is-target__sansai');
          myNavTarget[3].classList.add('is-active');
          
          //下から戻るとき
          myNavTarget[4].classList.remove('is-active');
          
        //さくらんぼ
      } else if(entry.target.getAttribute('data-nav-number') == 5) {
          //上のis-activeを削除する
          myNavTarget[3].classList.remove('is-active');
              
          myNavTarget[4].classList.remove('is-target__sakuranbo');
          myNavTarget[4].classList.add('is-active');
         }
        }
      })   
    }  

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