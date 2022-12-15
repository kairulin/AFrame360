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
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    // 點擊資訊
    el.addEventListener("click", function () {
      infoClick(data.data,data.index);
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
