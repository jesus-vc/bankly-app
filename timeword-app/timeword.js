const generateMinutes = function (minutes) {
  const singles = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
  ]);

  const teens = new Map([
    ["suffix", "teen"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "forteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
  ]);

  const bases = new Map([
    [10, "ten"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
  ]);

  let outputMinutes = "";
  const inputMinutes = Number(minutes);
  let inputArray = minutes.split("").map(Number);

  if (inputMinutes >= 0 && inputMinutes <= 9) {
    outputMinutes =
      inputMinutes % 10 !== 0
        ? "oh" + " " + singles.get(inputArray[1])
        : "o'clock";
  }

  if (inputMinutes >= 10 && inputMinutes <= 19) {
    outputMinutes =
      inputMinutes % 10 !== 0 ? teens.get(inputMinutes) : bases.get(10);
  }

  if (inputMinutes >= 20 && inputMinutes <= 29) {
    outputMinutes =
      inputMinutes % 10 !== 0
        ? bases.get(20) + " " + singles.get(inputArray[1])
        : bases.get(20);
  }

  if (inputMinutes >= 30 && inputMinutes <= 39) {
    outputMinutes =
      inputMinutes % 10 !== 0
        ? bases.get(30) + " " + singles.get(inputArray[1])
        : bases.get(30);
  }

  if (inputMinutes >= 40 && inputMinutes <= 49) {
    outputMinutes =
      inputMinutes % 10 !== 0
        ? bases.get(40) + " " + singles.get(inputArray[1])
        : bases.get(40);
  }

  if (inputMinutes >= 50 && inputMinutes <= 59) {
    outputMinutes =
      inputMinutes % 10 !== 0
        ? bases.get(50) + " " + singles.get(inputArray[1])
        : bases.get(50);
  }
  return outputMinutes;
};

const generateHours = function (hours) {
  hours = Number(hours);

  const hoursMap = new Map([
    [0, "twelve"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
  ]);

  if (hours < 12) return { hour: hoursMap.get(hours), amOrPm: "am" };

  if (hours >= 12) return { hour: hoursMap.get(hours - 12), amOrPm: "pm" };
};

const generateTimeWord = function (userInput) {
  if (userInput === "00:00") return "midnight";
  if (userInput === "12:00") return "noon";

  const inputArray = userInput.split(":");

  const { hour, amOrPm } = generateHours(inputArray[0]);

  const minutes = generateMinutes(inputArray[1]);
  return hour + " " + minutes + " " + amOrPm;
};

module.exports = { generateMinutes, generateHours, generateTimeWord };
