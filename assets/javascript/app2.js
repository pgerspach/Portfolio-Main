const sideBars = {
    projectNames: [
      "Welcome to Pat's Portfolio Page.",
      "Quote",
      "Hangman Game",
      "Lord of the Rings RPG",
      "Trivia Game",
      "GifTastic!",
      "Multiplayer Rock Paper Scissors",
      "Liri",
      "CLI Word Guess"
    ],
    descriptions: [
      "<p class = 'par par1'>Here you will find the project name and decription of my projects.</p><p class = 'par par2'>Many projects were assigned through the Columbia Engineering Coding Boot Camp, while a few were completed for my own enjoyment and personal use.</p><p class = 'par par3'>Happy browsing!</p>",
      "<p class = 'par par1'>Quote is a full stack project I've been working on for a few weeks now. The idea is to be a dedicated and intimate platform for sharing moments through quotes. Friends can post things said by their friends either publicly or in groups, and have them approved or denied. Approved quotes land on the speaker's own quote page.</p><p class = 'par par2'>Node.js and Express.js are used to set up the server and routing, while Sequelize.js is used with MySQL to store user information. User authentication is done through Google Firebase, which also provides the uuid for accessing database information. Finally, Handlebars is used to render the HTML.</p><p class = 'par par3'>This project is a work in progress and changes every day. I will attempt to keep this page as updated as I can and will post the link when I first push it to heroku! For now, here is the github link:  </p>",
      "<p class = 'par par1'>The site shown here is a completed version of the first 'real' assignment of the Columbia Boot Camp. The idea was to build a page for playing the popular 'hangman' game, and to make it work (duh). </p><p class = 'par par2'>I had a little fun with the design on this assignemnt, and gave it a colorful background and quirky farm theme. For functionality, I relied on jQuery keyboard events for user input, and built functions to handle user input and carry out the appropriate response. The game is initialized with a setup function called on document ready, which grabs a random first word from an array, shows the blanks, and waits for the user. </p><p class = 'par par3'>This game can be found <a href='https://pgerspach.github.io/Word-Guess-Game/'>here!</a> </p>",
      "<p class = 'par par1'>This was a class assignment titled 'RPG Game'. The premise was to create a game which contains characters with HP and attack power, and have the user choose one with which to defeat the remaining enemies. </p><p class = 'par par2'> I selected Lord of the Rings as my theme, and incorporated newly gained knowledge of objects and classes into my javascript. The game is mostly structured within an object, which contains an array of character objects and methods for handling the character properties. The rest of the js file is primarily jQuery event listeners determining the next action.  </p><p class = 'par '>I believe I was on the right path with this assignment, aiming for clean, sophisticated code while experimenting with new concepts.</p><p class = 'par par3'>The link of this game can be found <a href='https://pgerspach.github.io/unit-4-game'>here!</a> </p>",
      "<p class = 'par par1'>This site was completed for a class assignment which required students to construct a simple trivia game. The game contains 15 questions, which are provided in a random order, one after the next as the user answers questions. Users are notified if they're correct immediately, and are given the total game stats at the game's end. </p><p class = 'par par2'> I went for a more visually appealing style for this UI, allowing a simple transparent 'game box' to rest over a lovely image of Sydney Harbor at night. The game itself is structured with objects and methods, and utilizes time intervals to manage the clock. </p><p class = 'par par3'>The link of this game can be found <a href='https://pgerspach.github.io/TriviaGame'>here</a>  </p>",
      "<p class = 'par par1'>GifTastic! was a site completed for the Columbia Engineering Coding Boot Camp. It was a relatively simple assignment, designed to have us demonstrate our knowledge of API requests.</p> <p class = 'par par2'>GifTastic! consists of a search bar in the upper right corner, which allows users to request GIFs of a certain theme. This search will then be saved in a button added to the button bar, while space below is populated with up to ten GIFs utilizing the Giphy API.</p><p class = 'par par3'>The link to this site can be found <a href='https://pgerspach.github.io/GifTastic'>here!</a> </p>",
      "<p class = 'par par1'>Here you can find a screen grab of my ‘RPS Multiplayer’ game. This game works just like a normal game of Rock Paper Scissors, except it is played in your browser against an opponent online.</p><p class = 'par par2'>The game utilizes Google Firebase for it’s online functionality. When a player goes on the site, a connection is created and a player object initialized. The user’s selection is stored in Firebase, and the opponent’s selection is only displayed when both players have selected. The game displays the winner and keeps track of wins and losses. When a user disconnects, wins and losses are reset. The site also features a chat window, allowing players to talk with one another during play.</p><p class = 'par par3'>The link to this game can be found <a href='https://pgerspach.github.io/RPS-Multiplayer'>here!</a></p>",
      "<p class = 'par par1'>This little project was my first experience with node.js. The goal was to successfully retrieve CLI input and return specified data using API requests.</p><p class = 'par par2' >The three APIs used were spotify, OMDB, and BandsInTown. The user first specifies what type of request should be made with the first argument (concert-this, movie-this, spotify-this-song), and then passes the keyword(s). The app then uses the ‘Axios’ npm module to make the request and return the JSON data to be searched. Additionally, the ‘fs’ node model was used to make a log.txt file of all requests.</p>",
      "<p class = 'par par1'>CLI Word Guess was an exercise to gain further practice with node.js and the 'inquirer' npm module.</p><p class = 'par par2' >The aim was to recreate my former 'hangman' game in the terminal. The npm module 'inquirer' was used to get user input, which would be validated to ensure only a letter was guessed. 'Letter' and 'word' class modules were created to improve code readability and to encapsulate the functionality of each into methods and properties.</p><p class = 'par par3'>The link to this github repo can be found <a href='https://github.com/pgerspach/CLI_word_guess'>here!</a></p>"
    ]
  };
  
  
  $(document).ready(function() {
    
    const howmuchScroll = 0;
    let timeOut;

    //////////////////////////////////////////////////////////////**************** */
    let vpHeight = $(this).outerHeight();
    // console.log(vpHeight);
    let vpWidth = $(this).outerWidth();
    $(".header").css("min-width", vpWidth*0.75);
    $(".portContent").css("min-width", vpWidth*0.75*.75);
    $(".portSidebar").css("min-width", vpWidth*0.25*.75);
    //box-shadow: calc(25vw + 2px) 1px 4px black;
    console.log("YEAH"+ $(".header").outerWidth()*.75)
    // $(".header").css("box-shadow", `${$(".header").outerWidth()*.75}px 1px 4px black`);

    // $(".header").css("min-width", vpWidth*0.75);

    let iconHeight = 0.15*vpHeight;
    let iconWidth = 1.7*iconHeight;
    // console.log("HEIGHT "+`${iconHeight}px`);
    // console.log("WIDTH "+`${iconWidth}px`);
//////////////////////////////////////////////////////////////************** */
    $(".tnIcons").attr("height", `${iconHeight}px`);
    $(".tnIcons").attr("width", `${iconWidth}px`);

    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      // console.log("Element top: " + elementTop);
  
      var elementBottom = elementTop + $(this).outerHeight();
      // console.log("Element bottom: " + elementBottom);
  
      var viewportTop = $(this).scrollTop();
      // console.log("VP top: " + viewportTop);
  
      var viewportBottom = viewportTop + $(this).height();
      // console.log("VP bottom: " + viewportBottom);
  
      return (
        elementTop > 0 &&
        elementBottom > viewportTop &&
        elementTop < viewportBottom
      );
    };
  
    $(".portContent").on("scroll", event => {
      // console.log(`${event}`);
      let numProj = sideBars.descriptions.length;
      clearTimeout(timeOut);
      var whichProj = 0;
  
      timeOut = setTimeout(() => {
        // console.clear();
        //   console.log($("header:visible").attr("value"));
        for (let i = 0; i < numProj; i++) {
          if ($(`.portContent${i}`).isInViewport()) {
            whichProj = i;
            break;
          }
        }
    
  
        $(".projectName").html(sideBars.projectNames[whichProj]);
        $(".description").html(sideBars.descriptions[whichProj]);
      }, 10);
    });


    $(".sbButton").on("click", event => {
      if ($(".portSidebar").attr("value") == "true") {
        $(".portSidebar").attr("value", "false");
  
      
        $(".portSidebar").css(`min-width`, `0`);
        $(".portSidebar").css(
          `animation`,
          `sidebarSwipeLeft 0.3s ease forwards`
        );
  
        $(".portContent").css(
          "animation",
          "portSwipeLeft 0.3s ease forwards"
        );
        $(".header").css(`min-width`, `0`);
        $(".header").css(
          "animation",
          "headSwipeLeft 0.3s ease forwards"
        );
  
        $(".sbButton").html(">>");
        // $(".sbButton").css("left", `20px`);
  
        // $(".header").addClass("fullscreen");
      } else {
        $(".portSidebar").attr("value", "true");
  
        $(".portSidebar").css("min-width", vpWidth*0.25*.75);
        $(".header").css("min-width", vpWidth*0.75);
  
  ///////////////////////////////////////////////////////////////////////////////////
        $(".portSidebar").css(
          `animation`,
          `sidebarSwipeRight 0.3s ease forwards`
        );
  
        $(".portContent").css(
          "animation",
          "portSwipeRight 0.3s ease forwards"
        );
  
        $(".header").css(
          "animation",
          "headSwipeRight 0.3s ease forwards"
        );
  ///////////////////////////////////////////////////////////////////////////////////
  
        $(".sbButton").html("<<");
        // $(".sbButton").css("left", `0px`);
        // $(".sbButton").css("margin-left", `2%`);

        
      }
    });

    function showAnimation(anim, duration, whichClass) {
      $(`.${whichClass}`).attr(
        `style`,
        `animation: ${anim} ${duration}s;animation-fill-mode:forwards;`
      );
    }
    
    $(".tnIcons").click((event)=>{
      // console.log(event.target.classList[1]);
      $(".portContent").scrollTop(event.target.classList[1]*$(`.pc`).outerHeight())
    })

  });
  