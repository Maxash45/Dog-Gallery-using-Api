let i = 0;

function newbreed(startIndex) {
  const output = document.getElementById('output');
  let req = new XMLHttpRequest();
  req.open("get", "https://api.thedogapi.com/v1/breeds");
  req.send();

  req.addEventListener("load", function (event) {
    const data = JSON.parse(event.target.responseText);
    const endIndex = Math.min(startIndex + 10, data.length);

    for (let index = startIndex; index < endIndex; index++) {
      const val = data[index];
      const new_div = document.createElement("div");
      new_div.id = "div1";

      const ulist = document.createElement("ul");
      ulist.id = "ullist";
      new_div.appendChild(ulist);

      // Check for image
      if (val.image && val.image.url) {
        const image = document.createElement("img");
        image.setAttribute("src", val.image.url);
        image.setAttribute("height", "200px");
        image.setAttribute("width", "200px");
        new_div.appendChild(image);
      }

      const item = document.createElement("li");
      item.innerText = val.name;
      new_div.appendChild(item);

      const item2 = document.createElement("li");
      item2.innerText = "Life span: " + val.life_span;
      new_div.appendChild(item2);

      const item4 = document.createElement("li");
      const colorMap = {
        "Working": "red",
        "Hound": "blue",
        "Toy": "purple",
        "Non-Sporting": "yellow",
        "Mixed": "brown",
        "Terrier": "cyan",
        "Sporting": "green",
        "Herding": "pink"
      };
      const color = colorMap[val.breed_group] || "black";
      item4.style.color = color;
      item4.innerText = "Breed Group: " + (val.breed_group || "Unknown");
      new_div.appendChild(item4);

      const item3 = document.createElement("li");
      item3.innerText = val.temperament || "No temperament listed";
      new_div.appendChild(item3);

      output.appendChild(new_div);
    }
  });
}

const button = document.querySelector(".butt");
button.addEventListener("click", function (e) {
  newbreed(i);
  i += 10;
});
