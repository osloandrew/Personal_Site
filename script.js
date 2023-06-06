function calculateBMI() {
    // Get user input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate BMI
    var bmi = weight / (height * height);

    // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }

var wordData = [
    {
      word: "本",
      kana: "ほん",
      romaji: "hon",
      translation: "book",
      sentence: "本を読むのが好きなんです。",
    },
    {
      word: "家",
      kana: "いえ",
      romaji: "ie",
      translation: "house",
      sentence: "私の家は近いです。",
    },
    {
      word: "猫",
      kana: "ねこ",
      romaji: "neko",
      translation: "cat",
      sentence: "猫は魚を食べるのが好きです。",
    }
  ];



    // Function to update the word of the day
    var previousIndex = -1;

function getRandomIndex() {
      var randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * wordData.length);
      } while (randomIndex === previousIndex);
      return randomIndex;
    }

function updateWordOfTheDay() {

      var randomIndex = getRandomIndex();
      var randomWordData = wordData[randomIndex];

      document.getElementById("word").textContent = randomWordData.word;
      document.getElementById("kana").textContent = randomWordData.kana;
      document.getElementById("romaji").textContent = randomWordData.romaji;
      document.getElementById("translation").textContent = randomWordData.translation;
      document.getElementById("sentence").textContent = randomWordData.sentence;

      previousIndex = randomIndex;
}

updateWordOfTheDay();
setInterval(updateWordOfTheDay, 24 * 60 * 60 * 1000);