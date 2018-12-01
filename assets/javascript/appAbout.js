$(document).ready(() => {
  showAnimation("welcomeSwipe", "6", "canChangeW");
  function showAnimation(anim, duration, whichClass) {
    $(`.${whichClass}`).attr(
      `style`,
      `animation: ${anim} ${duration}s;animation-fill-mode:forwards;`
    );
  }


});
