const sideBars = {
  projectNames: [
    "Welcome to Pat's Portfolio Page.",
    "Hangman Game",
    "Lord of the Rings RPG",
    "Trivia Game",
    "GifTastic!",
    "Multiplayer Rock Paper Scissors",
    "Liri"
  ],
  descriptions: [
    "<p class = 'par par1'>Here you will find the project name and decription of my projects.</p><p class = 'par par2'>Many projects were assigned through the Columbia Engineering Coding Boot Camp, while a few were completed for my own enjoyment and personal use.</p><p class = 'par par3'>Happy browsing!</p>",
    "<p class = 'par par1'>The site shown here is a completed version of the first 'real' assignment of the Columbia Boot Camp. The idea was to build a page for playing the popular 'hangman' game, and to make it work (duh). </p><p class = 'par par2'>I had a little fun with the design on this assignemnt, and gave it a colorful background and quirky farm theme. For functionality, I relied on jQuery keyboard events for user input, and built functions to handle user input and carry out the appropriate response. The game is initialized with a setup function called on document ready, which grabs a random first word from an array, shows the blanks, and waits for the user. </p><p class = 'par par3'>This game can be found <a href='https://pgerspach.github.io/Word-Guess-Game/'>here!</a> </p>",
    "<p class = 'par par1'>This was a class assignment titled 'RPG Game'. The premise was to create a game which contains characters with HP and attack power, and have the user choose one with which to defeat the remaining enemies. </p><p class = 'par par2'> I selected Lord of the Rings as my theme, and incorporated newly gained knowledge of objects and classes into my javascript. The game is mostly structured within an object, which contains an array of character objects and methods for handling the character properties. The rest of the js file is primarily jQuery event listeners determining the next action.  </p><p class = 'par '>I believe I was on the right path with this assignment, aiming for clean, sophisticated code while experimenting with new concepts.</p><p class = 'par par3'>The link of this game can be found <a href='https://pgerspach.github.io/unit-4-game'>here!</a> </p>",
    "<p class = 'par par1'>This site was completed for a class assignment which required students to construct a simple trivia game. The game contains 15 questions, which are provided in a random order, one after the next as the user answers questions. Users are notified if they're correct immediately, and are given the total game stats at the game's end. </p><p class = 'par par2'> I went for a more visually appealing style for this UI, allowing a simple transparent 'game box' to rest over a lovely image of Sydney Harbor at night. The game itself is structured with objects and methods, and utilizes time intervals to manage the clock. </p><p class = 'par par3'>The link of this game can be found <a href='https://pgerspach.github.io/TriviaGame'>here</a>  </p>",
    "<p class = 'par par1'>GifTastic! was a site completed for the Columbia Engineering Coding Boot Camp. It was a relatively simple assignment, designed to have us demonstrate our knowledge of API requests.</p> <p class = 'par par2'>GifTastic! consists of a search bar in the upper right corner, which allows users to request GIFs of a certain theme. This search will then be saved in a button added to the button bar, while space below is populated with up to ten GIFs utilizing the Giphy API.</p><p class = 'par par3'>The link to this site can be found <a href='https://pgerspach.github.io/GifTastic'>here!</a> </p>",
    "<p class = 'par par1'>Here you can find a screen grab of my ‘RPS Multiplayer’ game. This game works just like a normal game of Rock Paper Scissors, except it is played in your browser against an opponent online.</p><p class = 'par par2'>The game utilizes Google Firebase for it’s online functionality. When a player goes on the site, a connection is created and a player object initialized. The user’s selection is stored in Firebase, and the opponent’s selection is only displayed when both players have selected. The game displays the winner and keeps track of wins and losses. When a user disconnects, wins and losses are reset. The site also features a chat window, allowing players to talk with one another during play.</p><p class = 'par par3'>The link to this game can be found <a href='https://pgerspach.github.io/RPS-Multiplayer'>here!</a></p>",
    "<p class = 'par par1'>This little project was my first experience with node.js. The goal was to successfully retrieve CLI input and return specified data using API requests.</p><p class = 'par par2' >The three APIs used were spotify, OMDB, and BandsInTown. The user first specifies what type of request should be made with the first argument (concert-this, movie-this, spotify-this-song), and then passes the keyword(s). The app then uses the ‘Axios’ npm module to make the request and return the JSON data to be searched. Additionally, the ‘fs’ node model was used to make a log.txt file of all requests.</p>"
  ]
};
  let colors = ["0F084B", "888DA7", "F7B2AD", "63D2FF", "78D5D7"];

  const transColors = colors.map(hexToRgb);
  colors = colors.map((x)=>{
      return "#"+x;
  })
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
  const primary = colors[0];
  const secondary = colors[1];
  const tertiary = colors[2];
  const quatrenary = colors[3];
  const quintinary = colors[4];
  const sidebarColor = transColors[1];
  const sidebarTrans = 0.9;
  
$(document).ready(function() {
  
  const howmuchScroll = 0;
  let timeOut;
  $(".sbButton").on("click", event => {
    if ($(".portSidebar").attr("value") == "true") {
      $(".portSidebar").attr("value", "false");
      $(".portSidebar").attr(
        `style`,
        `padding: ${document.getElementById("pSB").offsetWidth -
          document.getElementById("pSB").clientWidth};` +
          "animation:sidebarSwipeLeft .3s;animation-fill-mode: forwards;" +
          `background:rgba(${sidebarColor.r},${sidebarColor.g},${
            sidebarColor.b
          },${sidebarTrans})`
      );

      // $(".portSidebar").attr(
      //   "style",
      //   "animation:sidebarSwipeLeft .3s;animation-fill-mode: forwards;"+`background:rgba(${transColors[0].r},${transColors[0].g},${transColors[0].b},.9)`
      // );

      $(".portContent").attr(
        "style",
        "animation:portSwipeLeft .3s;animation-fill-mode:forwards;"
      );
      $(".header").attr(
        "style",
        "animation:headSwipeLeft .3s;animation-fill-mode:forwards;background:" +
          colors[0] +
          ";color:" +
          colors[1] +
          ";"
      );

      $(".sbButton").html(">>");
      $(".sbButton").attr(
        "style",
        `left: 20px;background:
      rgba(${transColors[0].r},${transColors[0].g},${
          transColors[0].b
        },.5);border:1px solid ${colors[2]}`
      );

      // $(".header").addClass("fullscreen");
    } else {
      $(".portSidebar").attr("value", "true");
      $(".portSidebar").attr(
        `style`,
        `padding: ${document.getElementById("pSB").offsetWidth -
          document.getElementById("pSB").clientWidth}` +
          "animation:sidebarSwipeRight .3s;animation-fill-mode: forwards;" +
          `background:rgba(${sidebarColor.r},${sidebarColor.g},${
            sidebarColor.b
          },${sidebarTrans})`
      );

      // $(".portSidebar").attr(
      //   "style",
      //   "animation:sidebarSwipeRight .3s;animation-fill-mode: forwards;"+`background:rgba(${transColors[0].r},${transColors[0].g},${transColors[0].b},.9)`
      // );

      $(".portContent").attr(
        "style",
        "animation:portSwipeRight .3s;animation-fill-mode:forwards;"
      );
      $(".header").attr(
        "style",
        "animation:headSwipeRight .3s;animation-fill-mode:forwards;background:" +
          colors[0] +
          ";color:" +
          colors[1] +
          ";"
      );

      $(".sbButton").html("<<");
      $(".sbButton").attr(
        "style",
        `left: 27vw;background:
      rgba(${transColors[0].r},${transColors[0].g},${
          transColors[0].b
        },.5);border:1px solid ${colors[2]}`
      );
    }
  });
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    console.log("Element top: " + elementTop);

    var elementBottom = elementTop + $(this).outerHeight();
    console.log("Element bottom: " + elementBottom);

    var viewportTop = $(this).scrollTop();
    console.log("VP top: " + viewportTop);

    var viewportBottom = viewportTop + $(this).height();
    console.log("VP bottom: " + viewportBottom);

    return (
      elementTop > 0 &&
      elementBottom > viewportTop &&
      elementTop < viewportBottom
    );
  };

  $(".portContent").on("scroll", event => {
    console.log(`${event}`);
    let numProj = sideBars.descriptions.length;
    clearTimeout(timeOut);
    var whichProj = 0;

    timeOut = setTimeout(() => {
      console.clear();
      //   console.log($("header:visible").attr("value"));
      for (let i = 0; i < numProj; i++) {
        if ($(`.portContent${i}`).isInViewport()) {
          whichProj = i;
          break;
        }
      }
      console.clear();
      console.log(whichProj);

      $(".projectName").html(sideBars.projectNames[whichProj]);
      $(".description").html(sideBars.descriptions[whichProj]);
    }, 10);
  });
  function showAnimation(anim, duration, whichClass) {
    $(`.${whichClass}`).attr(
      `style`,
      `animation: ${anim} ${duration}s;animation-fill-mode:forwards;`
    );
  }
  $(".bioDiv").mouseenter(event => {
    showAnimation("welcomeSwipe", "1", "canChangeW");
    $(".bioDiv").attr("style", "overflow-y:scroll;");
  });
  $(".bioDiv").mouseleave(event => {
    showAnimation("welcomeSwipeB", "1", "canChangeW");
    $(".bioDiv").scrollTop(0);
  });
});
