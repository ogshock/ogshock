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
particlesJS("pt7", baseParticlesConfig);



/*==================================================
画面分割した左右がそれぞれ動く*/
/*===================================*/

$('#wrapper').multiscroll({
	sectionsColor: ['#000', '#000000', '#000000','#000000', '#000000', '#000000'],//セクションごとの背景色設定
	anchors: ['area1', 'area2', 'area3','area4','area5','area6','area7'],//セクションとリンクするページ内アンカーになる名前
	menu: '#menu',//上部ナビゲーションのメニュー設定
	navigation: true,//右のナビゲーション出現、非表示は false
	loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
    

    
});


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

