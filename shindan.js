const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("自分にあったスポーツを診断してくれるプログラム");
console.log("--------------------");

rl.question("1. 一人が好きか？ はい or いいえ ", (answer1) => {
  rl.question("2. 人と対峙してプレイしたいか？ はい or いいえ ", (answer2) => {
    rl.question("3. コツコツとスキルを磨きたいか？ はい or いいえ ", (answer3) => {
      // ここでユーザーの回答をもとに性格を診断
      const personality = diagnosePersonality(answer1, answer2, answer3);
      console.log("--------------------");
      console.log("あなたの性格診断結果: " + personality);
      rl.close();
    });
  });
});

// ユーザーの回答に基づいて性格を診断する関数
function diagnosePersonality(answer1, answer2, answer3) {
  // ここで回答に応じた性格を診断し、適切なメッセージを返すロジックを記述します
  // この例では簡単な診断ロジックを示していますが、実際の診断はもっと複雑で詳細になります
  if (answer1.toLowerCase().includes("はい") && answer2.toLowerCase().includes("はい") && answer3.toLowerCase().includes("はい")) {
    return "あなたにおすすめのスポーツは卓球やバドミントン！";
  } else if (answer1.toLowerCase().includes("はい") && answer2.toLowerCase().includes("はい") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたにおすすめのスポーツ格闘技！";
  } else if (answer1.toLowerCase().includes("はい") && answer2.toLowerCase().includes("いいえ") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたにおすすめのスポーツ陸上トラック競技";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("いいえ") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたにおすすめのスポーツ駅伝！";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("はい") && answer3.toLowerCase().includes("はい")) {
    return "あなたにおすすめのスポーツサッカーやラグビー、バスケットなど！";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("はい") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたにおすすめのスポーツカバディ！";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("いいえ") && answer3.toLowerCase().includes("はい")) {
    return "あなたにおすすめのスポーツ日本体育大学の集団行動！";
  }{
    return "このプログラムを作ったのは私です→https://www.instagram.com/rugg_photo/";
  }
}