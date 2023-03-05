//
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
          myNavTarget[0].classList.add('is-active');
                   
          //下から戻るとき
          myNavTarget[1].classList.remove('is-active');
        
        } else if(entry.target.getAttribute('data-nav-number') == 2) {
          //上のis-activeを削除
          myNavTarget[0].classList.remove('is-active');
          
          myNavTarget[1].classList.add('is-active');
  
          //下から戻るとき
          myNavTarget[2].classList.remove('is-active');
          
        //菜の花
        } else if(entry.target.getAttribute('data-nav-number') == 3) {
          //上のis-activeを削除する
          myNavTarget[1].classList.remove('is-active');
        
          myNavTarget[2].classList.add('is-active');
          
          //下から戻るとき
          myNavTarget[3].classList.remove('is-active');
          
        //山菜
      } else if(entry.target.getAttribute('data-nav-number') == 4) {
          //上のis-activeを削除する
          myNavTarget[2].classList.remove('is-active')
        
	        myNavTarget[3].classList.add('is-active');
          
          //下から戻るとき
          myNavTarget[4].classList.remove('is-active');
          
        //さくらんぼ
      } else if(entry.target.getAttribute('data-nav-number') == 5) {
          //上のis-activeを削除する
          myNavTarget[3].classList.remove('is-active');
         
          myNavTarget[4].classList.add('is-active');
         }
        }
      })   
    }