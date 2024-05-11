const url = "./data.json";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`ошибка - ${error}`);
  }
}

const data = await fetchData(url);
console.log(data);

const wrapper = document.querySelector(".container-items");
data.forEach((element) => {
  wrapper.insertAdjacentHTML(
    "beforeend",
    `
    <div class="list-items__item">
        <div class="item__img" style="background-image: url('${element.image}')">
            <div class="item__img_blackout">
                <button>Add to Cart</button>
            </div>
        </div>
        <div class="item__description">
            <h3>${element.description}</h3>
            <p>
                ${element.title}
            </p>
            <span>$ ${element.price}.00</span>
        </div>
    </div>
    `
  );
});
