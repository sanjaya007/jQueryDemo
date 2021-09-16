$("#toggle-btn").click(function () {
  $("#mobile-nav").animate({
    left: "0px",
    opacity: "1",
  });
});

$("#close-btn").click(function () {
  $("#mobile-nav").animate({
    left: "-100%",
    opacity: "0",
  });
});

$(".image-list").click(function () {
  $(".image-list").css({ border: "none", filter: "grayscale(80%)" });
  $(this).css("border", "5px solid #ffffff");
  $(this).css("filter", "grayscale(0%)");
  $("#image-container").attr("src", $(this).attr("src"));
  $("#count-img").text($(this).attr("data-id"));
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".scroll-top").show();
  } else {
    $(".scroll-top").hide();
  }
});

$(".question-box").click(function () {
  $(this).children(".pointer-icon").toggleClass("rotate");
  $(this).parent().children(".answer-box").slideToggle(100);
});

const btn = document.querySelector(".btn-container a");
const container = document.querySelector(".img-container");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const img = document.createElement("img");
  img.setAttribute("referrerpolicy", "no-referrer");
  img.src = "https://i.imgur.com/tkvLDAH.gif";
  img.setAttribute("class", "random-img");
  img.src = `https://picsum.photos/seed/{${Math.random()}}picsum/400/400`;
  container.appendChild(img);
});

let arr = [];
$("#select-input").change(function () {
  arr.push($(this).val());
  fetchValue();
});

const fetchValue = () => {
  document.querySelector(".social-input").value = "";
  arr.forEach((value) => {
    document.querySelector(".social-input").value += value + ", ";
  });
};

$("input[name=checkbox]").change(function () {
  $(".social-input").toggle();
});

document.querySelector(".ajax-btn").addEventListener("click", function () {
  getData();
  $(this).attr("disabled", "disabled");
  $(".table-container").show();
});

const getData = () => {
  jQuery.ajax({
    type: "GET",
    dataType: "json",
    url: "https://app.mako.systems/shopify/materials",
    success: function (data) {
      data.forEach((value) => {
        document.querySelector(".table-body").innerHTML +=
          `<tr>` +
          `<td>${value.id}</td>` +
          `<td>${value.title}</td>` +
          `<td>${value.product_type}</td>` +
          `</tr>`;
      });
    },
  });
};
