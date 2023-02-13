const data = JSON.parse(dataProduct);
data.forEach((element) => {
  const productFlexBox = document.createElement("div");
  productFlexBox.classList.add("product");
  productFlexBox.classList.add("flex-box");

  const productOne = document.createElement("div");
  productOne.classList.add("productOne");

  const imgProduct = document.createElement("img");
  imgProduct.classList.add("imgProduct");
  imgProduct.src = element.img;
  imgProduct.alt = "productImg";

  const productDescription = document.createElement("div");
  productDescription.classList.add("description");

  const closer = document.createElement("div");
  closer.classList.add("closer");

  const closerButton = document.createElement("img");
  closerButton.src = "Vector.png";
  closerButton.classList.add("closerButton");

  const nameProduct = document.createElement("h2");
  nameProduct.textContent = element.name;
  nameProduct.classList.add("nameProduct");

  productFlexBox.appendChild(productOne);
  productOne.appendChild(imgProduct);
  productOne.appendChild(productDescription);
  productOne.appendChild(closer);
  productDescription.appendChild(nameProduct);
  closer.appendChild(closerButton);

  const keyArray = Object.keys(element);
  const valueArray = Object.values(element);

  for (let index = 2; index < keyArray.length; index++) {
    const elementP = document.createElement("p");
    const spanEl = document.createElement("span");
    const spanValue = document.createElement("span");
    spanEl.textContent = `${keyArray[index]}: `;
    spanEl.classList.add("span");
    spanValue.textContent = valueArray[index];
    if (keyArray[index] === "Price") {
      spanValue.classList.add("price");
    }
    if (keyArray[index] === "Quantity") {
      spanValue.classList.add("quantity");
    }

    elementP.appendChild(spanEl);
    elementP.appendChild(spanValue);
    productDescription.appendChild(elementP);
  }

  document.querySelector("body").append(productFlexBox);
});
