open Css;

module Types = {
  type font =
    | Title1
    | Title2
    | Title3
    | Text
    | Small;
};

module Colors = {
  let cyan900 = hex("044E54");
  let cyan800 = hex("0A6C74");
  let cyan700 = hex("0E7C86");
  let cyan600 = hex("14919B");
  let cyan500 = hex("2CB1BC");
  let cyan400 = hex("38BEC9");
  let cyan300 = hex("54D1D4");
  let cyan200 = hex("87EAF2");
  let cyan100 = hex("BEF8FD");
  let cyan050 = hex("E0FCFF");

  let gray900 = hex("102A43");
  let gray800 = hex("243B53");
  let gray700 = hex("334E68");
  let gray600 = hex("486581");
  let gray500 = hex("627D98");
  let gray400 = hex("829AB1");
  let gray300 = hex("9FB3C8");
  let gray200 = hex("BCCCDC");
  let gray100 = hex("D9E2EC");
  let gray050 = hex("F0F4FB");

  let indigo900 = hex("19216C");
  let indigo800 = hex("2D3A8C");
  let indigo700 = hex("35469C");
  let indigo600 = hex("4055AB");
  let indigo500 = hex("4C63B6");
  let indigo400 = hex("647ACB");
  let indigo300 = hex("7B93DB");
  let indigo200 = hex("98AEEB");
  let indigo100 = hex("BED0F7");
  let indigo050 = hex("E0E8F9");

  let pink900 = hex("5C0B33");
  let pink800 = hex("781244");
  let pink700 = hex("9B1B5A");
  let pink600 = hex("AD2167");
  let pink500 = hex("C42D78");
  let pink400 = hex("DA4A91");
  let pink300 = hex("E668A7");
  let pink200 = hex("F191C1");
  let pink100 = hex("FAB8D9");
  let pink050 = hex("FFE0F0");

  let red900 = hex("610404");
  let red800 = hex("780A0A");
  let red700 = hex("911111");
  let red600 = hex("A61B1B");
  let red500 = hex("BA2525");
  let red400 = hex("D64545");
  let red300 = hex("E66A6A");
  let red200 = hex("F29B9B");
  let red100 = hex("FACDCD");
  let red050 = hex("FFEEEE");

  let yellow900 = hex("513C06");
  let yellow800 = hex("7C5E10");
  let yellow700 = hex("A27C1A");
  let yellow600 = hex("C99A2E");
  let yellow500 = hex("E9B949");
  let yellow400 = hex("F7D070");
  let yellow300 = hex("F9DA8B");
  let yellow200 = hex("F8E3A3");
  let yellow100 = hex("FCEFC7");
  let yellow050 = hex("FFFAEB");
};

module FontSize = {
  let px12 = fontSize(px(12));
  let px14 = fontSize(px(14));
  let px16 = fontSize(px(16));
  let px18 = fontSize(px(18));
  let px20 = fontSize(px(20));
  let px24 = fontSize(px(24));
  let px30 = fontSize(px(30));
  let px36 = fontSize(px(36));
  let px48 = fontSize(px(48));
  let px60 = fontSize(px(60));
  let px72 = fontSize(px(72));
};

module Spacer = {
  let px004 = px(4);
  let px008 = px(8);
  let px012 = px(12);
  let px016 = px(16);
  let px024 = px(24);
  let px032 = px(32);
  let px048 = px(48);
  let px064 = px(64);
  let px096 = px(96);
  let px128 = px(128);
  let px192 = px(192);
  let px256 = px(256);
  let px384 = px(384);
  let px512 = px(512);
  let px640 = px(640);
  let px768 = px(768);
};

module Styles = {
  let container = [
    padding2(~h=Spacer.px064, ~v=Spacer.px048),
    media(
      "(max-width: 600px)",
      [padding2(~h=Spacer.px024, ~v=Spacer.px048)],
    ),
  ];

  let mobile = styles => media("(max-width: 600px)", styles);

  let noMobile = styles => media("(min-width: 601px)", styles);

  let content = [maxWidth(`em(50.0)), margin2(~v=px(0), ~h=`auto)];
};

module Font = {
  open Types;

  let size = (size: font) => {
    switch (size) {
    | Title1 => [FontSize.px72, Styles.mobile([FontSize.px48])]
    | Title2 => [FontSize.px36, Styles.mobile([FontSize.px30])]
    | Title3 => [FontSize.px30, Styles.mobile([FontSize.px24])]
    | Text => [FontSize.px24, Styles.mobile([FontSize.px18])]
    | Small => [FontSize.px18, Styles.mobile([FontSize.px16])]
    };
  };
};
