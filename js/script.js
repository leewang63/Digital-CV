// hàm xác nhận email
function handleSubmit() {
  //điều kiện là t email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //lấy giá trị thẻ input
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //lấy elemant p để hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  //lấy element info-list
  const infoList = document.querySelector("#personal-info .info-list");
  //lấy element submit-email
  const submitEmail = document.querySelector("#personal-info .submit-email");
  //kiểm tra giá trị input có phải một email?
  const check = emailValue.match(regex);
  if (check) {
    infoList.style.display = "block";
    submitEmail.style.display = "none";
  } else {
    errorEmail.textContent = "Vui lòng nhập đúng định dạng email";
  }
  /* console.log(emailValue); */
  /* console.log(check); */
}

//hàm hiển thị viewmore  khi di chuyển chuột vào
let mediaTablet = window.matchMedia("screen and (max-width: 992px)");
let mediaMobile = window.matchMedia("screen and (max-width: 576px)");
/* console.log(mediaMobile.matches);
console.log(mediaTablet.matches); */

function handleMouseOver(element) {
  if (mediaMobile.matches === false && mediaTablet.matches == false) {
    const viewMore = element.querySelector(".viewmore");
    viewMore.style.display = "block";
  }
}

//hàm ẩn viewmore khi di chuột ra khỏi element
function handleMouseOut(element) {
  if (mediaMobile.matches === false && mediaTablet.matches == false) {
    const viewMore = element.querySelector(".viewmore");
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const sectionParent = element.closest(".parent");
  const sectionContent = sectionParent.querySelector(".section-content");
  const viewmore = sectionParent.querySelector(".viewmore");
  if (viewmore.textContent == "View More") {
    sectionContent.style.display = "block";
    viewmore.textContent = "View Less";
  } else {
    sectionContent.style.display = "none";
    viewmore.textContent = "View More";
  }
}
