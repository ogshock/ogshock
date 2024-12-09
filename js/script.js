/*===========================================================*/
/*ロゴアウトラインアニメーション*/
/*===========================================================*/


// ロゴ画像のフェードイン・フェードアウト処理
$(window).on('load', function () {
    // ロゴをフェードイン
    $("#splash_logo").hide().fadeIn(100); // 0.1秒でフェードイン

    // フェードイン後の処理
    setTimeout(() => {
        $("#splash_logo").fadeOut('slow', () => { // フェードアウト
            $("#splash").fadeOut(100, () => { // スプラッシュ画面もフェードアウト
                $('body').addClass('appear'); // appearクラスを追加
            });
        });
    }, 100); // 0.1秒待機後に実行
});


/*===========================================================*/
/* テキストがタイピング風に出現*/
/*===========================================================*/

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
    $('.TextTyping').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll >= elemPos - windowHeight) {
            const thisChild = $(this).children(); // spanタグを取得
            let index = 0;

            // spanを一つずつ表示する
            function showNextCharacter() {
                if (index < thisChild.length) {
                    $(thisChild[index]).css({
                        display: 'inline-block',
                        opacity: 0,
                    }).animate({
                        opacity: 1
                    }, 100); // 100msでフェードイン
                    index++;
                    setTimeout(showNextCharacter, 100); // 次の文字を100ms後に表示
                }
            }

            // アニメーション開始
            showNextCharacter();
        } else {
            // スクロールアウト時に非表示化
            $(this).children().css({
                display: 'none',
                opacity: 0
            });
        }
    });
}


/*===========================================================*/
/*ロゴが散る 
/*===========================================================*/
const baseParticlesConfig = {
    "particles": {
        "number": {
            "value": 50, // 粒子数を50
            "density": {
                "enable": true,
                "value_area": 800 // 描画エリアを調整
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "image", // 形状は画像
            "stroke": {
                "width": 0
            },
            "image": {
                "src": "img/logo.png", // 画像の指定
                "width": 150, // サイズ
                "height": 150
            }
        },
        "opacity": {
            "value": 0.6, // 少し不透明
            "random": true // ランダム性を追加
        },
        "size": {
            "value": 15, // サイズ
            "random": true // サイズをランダムに
        },
        "line_linked": {
            "enable": false // 線を無効にする
        },
        "move": {
            "enable": true,
            "speed": 7, // 速度
            "direction": "bottom", // 下方向に落ちる
            "random": true, // ランダムな動き
            "straight": false, // 一方向に固定しない
            "out_mode": "out", // 画面外へ消える
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": false // Retina対応をオフ
};

// 各セクションに同じ設定を適用
particlesJS("pt1", baseParticlesConfig);
particlesJS("pt2", baseParticlesConfig);
particlesJS("pt3", baseParticlesConfig);
particlesJS("pt4", baseParticlesConfig);
particlesJS("pt5", baseParticlesConfig);
particlesJS("pt6", baseParticlesConfig);



/*==================================================
画面分割した左右がそれぞれ動く*/
/*===================================*/

$('#wrapper').multiscroll({
	sectionsColor: ['#000', '#000000', '#000000','#000000', '#000000', '#000000'],//セクションごとの背景色設定
	anchors: ['area1', 'area2', 'area3','area4','area5','area6'],//セクションとリンクするページ内アンカーになる名前
	menu: '#menu',//上部ナビゲーションのメニュー設定
	navigation: true,//右のナビゲーション出現、非表示は false
	loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
    //※以下は今回のプラグインの組み合わせのみで使用。ページの途中でリロードしてもトップのタイピング出現
    afterLoad: function(anchorLink, index){
		if(index == 1){
			TextTypingAnime();
		}	
	}

    
});

/*==================================================
/*関数をまとめる*/
/*===================================*/

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();//印象編 8-10テキストがタイピング風に出現する関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

    stroke.play();//SVGアニメーションの実行
  
    //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる    
    $("#splash").delay(3000).fadeOut(800,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 
	
    //印象編 8-10テキストがタイピング風に出現
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/

}); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述


document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.muted = true; // 自動再生に必須
        video.play().catch(error => {
            console.error("自動再生がブロックされました:", error);
            // 必要に応じてフォールバックのUIを表示
        });
    });
});
