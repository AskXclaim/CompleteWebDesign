const products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg'
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg'
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png'
        }
    }
}

// Search params
const search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
};

const quality = {
    high: 190,
    low: 150
};

// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
// 1: above 1.000 units - 20% discount
// 2: above 500 units - 12% discount
// 3: above 100 units - 5% discount


// Solution:
const getData = (products, search_params) => {
    const data = products[`${search_params.color}`];
    return data[`${search_params.style}`];
}
const updatePicture = (products, search_params) => {
    const value = getData(products, search_params);
    const photo_product_img = $("#photo-product");
    photo_product_img.attr("src", `./img/${value.photo}`);
};
const getTotal = (products, search_params) => {
    const value = getData(products, search_params);
    let unitPrice = value.unit_price;
    if (search_params.quality === quality.high)
        unitPrice = value.unit_price + (value.unit_price * 0.12);

    let totalAmount = parseFloat((search_params.quantity * unitPrice)).toFixed(2);

    if (search_params.quantity > 1000)
        totalAmount -= totalAmount * 0.20;
    else if (search_params.quantity > 500)
        totalAmount -= totalAmount * 0.12;
    else if (search_params.quantity > 100)
        totalAmount -= totalAmount * 0.05;

    return parseFloat(totalAmount).toLocaleString
    ("en-US",
        {
            style: "currency",
            currency: "USD"
        });
}
const updateResult = (products, search_params) => {
    $("#result-style").html(`${search_params.style}`);
    $("#result-quality").html(`${search_params.quality}g/m2`);
    $("#result-color").html(`${search_params.color}`);
    $("#result-quantity").html(`${search_params.quantity}`);
    $("#price").html(`US${getTotal(products, search_params)}`);
};

const updatePage = (products, search_params) => {
    $(".refresh-loader").show();
    updatePicture(products, search_params);
    updateResult(products, search_params);
    window.setTimeout(() => {
        $(".refresh-loader").hide();

    }, 500)
}

$(function () {
    const quantity_input = $("#quantity");
    search_params.quantity = parseInt(quantity_input.val());

    quantity_input.keyup(() => {
        search_params.quantity = parseInt(quantity_input.val());
        // should chnage this to updatePage(products, search_params);
        updateResult(products, search_params);

    });

    const whiteColor_div = $("#white");
    const colored_div = $("#colored");
    search_params.color = whiteColor_div.hasClass("selected")
        ? whiteColor_div.attr("id").trim() : colored_div.attr("id").trim();

    whiteColor_div.click(() => {
        if (!whiteColor_div.hasClass("selected")) {
            colored_div.removeClass("selected");
            whiteColor_div.addClass("selected");
            search_params.color = whiteColor_div.attr("id");
            updatePage(products, search_params);
        }
    });

    colored_div.click(() => {
        if (!colored_div.hasClass("selected")) {
            whiteColor_div.removeClass("selected");
            colored_div.addClass("selected");
            search_params.color = colored_div.attr("id");
            updatePage(products, search_params);
        }
    });

    const quality150_div = $("#q150");
    const quality190_div = $("#q190");
    search_params.quality = quality150_div.hasClass("selected")
        ? quality.low : quality.high;

    quality150_div.click(() => {
        if (!quality150_div.hasClass("selected")) {
            quality190_div.removeClass("selected");
            quality150_div.addClass("selected");
            search_params.quality = quality.low;
            updatePage(products, search_params);
        }
    });

    quality190_div.click(() => {
        if (!quality190_div.hasClass("selected")) {
            quality150_div.removeClass("selected");
            quality190_div.addClass("selected");
            search_params.quality = quality.high;
            updatePage(products, search_params);
        }
    });

    const style_options = $("#style");
    search_params.style = $("#style option:selected").val();
    style_options.change(() => {
        const style_selectedOption = $("#style option:selected")
        search_params.style = style_selectedOption.val();
        updatePage(products, search_params);
    });
    updatePage(products, search_params);
});
