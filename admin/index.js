"use strict";
//Lấy danh sách thú cưng từ localStorage
let petList = JSON.parse(getFromStorage("petList", "[]"));
//Lấy danh sách Breed từ localStorage
let breedArr = JSON.parse(getFromStorage("breedArr", "[]"));

//Lấy các DOM element
const submitBtn = document.getElementById("submit-btn");
const healthyBtn = document.getElementById("healthy-btn");
const calculateBMIBtn = document.getElementById("calculate-bmi-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const categoryInput = document.getElementById("input-category");
const thoiluongInput = document.getElementById("input-thoiluong");
const lichchieuInput = document.getElementById("input-lichchieu");
const giaveInput = document.getElementById("input-giave");
const imgInput = document.getElementById("input-img");

const tableBodyEl = document.getElementById("tbody"); //id của thân bảng

if (tableBodyEl) {
  renderTableData(petList); //Hiển thị thông tin bảng mỗi lần tải lại trang
  // renderBreed(breedArr);
}

//Hàm validate pet data
const validatePetData = function (data) {
  //Kiểm tra dữ liệu không được bỏ trống
  if (
    !data.id ||
    !data.name ||
    !data.category ||
    !data.lichchieu ||
    !data.giave
  ) {
    alert("All fields are required!");
    return false;
  }

  //Kiểm tra ID không được trùng lặp
  if (petList.some((pet) => pet.id === data.id)) {
    //pet đại diện cho từng phẩn từ trong mảng pestList
    alert("ID must be unique!");
    return false;
  }

  return true;
};

//Hàm hiển thị danh sách thú cưng lên bảng
function renderTableData(petList) {
  // Xóa toàn bộ nội dung của bảng
  tableBodyEl.innerHTML = "";

  // Duyệt qua mảng petArr để tạo hàng cho từng thú cưng
  petList.forEach((pet) => {
    console.log("pet", pet);

    // Chuyển thuộc tính dateAdded từ chuỗi về đối tượng Date
    pet.dateAdded = new Date(pet.dateAdded);

    const row = document.createElement("tr");

    // Tạo nội dung HTML cho hàng bằng Template String
    row.innerHTML = `
        <th scope="row">${pet.id}</th>
				<td><img width="50" src="${pet.img}"/></td>
				<td>${pet.name}</td>
				<td>${pet.giave}</td>
				<td>${pet.dateAdded.getDate()}/${
      pet.dateAdded.getMonth() + 1
    }/${pet.dateAdded.getFullYear()}</td>
    `;

    // Thêm hàng vào bảng
    tableBodyEl.appendChild(row);
  });
}
