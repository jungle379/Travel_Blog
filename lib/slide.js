export async function getStaticPaths({ params }) {

const slide = parseInt(params.images)
const images = ['TIKO.png', 'tokyo.png', 'slide3.png', 'slide4.png', 'slide5.png'];
    // 全ての画像に対してpreloadImageを呼び出します
    // images.forEach(function (item, index) {
    //   preloadImage(item);
    // });
    // 変数currentに現在表示されている画僧のindex番号を保存します
    let current = 0;
    // 押されたボタンに応じて1,または-1をnumとして渡します
    function changeImage(num) {
      // 表示する画像があるのか調べます
      if (current + num >= 0 && current + num < images.length) {
        // 現在表示されている画像のindex番号に1,または-1を足します
        current += num;
        // currentの数字に応じた画像をimagesから取り出して表示を切り替えます
        document.getElementById('main_image').src = images[current];
        // 現在の表示画像番号も切り替えます
        pageNum();
      }
    };
    // 最初に全ての画像を読み込みます
    function preloadImage(path) {
      let imgTag = document.createElement('img');
      imgTag.src = path;
    }
    // 現在の表示されている画像番号を表示します
    function pageNum() {
      document.getElementById('page').textContent = `${current + 1} / ${images.length}`
    };

    pageNum();
    // prevボタンが押された場合1つ前の画像に戻るよう引数に-1を渡します
    document.getElementById('prev').onclick = function () {
      changeImage(-1);
    };
    // nextボタンが押された場合1つ先の画像に進むよう引数に1を渡します
    document.getElementById('next').onclick = function () {
      changeImage(1);
    }