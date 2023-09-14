//========================================================================================================================================================================
//====================================================COUNTER====================================================================================================================
//========================================================================================================================================================================
window.addEventListener("click", function (event) {
  let count;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const countWrapper = document.querySelector(".productCard__type_equal");
    count = countWrapper.querySelector("[data-counter]");

    if (event.target.dataset.action === "plus") {
      if (parseInt(count.innerText) < 20) {
        count.innerText++;
      }
    }

    if (event.target.dataset.action === "minus") {
      if (parseInt(count.innerText) > 1) {
        count.innerText--;
      }
    }
  }
});
//========================================================================================================================================================================
//====================================================PRODUCT CARD====================================================================================================================
//========================================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("productId");

  const products = {
    1: {
      name: "URBAN LUX HIGH CHAIR",
      image: "./img/script1.png",
      price: "$2668.15",
    },
    2: {
      name: "MORDERN BLACK HANGING LIGHT",
      image: "./img/script2.png",
      price: "$1595.6",
    },
    3: {
      name: "METRO FUSION TABLE",
      image: "./img/script3.png",
      price: "$2238.30",
    },
    4: {
      name: "LUMIN DESK LAMP",
      image: "./img/script4.png",
      price: "$1477.80",
    },
    5: {
      name: "TIMELESS EDGE HANGING CLOCK",
      image: "./img/script5-1.png",
      price: "$1071.6",
    },
    6: {
      name: "ZENITH PENDANT LIGHT",
      image: "./img/script6.png",
      price: "$2069.59",
    },
    7: {
      name: "URBAN LUX HIGH CHAI",
      image: "./img/script7.png",
      price: "$2668.15",
    },
    8: {
      name: "METRO FUSION TABLE",
      image: "./img/script8.png",
      price: "$2238.30",
    },
    9: {
      name: "MORDERN BLACK HANGING LIGHT",
      image: "./img/script2.png",
      price: "$1595.6",
    },
    10: {
      name: "METRO FUSION TABLE",
      image: "./img/script3.png",
      price: "$2238.30",
    },
  };

  const productInfo = products[productId];

  if (productInfo) {
    document.getElementById("productName").textContent = productInfo.name;
    document.querySelector(".breadcrumbs__current").textContent =
      productInfo.name;
    document.getElementById("productPrice").textContent = productInfo.price;
    // document.getElementById("productImage").src = productInfo.image;
    document.querySelectorAll(".goods__img img").forEach((element) => {
      element.src = productInfo.image;
    });
    document.querySelectorAll(".goods__mini-img img").forEach((element) => {
      element.src = productInfo.image;
    });
  }
});
