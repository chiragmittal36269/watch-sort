const watches = [
    {
        id: 1,
        name: "Classic Silver Analog Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/1_JetBlack.jpg?v=1694766439&width=500",
        price: 99.99,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Elegant Gold Women's Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/SMWGS9XBHTHZJN67_0.jpg?v=1693031937&width=500",
        price: 129.99,
        cat: "Dress",
    },
    {
        id: 3,
        name: "Sporty Chronograph Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/SMWGRCJCRZBFGZJN_0.jpg?v=1690976928&width=500",
        price: 149.99,
        cat: "Sport",
    },
    {
        id: 4,
        name: "Diamond-Studded Luxury Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/SMWGQFDGG4MHEJMY_0_b7b2d6a9-9267-4389-8ea7-425e01004fd3.jpg?v=1686558198&width=500",
        price: 499.99,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Rose Gold Fashion Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/WhatsAppImage2023-05-29at3.13.57PM_1.jpg?v=1685424085&width=500",
        price: 79.99,
        cat: "Casual",
    },
    {
        id: 6,
        name: "Classic Black Leather Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/files/1_e0a0272a-8647-4bd0-b50c-1f59b3024af9.jpg?v=1689573194&width=500",
        price: 119.99,
        cat: "Luxury",
    },
    {
        id: 7,
        name: "Silver Diamond Bracelet Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/products/SMWGMVGHHH72YYW9_01.jpg?v=1681369022&width=500",
        price: 249.99,
        cat: "Casual",
    },
    {
        id: 8,
        name: "Stainless Steel Diver's Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/products/JetBlack.jpg?v=1672399002&width=500",
        price: 179.99,
        cat: "Luxury",
    },
    {
        id: 9,
        name: "Minimalist Rose Gold Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/products/Vision4.png?v=1676542603&width=500",
        price: 89.99,
        cat: "Dress",
    },
    {
        id: 10,
        name: "Digital Sports Watch",
        imgLink:
            "https://www.pebblecart.com/cdn/shop/products/1_d7e958f2-14f0-4db1-b1a2-ff087f047dd9.png?v=1675161890&width=500",
        price: 89.99,
        cat: "Sport",
    },
];

// console.log(watches);

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productContainer.innerHTML = filteredProducts
        .map(
            (item) =>
                `<div class="product">
                    <img src=${item.imgLink}
                        alt="internet issue">
                    <span class="name">${item.name}</span>
                    <span class="priceText">${item.price}</span>
                </div>
    `
        )
        .join("");
};

displayProducts(watches);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(
            watches.filter((item) => {
                return item.name.toLowerCase().indexOf(value) !== -1;
            })
        );
    } else {
        displayProducts(watches);
    }
});

const setCategories = () => {
    const allCats = watches.map((item) => item.cat);
    // console.log(allCats);
    let categories = [
        "All",
        ...allCats.filter((item, index) => {
            // console.log(allCats);
            // console.log(`allCats.indexOf(item): ${allCats.indexOf(item)}`);
            // console.log(`item: ${item}`);
            // console.log(`index: ${index}`);
            // console.log(
            //     `allCats.indexOf(item) === index : ${
            //         allCats.indexOf(item) === index
            //     }`
            // );
            return allCats.indexOf(item) === index; // remove duplicates from the array
        }),
    ];

    categoriesContainer.innerHTML = categories
        .map((cat) => `<span class="cat">${cat}</span>`)
        .join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectCategory = e.target.textContent;
        console.log(selectCategory);

        selectCategory === "All"
            ? displayProducts(watches)
            : displayProducts(
                  watches.filter((item) => item.cat === selectCategory)
              );
    });
};

const setPrices = () => {
    const priceList = watches.map((item) => item.price);
    const maxPrice = Math.max(...priceList);
    const minPrice = Math.min(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(watches.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();
