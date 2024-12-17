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
      newImg.src = "../images/vang-to-1.png";
      break;
    case "yl2":
      newImg.src = "../images/vang-to-2.png";
      break;
    case "yl3":
      newImg.src = "../images/vang-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  const data = {
    yl1: {
      src: "../images/vang-to-1.png",
      numberSrc: "../images/yl-01.png",
      nlSrc1: "../images/taoxanh.png",
      nlSrc2: "../images/chanh.png",
      nlSrc3: "../images/chanh.png",
      title: "YELLOW 1",
      bg: "#FAC010",
      price: "45.000",
    },
    yl2: {
      src: "../images/vang-to-2.png",
      numberSrc: "../images/yl-02.png",
      nlSrc1: "../images/xoai.png",
      nlSrc2: "../images/chanh.png",
      nlSrc3: "../images/chanh.png",
      title: "YELLOW 2",
      bg: "#FA7D10",
      price: "50.000",
    },
    yl3: {
      src: "../images/vang-to-3.png",
      numberSrc: "../images/yl-03.png",
      nlSrc1: "../images/chanh.png",
      nlSrc2: "../images/nghe.png",
      nlSrc3: "../images/chanh.png",
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
      newImg.src = "../images/hong-to-1.png";
      break;
    case "pink2":
      newImg.src = "../images/hong-to-2.png";
      break;
    case "pink3":
      newImg.src = "../images/hong-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  const data = {
    pink1: {
      src: "../images/hong-to-1.png",
      numberSrc: "../images/red-01.png",
      nlSrc1: "../images/buoihong.png",
      nlSrc2: "../images/nhadam.png",
      nlSrc3: "../images/bacha.png",
      title: "RED 1",
      bg: "#F79F9F",
      price: "45.000",
    },
    pink2: {
      src: "../images/hong-to-2.png",
      numberSrc: "../images/red-02.png",
      nlSrc1: "../images/dau.png",
      nlSrc2: "../images/chanh.png",
      nlSrc3: "../images/hungque.png",
      title: "RED 2",
      bg: "#EA6C6C",
      price: "50.000",
    },
    pink3: {
      src: "../images/hong-to-3.png",
      numberSrc: "../images/red-03.png",
      nlSrc1: "../images/apple.png",
      nlSrc2: "../images/nghe.png",
      nlSrc3: "../images/gung.png",
      title: "RED 3",
      bg: "#E35353",
      price: "55.000",
    },
  };

  newImg.id = "pink-banner"; // Giữ nguyên ID để thay thế chính xác
  banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới

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
      newImg.src = "../images/xanh-to-1.png";
      break;
    case "green2":
      newImg.src = "../images/xanh-to-2.png";
      break;
    case "green3":
      newImg.src = "../images/xanh-to-3.png";
      break;
    default:
      console.warn("Invalid name:", name);
      return;
  }

  newImg.id = "green-banner"; // Giữ nguyên ID để thay thế chính xác
  banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới

  const data = {
    green1: {
      src: "../images/xanh-to-1.png",
      numberSrc: "../images/green-01.png",
      nlSrc1: "../images/dua.png",
      nlSrc2: "../images/duachuot.png",
      nlSrc3: "../images/bacha.png",
      title: "RED 1",
      bg: "#489932",
      price: "45.000",
    },
    green2: {
      src: "../images/xanh-to-2.png",
      numberSrc: "../images/green-02.png",
      nlSrc1: "../images/taoxanh.png",
      nlSrc2: "../images/duachuot.png",
      nlSrc3: "../images/hungque.png",
      title: "RED 2",
      bg: "#7BD063",
      price: "50.000",
    },
    green3: {
      src: "../images/xanh-to-3.png",
      numberSrc: "../images/green-03.png",
      nlSrc1: "../images/cantay.png",
      nlSrc2: "../images/chanh.png",
      nlSrc3: "../images/gung.png",
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
// Get all cart items
const getCartItems = () => {
  const items = [];
  const cartItems = document.querySelectorAll('.cart-order > .d-flex:not(.justify-content-end)');
  
  cartItems.forEach(item => {
      const priceElement = item.querySelector('.text-end .cart-for-you');
      const quantityElement = item.querySelector('.cart-add[style="background-color: transparent"]');
      
      if (priceElement && quantityElement) {
          const price = parseInt(priceElement.textContent.trim().replace(/\./g, ''));
          const quantity = parseInt(quantityElement.textContent.trim());
          items.push({
              price: price,
              quantity: quantity
          });
      }
  });
  
  return items;
};

document.addEventListener('DOMContentLoaded', function() {
    const ratingOverlay = document.getElementById('ratingOverlay');
    const stars = document.querySelectorAll('.star');
    const cancelBtn = document.querySelector('.cancel-btn');
    const submitBtn = document.querySelector('.submit-btn');
    let currentRating = 0;

    // Function to show popup
    function showRatingPopup() {
        ratingOverlay.classList.remove('hidden');
    }

    // Function to hide popup
    function hideRatingPopup() {
        ratingOverlay.classList.add('hidden');
        resetRating();
    }

    // Function to reset rating
    function resetRating() {
        currentRating = 0;
        stars.forEach(star => star.classList.remove('active'));
        document.querySelector('textarea').value = '';
    }

    // Handle star hover and click
    stars.forEach(star => {
        // Mouse enter event
        star.addEventListener('mouseover', function() {
            const rating = this.dataset.rating;
            highlightStars(rating);
        });

        // Mouse leave event
        star.addEventListener('mouseout', function() {
            highlightStars(currentRating);
        });

        // Click event
        star.addEventListener('click', function() {
            currentRating = this.dataset.rating;
            highlightStars(currentRating);
        });
    });

    // Function to highlight stars
    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.dataset.rating;
            if (starRating <= rating) {
                star.classList.add('active');
                star.textContent = '★';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
    }

    // Handle cancel button click
    cancelBtn.addEventListener('click', hideRatingPopup);

    // Handle submit button click
    submitBtn.addEventListener('click', function() {
        const review = document.querySelector('textarea').value;
        if (currentRating === 0) {
            alert('Vui lòng chọn số sao đánh giá!');
            return;
        }
        
        // Here you can handle the submission of rating and review
        console.log('Rating:', currentRating);
        console.log('Review:', review);
        
        alert('Cảm ơn bạn đã đánh giá!');
        hideRatingPopup();
    });

    // Show popup when needed (you can trigger this function wherever you want)
    // For example:
    // document.querySelector('#showRatingBtn').addEventListener('click', showRatingPopup);
});

// Đảm bảo popup không tự động hiện khi tải trang
document.addEventListener('DOMContentLoaded', function() {
  const ratingOverlay = document.getElementById('ratingOverlay');
  const stars = document.querySelectorAll('.star');
  const cancelBtn = document.querySelector('.cancel-btn');
  const submitBtn = document.querySelector('.submit-btn');
  let currentRating = 0;

  // Thêm sự kiện click cho tất cả các phần tử có class .vietdanhgia
  const ratingTriggers = document.querySelectorAll('.vietdanhgia');
  ratingTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(event) {
          event.preventDefault(); // Ngăn chặn hành vi mặc định
          showRatingPopup();
      });
  });

  // Hàm hiển thị popup
  function showRatingPopup() {
      // Đảm bảo loại bỏ class hidden để hiển thị popup
      ratingOverlay.classList.remove('hidden');
  }

  // Hàm ẩn popup
  function hideRatingPopup() {
      ratingOverlay.classList.add('hidden');
      resetRating();
  }

  // Hàm đặt lại đánh giá
  function resetRating() {
      currentRating = 0;
      stars.forEach(star => {
          star.classList.remove('active');
          star.textContent = '☆';
      });
      document.querySelector('textarea').value = '';
  }

  // Xử lý hover và click sao
  stars.forEach(star => {
      star.addEventListener('mouseover', function() {
          const rating = this.dataset.rating;
          highlightStars(rating);
      });

      star.addEventListener('mouseout', function() {
          highlightStars(currentRating);
      });

      star.addEventListener('click', function() {
          currentRating = this.dataset.rating;
          highlightStars(currentRating);
      });
  });

  // Hàm tô sáng sao
  function highlightStars(rating) {
      stars.forEach(star => {
          const starRating = star.dataset.rating;
          if (starRating <= rating) {
              star.classList.add('active');
              star.textContent = '★';
          } else {
              star.classList.remove('active');
              star.textContent = '☆';
          }
      });
  }

  // Sự kiện nút hủy
  cancelBtn.addEventListener('click', hideRatingPopup);

  // Sự kiện nút gửi
  submitBtn.addEventListener('click', function() {
      const review = document.querySelector('textarea').value;
      
      if (currentRating === 0) {
          alert('Vui lòng chọn số sao đánh giá!');
          return;
      }

      // Xử lý gửi đánh giá (ví dụ)
      console.log('Đánh giá:', currentRating);
      console.log('Nhận xét:', review);
      
      alert('Cảm ơn bạn đã đánh giá!');
      hideRatingPopup();
  });

  // Đảm bảo popup ban đầu bị ẩn
  ratingOverlay.classList.add('hidden');
});


 /// JavaScript for handling the voucher popup
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const voucherOverlay = document.getElementById('voucherOverlay');
  const skipButton = document.querySelector('.skip-btn'); // Updated selector to match skip-btn class
  
  // Function to show popup
  function showPopup() {
      voucherOverlay.classList.remove('hidden');
  }
  
  // Function to hide popup
  function hidePopup() {
      voucherOverlay.classList.add('hidden');
      // Also add display: none to ensure it's hidden
      voucherOverlay.style.display = 'none';
  }
  
  // Close popup when clicking the skip button
  if (skipButton) {
      skipButton.addEventListener('click', hidePopup);
      console.log('Skip button found and event listener added');
  } else {
      console.log('Skip button not found');
  }
  
  // Close popup when clicking outside the voucher container
  voucherOverlay.addEventListener('click', function(e) {
      if (e.target === voucherOverlay) {
          hidePopup();
      }
  });
  
  // Show popup immediately when page loads
  showPopup();
  
  // Log for debugging
  console.log('Popup script initialized');
});

// Alternative approach using direct onclick handler
document.querySelector('.skip-btn')?.addEventListener('click', function() {
  const overlay = document.getElementById('voucherOverlay');
  if (overlay) {
      overlay.style.display = 'none';
  }
  console.log('Skip button clicked');
});

// Tính tổng
const calculateTotal = () => {
  const items = getCartItems();
  let total = 0;
  
  // Tinh tổng bằng cách nhân số lượng
  items.forEach(item => {
      total += item.price * item.quantity;
  });
  
  // Bỏ chấm
  const formattedTotal = total.toLocaleString('vi-VN').replace(/,/g, '.');
  
  // (Tổng tiền hàng)
  const subtotalElement = document.querySelector('.cart-order-sum .d-flex:nth-child(2) .value');
  if (subtotalElement) {
      subtotalElement.textContent = formattedTotal;
  }
  
  // Sau khi trừ các khoản
  const discount = parseInt(document.querySelector('.cart-order-sum .d-flex:nth-child(3) .value').textContent.replace(/\./g, '').replace(/-/, '')) || 0;
  const shipping = parseInt(document.querySelector('.cart-order-sum .d-flex:nth-child(4) .value').textContent.replace(/\./g, '')) || 0;
  
  const finalTotal = total - discount + shipping;
  const formattedFinalTotal = finalTotal.toLocaleString('vi-VN').replace(/,/g, '.');
  
  // (Tổng thanh toán)
  const finalTotalElement = document.querySelector('.cart-order-sum .d-flex:last-child .value');
  if (finalTotalElement) {
      finalTotalElement.textContent = formattedFinalTotal;
  }
  
  return total;
};

// Chỉnh sửa nếu thanh đổi số lượng
const handleQuantityChange = (button) => {
  const quantitySpan = button.parentElement.querySelector('[style="background-color: transparent"]');
  let quantity = parseInt(quantitySpan.textContent);
  
  if (button.textContent === '+') {
      quantity++;
  } else if (button.textContent === '-' && quantity > 1) {
      quantity--;
  }
  
  quantitySpan.textContent = quantity;
  calculateTotal();
};

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initial calculation
  calculateTotal();
  
  // Add click handlers for quantity buttons
  document.querySelectorAll('.cart-add').forEach(button => {
      if (button.textContent === '+' || button.textContent === '-') {
          button.addEventListener('click', () => handleQuantityChange(button));
      }
  });
});

// Log for debugging
console.log('Cart Items:', getCartItems());

document.addEventListener('DOMContentLoaded', function() {
  // Tìm tất cả các sản phẩm trong giỏ hàng
  const cartItems = document.querySelectorAll('.cart-order > .d-flex.justify-content-between');

  cartItems.forEach(item => {
      // Tạo nút xóa mới
      const deleteButton = document.createElement('div');
      deleteButton.innerHTML = '<img width="12px" src="../images/delete.png" alt="Xóa" />';
      deleteButton.classList.add('delete-item');
      deleteButton.style.cursor = 'pointer';

      // Thêm nút xóa vào phần cuối của mỗi sản phẩm
      const priceSection = item.querySelector('.text-end');
      priceSection.appendChild(deleteButton);

      // Thêm sự kiện click cho nút xóa
      deleteButton.addEventListener('click', function() {
          // Xóa sản phẩm khỏi giỏ hàng
          item.remove();

          // Cập nhật tổng giá trị đơn hàng
          updateCartTotal();
      });
  });

  // Hàm cập nhật tổng giá trị đơn hàng
  function updateCartTotal() {
      const remainingItems = document.querySelectorAll('.cart-order > .d-flex.justify-content-between');
      let totalPrice = 0;

      // Tính tổng giá sản phẩm
      remainingItems.forEach(item => {
          const priceElement = item.querySelector('.cart-for-you[style="font-size: 15px"]');
          if (priceElement) {
              const price = parseFloat(priceElement.textContent.replace(/\./g, ''));
              totalPrice += price;
          }
      });

      // Cập nhật các giá trị trong phần tổng đơn hàng
      const tongTienHangElement = document.querySelector('.cart-order-sum .d-flex .value');
      const tongThanhToanElement = document.querySelector('.cart-order-sum .d-flex .value:last-child');

      if (tongTienHangElement && tongThanhToanElement) {
          tongTienHangElement.textContent = totalPrice.toLocaleString();

          // Giả sử các chi phí khác như giảm giá và phí vận chuyển không thay đổi
          const giamGiaValue = parseFloat(document.querySelector('.cart-order-sum .d-flex .value[style="color: #f33"]').textContent.replace(/\./g, ''));
          const phiVanChuyenValue = parseFloat(document.querySelector('.cart-order-sum .d-flex .value:nth-child(2)').textContent.replace(/\./g, ''));

          const tongThanhToan = totalPrice - Math.abs(giamGiaValue) + phiVanChuyenValue;
          tongThanhToanElement.textContent = tongThanhToan.toLocaleString();
      }

      // Cập nhật số lượng sản phẩm trong giỏ hàng trên menu
      updateCartItemCount();
  }

  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
  function updateCartItemCount() {
      const remainingItems = document.querySelectorAll('.cart-order > .d-flex.justify-content-between');
      const cartLink = document.querySelector('.nav-link.cart');

      if (cartLink && remainingItems) {
          cartLink.textContent = CART(${remainingItems.length});
      }
  }

  // Xử lý chức năng tăng/giảm số lượng sản phẩm
  const cartAddButtons = document.querySelectorAll('.cart-add');
  cartAddButtons.forEach(button => {
      button.addEventListener('click', function() {
          const quantityElement = this.parentElement.querySelector('.cart-add[style="background-color: transparent"]');
          let quantity = parseInt(quantityElement.textContent);

          if (this.textContent === '+') {
              quantity++;
          } else if (this.textContent === '-' && quantity > 1) {
              quantity--;
          }

          quantityElement.textContent = quantity;
          updateCartTotal();
      });
  });
});