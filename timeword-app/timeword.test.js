const {
  generateMinutes,
  generateTimeWord,
  generateHours,
} = require("./timeWord");

describe("generate edge case", function () {
  test("works: midnight", function () {
    const output00 = generateTimeWord("00:00");
    expect(output00).toEqual("midnight");
  });
  test("works: midnight", function () {
    const output12 = generateTimeWord("12:00");
    expect(output12).toEqual("noon");
  });
});

describe("generateHours", function () {
  test("works: before noon", function () {
    const output00 = generateHours("00");
    expect(output00).toEqual({ hour: "twelve", amOrPm: "am" });

    const output04 = generateHours("04");
    expect(output04).toEqual({ hour: "four", amOrPm: "am" });

    const output12 = generateHours("12");
    expect(output12).toEqual({ hour: "twelve", amOrPm: "pm" });
  });

  test("works: after noon", function () {
    const output11 = generateHours("13");
    expect(output11).toEqual({ hour: "one", amOrPm: "pm" });

    const output15 = generateHours("15");
    expect(output15).toEqual({ hour: "three", amOrPm: "pm" });

    const output18 = generateHours("18");
    expect(output18).toEqual({ hour: "six", amOrPm: "pm" });

    const output23 = generateHours("23");
    expect(output23).toEqual({ hour: "eleven", amOrPm: "pm" });
  });
});
describe("generateMinutes", function () {
  test("works: singles", function () {
    const output00 = generateMinutes("00");
    expect(output00).toEqual("o'clock");

    const output01 = generateMinutes("01");
    expect(output01).toEqual("oh one");

    const output04 = generateMinutes("04");
    expect(output04).toEqual("oh four");

    const output09 = generateMinutes("09");
    expect(output09).toEqual("oh nine");
  });

  test("works: teens", function () {
    const output10 = generateMinutes("10");
    expect(output10).toEqual("ten");

    const output14 = generateMinutes("14");
    expect(output14).toEqual("forteen");

    const output19 = generateMinutes("19");
    expect(output19).toEqual("nineteen");
  });

  test("works: twenties", function () {
    const output21 = generateMinutes("21");
    expect(output21).toEqual("twenty one");

    const output24 = generateMinutes("24");
    expect(output24).toEqual("twenty four");

    const output29 = generateMinutes("29");
    expect(output29).toEqual("twenty nine");
  });
  test("works: thirties", function () {
    const output30 = generateMinutes("30");
    expect(output30).toEqual("thirty");

    const output35 = generateMinutes("35");
    expect(output35).toEqual("thirty five");

    const output33 = generateMinutes("33");
    expect(output33).toEqual("thirty three");

    const output39 = generateMinutes("39");
    expect(output39).toEqual("thirty nine");
  });

  test("works: forties", function () {
    const output40 = generateMinutes("40");
    expect(output40).toEqual("forty");

    const output45 = generateMinutes("45");
    expect(output45).toEqual("forty five");

    const output43 = generateMinutes("43");
    expect(output43).toEqual("forty three");

    const output49 = generateMinutes("49");
    expect(output49).toEqual("forty nine");
  });

  test("works: fifties", function () {
    const output50 = generateMinutes("50");
    expect(output50).toEqual("fifty");

    const output55 = generateMinutes("55");
    expect(output55).toEqual("fifty five");

    const output53 = generateMinutes("53");
    expect(output53).toEqual("fifty three");

    const output59 = generateMinutes("59");
    expect(output59).toEqual("fifty nine");
  });
});

describe("generate full string", function () {
  test("works: 00:05", function () {
    let output = generateTimeWord("00:05");
    expect(output).toEqual("twelve oh five am");
  });

  test("works: 05:00", function () {
    let output = generateTimeWord("05:00");
    expect(output).toEqual("five o'clock am");
  });

  test("works: 22:00", function () {
    let output = generateTimeWord("22:00");
    expect(output).toEqual("ten o'clock pm");
  });

  test("works: 14:00", function () {
    let output = generateTimeWord("14:00");
    expect(output).toEqual("two o'clock pm");
  });

  test("works: 19:13", function () {
    let output = generateTimeWord("19:13");
    expect(output).toEqual("seven thirteen pm");
  });

  test("works: 11:37", function () {
    let output = generateTimeWord("11:37");
    expect(output).toEqual("eleven thirty seven am");
  });

  test("works: 12:09", function () {
    let output = generateTimeWord("12:09");
    expect(output).toEqual("twelve oh nine pm");
  });

  test("works: 23:37", function () {
    let output = generateTimeWord("23:37");
    expect(output).toEqual("eleven thirty seven pm");
  });

  test("works: 23:23", function () {
    let output = generateTimeWord("23:23");
    expect(output).toEqual("eleven twenty three pm");
  });

  test("works: 23:23", function () {
    let output = generateTimeWord("23:23");
    expect(output).toEqual("eleven twenty three pm");
  });
});
