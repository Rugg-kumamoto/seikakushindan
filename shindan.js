const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("性格診断プログラム");
console.log("--------------------");

rl.question("1. 体を動かすのは好きですか？ はい or いいえ ", (answer1) => {
  rl.question("2. たくさんの人同じ空間を過ごすことは好きですか？ はい or いいえ ", (answer2) => {
    rl.question("3. 常に紳士的な態度で人と接していますか？ はい or いいえ ", (answer3) => {
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
    return "あなたはラガーマンの素質があります！";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("はい") && answer3.toLowerCase().includes("はい")) {
    return "あなたはスーパー飲み会幹事の素質があります！";
  } else if (answer1.toLowerCase().includes("いいえ") && answer2.toLowerCase().includes("いいえ") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたは孤高の仕事人の素質があります";
  } else if (answer1.toLowerCase().includes("はい") && answer2.toLowerCase().includes("いいえ") && answer3.toLowerCase().includes("いいえ")) {
    return "あなたは人を騙す人になるかも！要注意！";
  } else {
    return "その他の回答はこちら→https://www.instagram.com/rugg_photo/";
  }
}