

var wordData = [
    {
      word: "です",
      kana: null,
      translation: "be",
      sentence: "私は医者です。",
      sentenceTranslation: "I'm a doctor.",
    },
    {
      word: "鳥",
      kana: "とり",
      translation: "bird",
      sentence: "鳥の声が聞こえる。",
      sentenceTranslation: "I hear a bird.",
    },
    {
      word: "本",
      kana: "ほん",
      translation: "book",
      sentence: "本を読むのが好きなんです。",
      sentenceTranslation: "I like reading books.",
    },
    {
      word: "猫",
      kana: "ねこ",
      translation: "cat",
      sentence: "猫は魚を食べるのが好きです。",
      sentenceTranslation: "Cats like eating fish.",
    },
    {
      word: "家",
      kana: "いえ",
      translation: "house",
      sentence: "私の家は近いです。",
      sentenceTranslation: "My house is close.",
    },
    {
      word: "音楽",
      kana: "おんがく",
      translation: "music",
      sentence: "どんな音楽が好きなんですか？",
      sentenceTranslation: "What kind of music do you like?",
    },
    {
      word: "お茶",
      kana: "おちゃ",
      translation: "tea",
      sentence: "午後はお茶を飲んでいます。",
      sentenceTranslation: "I drink tea in the afternoon.",
    },
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
      document.getElementById("translation").textContent = randomWordData.translation;
      document.getElementById("sentence").textContent = randomWordData.sentence;
      document.getElementById("sentenceTranslation").textContent = randomWordData.sentenceTranslation;

      previousIndex = randomIndex;
}
updateWordOfTheDay();


function calculateBMI() {
  // Get user input values
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value / 100);

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display the result
  document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}