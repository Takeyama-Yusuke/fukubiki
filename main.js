fukubiki = window.prompt("福引に挑戦しよう! \n1~10の数字を入力してください。");

switch(fukubiki) {
  case "1":
    document.write("特等です！！ 宇宙旅行2年間が当たりました！");
    break;
  case "2": case "5":
    document.write("1等が当たりました。景品はフェラーリです。");
    break;
  case "4": case "6":
    document.write("2等が当たりました。景品は80年代のブラウン管テレビです。");
    break;
  case "3": case "6": case "9":
    document.write("３等が当たりました。景品は5,000円の商品券です。");
    break;
  default:
    document.write("ハズレです。何も差し上げません（笑）");
    break;
}
