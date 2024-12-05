function handleYellow(name) {
  const banner = document.getElementById("yl-banner");
  const numberImg = document.getElementById("yl-number");
  const nguyenlieuendImg1 = document.getElementById("nguyenlieuend1");
  const nguyenlieuendImg2 = document.getElementById("nguyenlieuend2");
  const nguyenlieuendImg3 = document.getElementById("nguyenlieuend3");
  const title = document.getElementById("yl-title");
  const price = document.getElementById("yl-price");

  if (!banner) {
    console.error("Banner element not found!");
    return;
  }

  // Tạo một phần tử img mới
  const newImg = document.createElement("img");

  switch (name) {
    case "yl1":
      newImg.src = "images/vang-to-1.png";
      break;
    case "yl2":
      newImg.src = "images/vang-to-2.png";
      break;
    case "yl3":
      newImg.src = "images/vang-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  const data = {
    yl1: {
      src: "images/vang-to-1.png",
      numberSrc: "images/yl-01.png",
      nlSrc1: "images/taoxanh.png",
      nlSrc2: "images/chanh.png",
      nlSrc3: "images/chanh.png",
      title: "YELLOW 1",
      bg: "#FAC010",
      price: "45.000",
    },
    yl2: {
      src: "images/vang-to-2.png",
      numberSrc: "images/yl-02.png",
      nlSrc1: "images/xoai.png",
      nlSrc2: "images/chanh.png",
      nlSrc3: "images/chanh.png",
      title: "YELLOW 2",
      bg: "#FA7D10",
      price: "50.000",
    },
    yl3: {
      src: "images/vang-to-3.png",
      numberSrc: "images/yl-03.png",
      nlSrc1: "images/chanh.png",
      nlSrc2: "images/nghe.png",
      nlSrc3: "images/chanh.png",
      title: "YELLOW 3",
      bg: "#FFBE44",
      price: "55.000",
    },
  };

  // Kiểm tra nếu name hợp lệ
  const selectedData = data[name];
  if (!selectedData) {
    console.warn("Invalid name:", name);
    return;
  }
  // Tạo một phần tử img mới
  newImg.id = "yl-banner"; // Giữ nguyên ID để thay thế chính xác
  banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới
  banner.src = selectedData.src;
  numberImg.src = selectedData.numberSrc;
  nguyenlieuendImg1.src = selectedData.nlSrc1;
  nguyenlieuendImg2.src = selectedData.nlSrc2;
  nguyenlieuendImg3.src = selectedData.nlSrc3;
  title.innerText = selectedData.title;
  title.style.background = selectedData.bg;
  price.innerText = selectedData.price;
}

function handlePink(name) {
  const banner = document.getElementById("pink-banner");
  const numberImg = document.getElementById("hong-number");
  const nguyenlieuendImg1 = document.getElementById("nguyenlieured1");
  const nguyenlieuendImg2 = document.getElementById("nguyenlieured2");
  const nguyenlieuendImg3 = document.getElementById("nguyenlieured3");
  const title = document.getElementById("hong-title");
  const price = document.getElementById("hong-price");

  if (!banner) {
    console.error("Banner element not found!");
    return;
  }

  // Tạo một phần tử img mới
  const newImg = document.createElement("img");

  switch (name) {
    case "pink1":
      newImg.src = "images/hong-to-1.png";
      break;
    case "pink2":
      newImg.src = "images/hong-to-2.png";
      break;
    case "pink3":
      newImg.src = "images/hong-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  const data = {
    pink1: {
      src: "images/hong-to-1.png",
      numberSrc: "images/red-01.png",
      nlSrc1: "images/buoihong.png",
      nlSrc2: "images/nhadam.png",
      nlSrc3: "images/bacha.png",
      title: "RED 1",
      bg: "#F79F9F",
      price: "45.000",
    },
    pink2: {
      src: "images/hong-to-2.png",
      numberSrc: "images/red-02.png",
      nlSrc1: "images/dau.png",
      nlSrc2: "images/chanh.png",
      nlSrc3: "images/hungque.png",
      title: "RED 2",
      bg: "#EA6C6C",
      price: "50.000",
    },
    pink3: {
      src: "images/hong-to-3.png",
      numberSrc: "images/red-03.png",
      nlSrc1: "images/apple.png",
      nlSrc2: "images/nghe.png",
      nlSrc3: "images/gung.png",
      nlSrc4: "images/taoxanh.png", // Thêm phần tử nguyên liệu mới
      title: "RED 3",
      bg: "#E35353",
      price: "55.000",
    },
  };

  // Kiểm tra nếu name hợp lệ
  const selectedData = data[name];
  if (!selectedData) {
    console.warn("Invalid name:", name);
    return;
  }

  numberImg.src = selectedData.numberSrc;
  nguyenlieuendImg1.src = selectedData.nlSrc1;
  nguyenlieuendImg2.src = selectedData.nlSrc2;
  nguyenlieuendImg3.src = selectedData.nlSrc3;
  title.innerText = selectedData.title;
  title.style.background = selectedData.bg;
  price.innerText = selectedData.price;

  // Xóa phần tử nguyên liệu mới nếu không phải là pink3
  const existingNewIngredient = document.getElementById("nguyenlieured4-container");
  if (existingNewIngredient) {
    existingNewIngredient.remove();
  }

  // Thêm phần tử nguyên liệu mới nếu là pink3
  if (name === "pink3") {
    const newIngredient = document.createElement("div");
    newIngredient.className = "rl-r-b-col";
    newIngredient.id = "nguyenlieured4-container";
    newIngredient.innerHTML = `
      <div class="rl-r-b-item position-relative">
        <img src="images/rl-1.png" />
        <div class="label">Táo xanh</div>
        <div class="value">Yellow là dòng nước ép chiết xuất từ các loại trái cây và rau củ như cà rốt, dứa</div>
        <div class="text-end">
          <img id="nguyenlieured4" src="${selectedData.nlSrc4}" />
        </div>
      </div>
    `;
    document.querySelector(".rl-r-b-row").appendChild(newIngredient);
  }
}
function handleGreen(name) {
  const banner = document.getElementById("green-banner");
  const numberImg = document.getElementById("xanh-number");
  const nguyenlieuendImg1 = document.getElementById("nguyenlieugreen1");
  const nguyenlieuendImg2 = document.getElementById("nguyenlieugreen2");
  const nguyenlieuendImg3 = document.getElementById("nguyenlieugreen3");
  const title = document.getElementById("xanh-title");
  const price = document.getElementById("xanh-price");

  if (!banner) {
    console.error("Banner element not found!");
    return;
  }

  // Tạo một phần tử img mới
  const newImg = document.createElement("img");

  switch (name) {
    case "green1":
      newImg.src = "images/xanh-to-1.png";
      break;
    case "green2":
      newImg.src = "images/xanh-to-2.png";
      break;
    case "green3":
      newImg.src = "images/xanh-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  newImg.id = "green-banner"; // Giữ nguyên ID để thay thế chính xác
  banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới

  const data = {
    green1: {
      src: "images/xanh-to-1.png",
      numberSrc: "images/green-01.png",
      nlSrc1: "images/dua.png",
      nlSrc2: "images/duachuot.png",
      nlSrc3: "images/bacha.png",
      title: "RED 1",
      bg: "#489932",
      price: "45.000",
    },
    green2: {
      src: "images/xanh-to-2.png",
      numberSrc: "images/green-02.png",
      nlSrc1: "images/taoxanh.png",
      nlSrc2: "images/duachuot.png",
      nlSrc3: "images/hungque.png",
      title: "RED 2",
      bg: "#7BD063",
      price: "50.000",
    },
    green3: {
      src: "images/xanh-to-3.png",
      numberSrc: "images/green-03.png",
      nlSrc1: "images/cantay.png",
      nlSrc2: "images/chanh.png",
      nlSrc3: "images/gung.png",
      title: "RED 3",
      bg: "#358C1D",
      price: "55.000",
    },
  };

  // Kiểm tra nếu name hợp lệ
  const selectedData = data[name];
  if (!selectedData) {
    console.warn("Invalid name:", name);
    return;
  }

  numberImg.src = selectedData.numberSrc;
  nguyenlieuendImg1.src = selectedData.nlSrc1;
  nguyenlieuendImg2.src = selectedData.nlSrc2;
  nguyenlieuendImg3.src = selectedData.nlSrc3;
  title.innerText = selectedData.title;
  title.style.background = selectedData.bg;
  price.innerText = selectedData.price;
}

document.addEventListener("DOMContentLoaded", () => {
  const saleItems = document.querySelectorAll(".sale-right-item");

  saleItems.forEach((item) => {
    const dauCong = item.querySelector(".daucong");
    const content = item.querySelector(".content-text");

    // Đảm bảo chỉ ẩn nội dung văn bản, không ẩn dấu cộng
    content.style.display = "none";

    dauCong.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block"; // Mở nội dung
      } else {
        content.style.display = "none"; // Đóng nội dung
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".yl-r-b-row");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ cuộn
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".rl-r-b-row");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ cuộn
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".gl-r-b-row");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Điều chỉnh tốc độ cuộn
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});
