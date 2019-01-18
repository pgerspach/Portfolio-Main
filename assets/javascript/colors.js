$(document).ready(() => {
  // let colors = ["0F084B", "888DA7", "F7B2AD", "63D2FF", "78D5D7"]; // LIKE IT
  // let colors = ["4B4E6D", "A1E887", "857885", "2F97C1", "1CCAD8"]; //OK
  // let colors = ["523249", "CBD4C2", "C3B299", "815355", "DBEBC0"]; // LIKE A LOT
  // let colors = ["2D93AD", "88AB75", "DE8F6E", "7D7C84", "DBD56E"];
  // let colors = ["982649", "DDFFD9", "7C8483", "68C3D4", "A3C9A8"];
  // let colors = ["5F1A37", "73C2BE", "776885", "73EEDC", "04030F"]; //LIKE!!!
  // let colors = ["931F1D", "8A9B68", "937B63", "B6C197", "D5DDBC"];
  // let colors = ["474647", "97CC04", "2D7DD2", "F45D01", "EEB902"];
  // let colors = ["36151E", "8499B1", "A5C4D4", "593F62", "7B6D8D"]; // NOT BAD
  // let colors = ["A77E58", "D9CFC1", "80A1C1", "BA3F1D", "EEE3AB"];
  // let colors = ["351E29", "C8E9A0", "6DD3CE", "F7A278", "A13D63"];
  // let colors = ["36393B", "AFD0D6", "C49799", "A5D8FF", "BFB6BB"];
  // let colors = ["393D3F", "D5BBB1", "9CC4B2", "E76D83", "C98CA7"];
  // let colors = ["BB0A21", "ECEBE4", "6F73D2", "DDFFD9", "ECC8AE"];
  // let colors = ["EC7357", "EEF5DB", "C7EFCF", "FE5F55", "FDD692"];
  let colors = ["183059", "F6F4F3", "DBB4AD", "B46CCC", "276FBF"];


  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  //////////////////////*********************************** */
  //////////////////////*********************************** */

  // colors = shuffle(colors);

  //////////////////////*********************************** */

  let transColors = colors.map(hexToRgb);
  colors = colors.map(x => {
    return "#" + x;
  });
  const primary = colors[0];
  const secondary = colors[1];
  const tertiary = colors[2];
  const quatrenary = colors[3];
  const quintinary = colors[4];

  //////////////////////*********************************** */
  //////////////////////*********************************** */

  const sidebarColor = transColors[1];
  const sidebarTrans = 0.9;
  const sidebarFontColor = colors[0];
  const portfolioBackgroundColor = `radial-gradient(${colors[4]}, ${
    colors[3]
  },${colors[2]}`;
  const portContentHeadColor = colors[0];
  //////////////////////*********************************** */

  console.log(colors);

  function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }
  toColor(".header", "background", primary);
  toColor(".header", "color", secondary);


  $(".imageDiv1").css("background", portfolioBackgroundColor);
  toColor("a", "color", tertiary);
  toColor("a.navLink", "color", secondary);
  $(".tnIcons").css("border", `2px solid ${colors[0]}`);
  $(".tnIcons").css("border-radius", `20px`);


  $("head")
    .append(`<style>a:hover{ text-shadow: -1px 1px 1px ${tertiary}, 1px -1px 1px ${tertiary},
  1px 1px 1px ${tertiary}, -1px -1px 1px ${tertiary}; }</style>`);

  toColor(".belowHead", "background", colors[1]);
  toColor(
    ".portSidebar",
    "background",
    `rgba(${sidebarColor.r},${sidebarColor.g},${
      sidebarColor.b
    },${sidebarTrans})`
  );

  $("head").append(
    `<style>.portSidebar:after{background: linear-gradient(45deg,${
      colors[2]
    }, ${colors[3]},${colors[1]}, ${colors[4]}); }</style>`
  );

  $("head").append(`<style>.imageDiv:after{ background: ${colors[1]}}</style>`);

  toColor(".projectName", "color", sidebarFontColor);

  css(
    ".sbButton",
    `background:
    rgba(${transColors[0].r},${transColors[0].g},${
      transColors[0].b
    },.5);border:1px solid ${colors[2]}`
  );


  $("head").append(
    `<style>.sbButton:hover{background: rgba(${transColors[1].r}, ${
      transColors[1].g
    },${transColors[1].b},.5);}</style>`
  );

  toColor(".description", "color", colors[2]);
  css(".description.portfolio", "color:" + sidebarFontColor);

  toColor(".portContentHead", "color", portContentHeadColor);
  toColor(".portContentBody", "color", colors[2]);

  css(".header.about", `color: ${colors[1]};background: ${colors[0]}`);

  toColor(".welcomeAbout", "border-bottom", `2px solid ${colors[0]}`);

  css(
    ".welcomeHeader",
    `background: rgba(${transColors[2].r},${transColors[2].g},${
      transColors[2].b
    },.8);box-shadow: 1px 1px 15px 1px rgba(${transColors[2].r},${
      transColors[2].g
    },${transColors[2].b},.2),
  -1px 1px 15px 1px rgba(${transColors[2].r},${transColors[2].g},${
      transColors[2].b
    },.5),
  1px -1px 15px 1px rgba(${transColors[2].r},${transColors[2].g},${
      transColors[2].b
    },.5),
  -1px -1px 15px 1px rgba(${transColors[2].r},${transColors[2].g},${
      transColors[2].b
    },.5)`
  );

  toColor(".description.about", "color", colors[0]);
  toColor(".page2topRow", "background", colors[0]);

  $("head").append(
    `<style>.header::after{ background:linear-gradient(45deg,${colors[2]}, ${
      colors[3]
    },${colors[1]}, ${colors[4]});}</style>`
  );


  $("head").append(
    `<style>.page2topRow::before{ background:linear-gradient(45deg,${
      colors[2]
    }, ${colors[3]},${colors[1]}, ${colors[4]});}</style>`
  );


  $("head").append(
    `<style>.page2topRow::after{ background:linear-gradient(45deg,${
      colors[2]
    }, ${colors[3]},${colors[1]}, ${colors[4]});}</style>`
  );
  toColor(".aboutFooter", "background", colors[0]);

  $("head").append(
    `<style>.aboutFooter::before{ background:linear-gradient(45deg,${
      colors[2]
    }, ${colors[3]}, ${colors[4]});}</style>`
  );
  toColor(".aboutFooterContact", "background", colors[0]);

  $("head").append(
    `<style>.aboutFooterContact::before{ background:linear-gradient(45deg,${
      colors[2]
    }, ${colors[3]},${colors[1]}, ${colors[4]});}</style>`
  );
  toColor(".form-inp", "border", `1px solid ${colors[0]}`);


  function toColor(element, attribute, color) {
    $(`${element}`).css(`${attribute}`,`${color}`);
  }
  function css(element, style) {
    $(`${element}`).attr("style", style);
  }
});
