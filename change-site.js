AFRAME.registerComponent("change-site", {
  schema: {
    img: { type: "string" },
  },
  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function () {
      changeSkyArrow(data.img);
    });
  },
});

AFRAME.registerComponent("call-info", {
  schema: {
    data: { type: "string" },
    index: { type: "number" },
    btn: { type: "string" },
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    // 點擊資訊
    var openInfo = document.querySelector(data.data);
    var infoBtn = document.querySelector(data.btn);

    el.addEventListener("click", function () {
      openInfo.setAttribute("visible", true);
      infoBtn.classList.add("clickable");
      // infoClick(data.data,data.index);
    });
    // 滑入放大
    el.addEventListener("mouseenter", function () {
      itemEnter(data.data);
    });
    //離開縮小
    el.addEventListener("mouseleave", function () {
      itemLeave();
    });
  },
});

AFRAME.registerComponent("close-info-btn", {
  schema: {
    data: { type: "string" },
  },
  init: function () {
    var data = this.data;
    var el = this.el;

    var infos = document.querySelectorAll("#infomation");
    var btn = document.querySelector(data.data);
    el.addEventListener("click", function () {
      infos.forEach(info=>info.setAttribute("visible", false));
      btn.classList.remove("clickable");
    });
  },
});
