let partyTimeToggle = false;

function partyTime() {
  if (partyTimeToggle == false) {
    $("a").addClass("partyTime");
    $("a").prevAll().addClass("partyTime");
    $("img").addClass("partyBorder");
    $("img").prevAll().addClass("partyBorder");
    partyTimeToggle = true;
    console.log(`Party Time: ENABLED`);
  } else {
    $("a").removeClass("partyTime");
    $("a").prevAll().removeClass("partyTime");
    $("img").removeClass("partyBorder");
    $("img").prevAll().removeClass("partyBorder");
    partyTimeToggle = false;
    console.log(`Party Time: DIASBLED`);
  }
}