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
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
  ]);

  const basesOfTen = new Map([
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
  ]);

  const inputMinutes = Number(minutes);

  switch (true) {
    case inputMinutes <= 9:
      return inputMinutes === 0 ? "o'clock" : `oh ${singles.get(inputMinutes)}`;

    case inputMinutes <= 19:
      return teens.get(inputMinutes);

    case inputMinutes <= 59:
      const tens = Math.floor(inputMinutes / 10) * 10;
      const ones = inputMinutes % 10;
      return ones !== 0
        ? `${basesOfTen.get(tens)} ${singles.get(ones)}`
        : basesOfTen.get(tens);
  }
};

const generateHours = function (hour) {
  const hoursMap = new Map([
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

  const numericHour = Number(hour);

  return {
    hourWord: hoursMap.get(numericHour % 12 || 12),
    amOrPm: numericHour < 12 ? "am" : "pm",
  };
};

const generateTimeWord = function (userInput) {
  if (userInput === "00:00") return "midnight";
  else if (userInput === "12:00") return "noon";

  const [hour, minutes] = userInput.split(":");

  const { hourWord, amOrPm } = generateHours(hour);

  const minutesWord = generateMinutes(minutes);
  return `${hourWord} ${minutesWord} ${amOrPm}`;
};

module.exports = { generateMinutes, generateHours, generateTimeWord };
