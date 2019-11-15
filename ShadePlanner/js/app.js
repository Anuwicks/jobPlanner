class UI {
  constructor() {
    this.marqueeFeedback = document.querySelector(".marquee-feedback");
    this.marqueeForm = document.getElementById("marquee-form");
    this.marquee33Input = document.getElementById("3x3-input");
    this.marquee36Input = document.getElementById("3x6-input");
    this.marquee66Input = document.getElementById("6x6-input");
    this.marquee34Input = document.getElementById("3x4.5-input");
    this.marquee64Input = document.getElementById("6x4.5-input");

    this.weightCount4 = document.getElementById("4wt-count");
    this.weightCount5 = document.getElementById("5wt-count");
    this.stillCount4 = document.getElementById("4wt-stil");
    this.stillCount5 = document.getElementById("5wt-stil");

    this.wallCount3 = document.getElementById("3m-wall");
    this.wallCount6 = document.getElementById("6m-wall");
    this.bundleCount3 = document.getElementById("3m-bundle");
    this.bundleCount6 = document.getElementById("6m-bundle");

    this.frontWall3 = document.getElementById("3m-front");
    this.frontWall6 = document.getElementById("6m-front");
    this.frontwall4 = document.getElementById("4m-front");
    this.frontBundle3 = document.getElementById("3m-front-bundle");
    this.frontBundle6 = document.getElementById("6m-front-bundle");

    this.itemList = [];
    this.itemID = 0;
  }
  submitMarqueeForm() {
    var value33 = this.marquee33Input.value;
    var value36 = this.marquee36Input.value;
    var value66 = this.marquee66Input.value;
    var value34 = this.marquee34Input.value;
    var value64 = this.marquee64Input.value;

    var marqueeBreakdown = [value33, value36, value66, value34, value64];

    if (checkMarqueeInput(marqueeBreakdown) === false) {
      this.marqueeFeedback.classList.add("showItem");
      this.marqueeFeedback.innerHTML = `<p> wtf is a negative marquee? </p>`;
      const self = this;
      setTimeout(function() {
        self.marqueeFeedback.classList.remove("showItem");
      }, 4000);
    } else {
      marqueeBreakdown = checkMarqueeInput(marqueeBreakdown);
      const a = marqueeBreakdown[0];
      const b = marqueeBreakdown[1];
      const c = marqueeBreakdown[2];
      const d = marqueeBreakdown[3];
      const e = marqueeBreakdown[4];

      var walls6m = a + 2 * b + 3 * c + 2 * e;
      this.wallCount6.textContent = walls6m;

      var walls3m = a + 2 * d;
      this.wallCount3.textContent = walls3m;

      var walls45m = 2 * d + 2 * e;

      var bundles6m = walls6m / 5;
      this.bundleCount6.textContent = Math.ceil(bundles6m);

      var bundles3m = walls3m / 10;
      this.bundleCount3.textContent = Math.ceil(bundles3m);

      var frontWalls6m = a + 2 * b + 3 * c + 2 * e;
      this.frontWall6.textContent = frontWalls6m;

      var frontWalls3m = 2 * a + 2 * b + 2 * c + 2 * d;
      this.frontWall3.textContent = frontWalls3m;

      var frontWalls4m = 2 * d + 2 * e;
      this.frontwall4.textContent = frontWalls4m;

      var frontBundles6m = frontWalls6m / 5;
      this.frontBundle6.textContent = Math.ceil(frontBundles6m);

      var frontBundles3m = frontWalls3m / 10;
      this.frontBundle3.textContent = Math.ceil(frontBundles3m);

      var weights4 = 16 * a + 24 * b + 32 * c + 16 * d + 24 * e;
      this.weightCount4.textContent = weights4;

      var still4 = weights4 / 56;
      still4 = still4.toFixed(1);
      this.stillCount4.textContent = still4;

      var weights5 = 20 * a + 30 * b + 40 * c + 20 * d + 30 * e;
      this.weightCount5.textContent = weights5;

      var still5 = weights5 / 56;
      still5 = still5.toFixed(1);
      this.stillCount5.textContent = still5;
    }
  }
}

function eventListeners() {
  const marqueeForm = document.getElementById("marquee-form");

  const ui = new UI();

  marqueeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    ui.submitMarqueeForm();
  });
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});

function checkMarqueeInput(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = 0;
    }
    if (array[i] < 0) {
      return false;
    } else {
      array[i] = parseInt(array[i]);
    }
  }
  return array;
}
