$(document).ready(function() {
  var timeOut;
  let numProj = 5;
  let sideBars = {
      projectNames:[
        "Welcome to Pat's Portfolio Page.",
        "Lord of the Rings RPG",
        "Trivia Game",
        "Project 3",
        "Project 4"
      ],
    descriptions: [
      "<p>Here you will find the project name and decription of Pat's projects.</p><p>Many projects were assigned through the Columbia Engineering Coding Boot Camp, while a few were completed for Pat's own enjoyment and personal use.</p><p>Happy browsing!</p>",
      " <p>This was a class assignment titled 'RPG Game' The premise was to create a game which contains characters with HP and attack power, and have the user choose one with which to defeat the remaining enemies. </p><p> I selected Lord of the Rings as my theme, and incorporated newly gained knowledge of objects and classes into my javascript. </p><p>The link of this game can be found here: </p>",
      "<p>This site was completed for a class assignment which required students to construct a simple trivia game. The game contains 15 questions, which are provided in a random order, one after the next as the user answers questions. Users are notified if they're correct immediately, and are given the total game stats at the game's end. </p><p> I went for a more visually appealing style for this UI, allowing a simple transparent 'game box' to rest over a lovely image of Sydney Harbor at night. The game itself is structured with objects and methods, and utilizes time intervals to manage the clock. </p></p><p>The link of this game can be found here: </p>",
      "Description 3",
      "Description 4"
    ]
  };
  $(".sbButton").on("click", event => {
    if ($(".portSidebar").attr("value") == "true") {
      $(".portSidebar").attr("value", "false");


      
      $(".portSidebar").attr("style", "animation:sidebarSwipeLeft .3s;animation-fill-mode: forwards;");

      $(".portContent").attr("style", "animation:portSwipeLeft .3s;animation-fill-mode:forwards;");
      $(".header").attr("style", "animation:headSwipeLeft .3s;animation-fill-mode:forwards;");



      $(".sbButton").html(">>");
      $(".sbButton").attr("style", "left: 20px;");
      // $(".header").addClass("fullscreen");
    } else {
      $(".portSidebar").attr("value", "true");
      $(".portSidebar").attr("style", "animation:sidebarSwipeRight .3s;animation-fill-mode: forwards;");

      $(".portContent").attr("style", "animation:portSwipeRight .3s;animation-fill-mode:forwards;");
      $(".header").attr("style", "animation:headSwipeRight .3s;animation-fill-mode:forwards;");




      $(".sbButton").html("<<");
      $(".sbButton").attr("style", "left: 27vw;");
            // $(".header").addClass("fullscreen");

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

    }, 250);
  });
});
