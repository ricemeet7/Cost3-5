'use strict';

//--------------------------- 
//　　　　　back_button(Javascript)
//----------------------------
let back_button = document.getElementById('back_button');

// 指定スクロールでフワッとボタンを出現させる
onload = function(){

  let animation =function(){

  let rect = back_button.getBoundingClientRect();

  let y = window.pageYOffset;

  let scrollTop = rect.top + y;

  if(scrollTop > 1400){
    back_button.classList.add('appear');
  } else {
    back_button.classList.remove('appear');
  }
}
window.addEventListener('scroll',animation);
}




// ボタンをクリックするとスムーズにトップへ戻る

scrollTop('back_button',150); //ここの数値でスピード調整。数値が高いと遅くなる。

function scrollTop(el, duration){

  const target = document.getElementById(el);

  target.addEventListener('click',function(){

    event.preventDefault();

    let currentY = window.pageYOffset; //現在のスクロール位置を取得

    let step = duration/currentY > 1 ? 10 : 100; //三項演算子
    //トップに近いと遅く、遠いと速くをここで振り分けている。
    //変数 step に トップに近い＝遅く＝100、トップに遠い＝速い＝10 が代入される。

    let timestep = duration/currentY * step; //スクロールを行う間隔

    let intervalId = setInterval(scrollUp, timestep);
    // timstep はミリ秒単位、この間隔で scrollUp が実行される。
    // ここ宣言した変数 intervalId は この setInterval の実行を後で停止するためのもの。

    function scrollUp(){

      currentY = window.pageYOffset;

      if(currentY === 0){
         clearInterval(intervalId);//ページ最上部に来たら終了（引数に入っている変数 intervalId の実行を止める）。
      } else {
        scrollBy(0, -step); // setInterval の実行間隔1回につき -step（負の縦方向）分上にスクロールする。 
      }
    }
  });
}

//--------------------------- 
//　nav_headerハンバーガーメニュー(Javascript)
//----------------------------

window.addEventListener('DOMContentLoaded', function () {

  const checkBox = document.getElementById('checkbox');
  const menuPart = document.getElementById('menu-part');
  const mask = document.getElementById('mask');
  checkBox.addEventListener('change', function () {
    if (this.checked) { // ←重要なポイント！
      mask.style.display = 'block';
      menuPart.style.left = '0';
    } else {
      mask.style.display = 'none';
      menuPart.style.left = '-300px';
    }
  });
});




//--------------------------- 
//　　　　　back_button(jQuery)
//----------------------------

// jQueryコード
// sample.js
// $(function(){
  //   var topBtn=$('.back_button');
  //   topBtn.hide();
  
  //   //ボタンの表示設定
  //   $(window).scroll(function(){
    //     if($(this).scrollTop()>700){
      //       // 画面を80pxスクロールしたら、ボタンを表示する
      //       topBtn.fadeIn();
      //     }else{
        //       // 画面が80pxより上なら、ボタンを表示しない
        //       topBtn.fadeOut();
        //     }
        //   });
        
        //   // ボタンをクリックしたら、スクロールして上に戻る
        //   topBtn.click(function(){
          //     $('body,html').animate({
            //     scrollTop: 0},500);
//     return false;
//   });

//   });


