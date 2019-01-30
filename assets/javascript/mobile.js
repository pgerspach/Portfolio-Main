let isMobile = false;

$(document).ready(() => {

  if ($(window).width() < 594) {
    isMobile = true;
    // $(".portSidebar").attr("style", "display:none");
    $(".header").css("height", "auto");
    $(".header").css("overflow", "display");
    $(".belowHead").css("position", "absolute");
    $(".belowHead").css("top", `${$(".header").outerHeight()}`);
    $(".belowHead").css("height", `calc(100vh - ${$(".header").outerHeight()}px)`);

    $(".portSidebar").css("display", "none");
    $(".sbButton").css("display", "none");
    $(".portIcons").css("display", "none");

    $(".portContent").css("width", "100vw");
    let vpWidth = $(this).outerWidth();
    // console.log(vpHeight);
    let iconWidth = 0.3*vpWidth;

    let iconHeight = 0.5625*iconWidth;
    // console.log("HEIGHT "+`${iconHeight}px`);
    // console.log("WIDTH "+`${iconWidth}px`);

    $(".tnIcons").attr("height", `${iconHeight}px`);
    $(".tnIcons").attr("width", `${iconWidth}px`);
    

  }
});
