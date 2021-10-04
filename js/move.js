$(function(){
    $('.menu_button').on('click',function(){
        $('#home_canvas').addClass('open_home');
        $('.menu_outer').addClass('open_home');
    });
    $('.close_button').on('click',function(){
        $('#home_canvas').removeClass('open_home');
        $('.menu_outer').removeClass('open_home');
    });

    setTimeout(function(){
        $('.top_img_background').css('transform','translateX(100%)');
    },3500);

    //アコーディオンをクリックした時の動作
    $('.accordion_title').on('click', function() {//タイトル要素をクリックしたら
    $('.accordion_box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
        
    var findElm = $(this).next(".accordion_box");//タイトル直後のアコーディオンを行うエリアを取得
        
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去    
    }else{//それ以外は
        $('.close').removeClass('close'); //クラス名closeを全て除去した後
        $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
        $(findElm).slideDown(500);//アコーディオンを開く
    }
    });


    
//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
    $(window).on('load', function(){
    $('.accordion_area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
        var Title =$(element).children('.accordion_title'); //openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
        var Box =$(element).children('.accordion_box'); //openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);          //アコーディオンを開く
    });
    });
});
