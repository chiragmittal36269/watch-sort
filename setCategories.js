const setCategories = () => {
    const allCats = watches.map((item) => item.cat);
    // console.log(allCats);
    console.log(
        allCats.filter((item, index) => {
            // console.log(allCats);
            console.log(`allCats.indexOf(item): ${allCats.indexOf(item)}`);
            console.log(`item: ${item}`);
            console.log(`index: ${index}`);
            console.log(
                `allCats.indexOf(item) === index : ${
                    allCats.indexOf(item) === index
                }`
            );
            return allCats.indexOf(item) === index;
        })
    );
};
