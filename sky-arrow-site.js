// 隱藏資訊安紐
function itemVisible(visible, ...props) {
  props.map((item) => {
    item.setAttribute("visible", visible);
  });
}

function changeSkyArrow(img) {
  var mySky = document.querySelector("#my-sky");
  mySky.setAttribute("src", img);
  // door
  var doorArrow = document.querySelector("#door-arrow");
  //  porch
  var porchArrow = document.querySelector("#porch-arrow");
  porchArrow.classList.remove("clickable");
  porchArrow.setAttribute("visible", false);
  // meeting
  var meetingArrow = document.querySelector("#meeting-arrow");
  meetingArrow.classList.remove("clickable");
  meetingArrow.setAttribute("visible", false);

  function callItemVisible(visibleBoolean) {
    itemVisible(
      visibleBoolean,
      bikeInfo,
      motorInfo,
      ledInfo,
      medicalInfo,
      tireInfo,
      miniledInfo,
      electricInfo,
      speakerInfo,
      lensInfo,
      communicationInfo
    );
  }

  switch (img) {
    case "#administrative":
      // door 的 change-site="img:#administrative" 變成  change-site="img:#door"
      doorArrow.classList.add("clickable");
      doorArrow.setAttribute("change-site", "img: #door");
      doorArrow.setAttribute("rotation", "0 90 0");
      doorArrow.setAttribute("position", "0 -2 -15");
      // porch
      porchArrow.classList.add("clickable");
      porchArrow.setAttribute("visible", true);

      //   // info
      callItemVisible(false);
      break;
    case "#porch":
      // door 的箭頭當成回administrative的箭頭
      doorArrow.classList.add("clickable");
      doorArrow.setAttribute("visible", true);
      doorArrow.setAttribute("change-site", "img:#administrative");
      doorArrow.setAttribute("rotation", "0 55 0");
      doorArrow.setAttribute("position", "9.305 -7.33 -15");

      // porch
      porchArrow.setAttribute("visible", false);
      porchArrow.classList.remove("clickable");

      // meeting
      meetingArrow.setAttribute("visible", true);
      meetingArrow.classList.add("clickable");
      meetingArrow.setAttribute("change-site", "img:#meeting");

      //   // info
      callItemVisible(false);
      break;
    case "#meeting":
      // door
      doorArrow.classList.remove("clickable");
      doorArrow.setAttribute("visible", false);

      // porch
      porchArrow.classList.remove("clickable");

      //meeting
      meetingArrow.setAttribute("visible", true);
      meetingArrow.classList.add("clickable");
      meetingArrow.setAttribute("change-site", "img:#porch");

      //   // info
      callItemVisible(true);
      break;
    default:
      // door
      doorArrow.classList.add("clickable");
      doorArrow.setAttribute("change-site", "img:#administrative");
      doorArrow.setAttribute("rotation", "0 90 0");
      doorArrow.setAttribute("position", "0 -2 -15");
      doorArrow.setAttribute("visible", true);
      //  porch
      porchArrow.setAttribute("visible", false);
      porchArrow.classList.remove("clickable");

      // meeting
      meetingArrow.setAttribute("visible", false);
      meetingArrow.classList.remove("clickable");

      //   // info
      callItemVisible(false);
      break;
  }
}

function infoClick(item, index) {
  function menu(openMenu, doms) {
    openMenu.style.display = "flex";
    doms.map((dom) => (dom.style.display="none"));
  }
  let doms = [
    bikeMenu,
    motorMenu,
    ledMenu,
    medicalMenu,
    tireMenu,
    miniledMenu,
    electricMenu,
    speakerMenu,
    lensMenu,
    communicationMenu,
  ];
  let nowDom = doms.splice(index,1)[0]
  switch (item) {
    case ".bike-info":
      menu(nowDom,doms)    
      break;
    case ".motor-info":
      menu(nowDom,doms)
      break;
    case ".led-info":
      menu(nowDom,doms)    
      break;
    case ".medical-info":
      menu(nowDom,doms)    
      break;
    case ".tire-info":
      menu(nowDom,doms)   
      break;
    case ".miniled-info":
      menu(nowDom,doms)   
      break;
    case ".electric-info":
      menu(nowDom,doms)    
      break;
    case ".speaker-info":
      menu(nowDom,doms)   
      break;
    case ".lens-info":
      menu(nowDom,doms)    
      break;
    case ".communication-info":
      menu(nowDom,doms)    
      break;
    default:
      break;
  }
}

function itemLeave() {
  function mouseLeave(...props) {
    props.map((item) => {
      item.setAttribute("scale", "0.1 0.1 0.1");
    });
  }
  mouseLeave(
    bikeInfo,
    motorInfo,
    ledInfo,
    medicalInfo,
    tireInfo,
    miniledInfo,
    electricInfo,
    speakerInfo,
    lensInfo,
    communicationInfo
  );
}
function itemEnter(item) {

  function mouseEnter(itemEnter) {
    itemEnter.setAttribute("scale", "0.15 0.15 0.15");
  }
  switch (item) {
    case ".bike-info":
      mouseEnter(bikeInfo);
      break;
    case ".motor-info":
      mouseEnter(motorInfo);
      break;
    case ".led-info":
      mouseEnter(ledInfo);
      break;
    case ".medical-info":
      mouseEnter(medicalInfo);
      break;
    case ".tire-info":
      mouseEnter(tireInfo);
      break;
    case ".miniled-info":
      mouseEnter(miniledInfo);
      break;
    case ".electric-info":
      mouseEnter(electricInfo);
      break;
    case ".speaker-info":
      mouseEnter(speakerInfo);
      break;
    case ".lens-info":
      mouseEnter(lensInfo);
      break;
    case ".communication-info":
      mouseEnter(communicationInfo);
      break;
    default:
      break;
  }
}
