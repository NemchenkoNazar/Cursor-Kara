const ibanezPrice = 15.678;
const gibsonPrice = 123.965;
const fenderPrice = 90.2345;

const maxPrice = Math.max(ibanezPrice, gibsonPrice, fenderPrice);

const minPrice = Math.min(ibanezPrice, gibsonPrice, fenderPrice);

const guitarsPrice = ibanezPrice + gibsonPrice + fenderPrice;

const roundedIbanezPrice = Math.floor(ibanezPrice);
const roundedGibsonPrice = Math.floor(gibsonPrice);
const roundedFenderPrice = Math.floor(fenderPrice);
const roundedGuitarsPrice = roundedIbanezPrice + roundedGibsonPrice + roundedFenderPrice;

const roundedToHundredGuitarsPrice = Math.round(roundedGuitarsPrice / 100) * 100;

function oddEven(roundedGuitarsPrice) {
if (roundedGuitarsPrice % 2 === 0)
    return "Загальна вартість є парним числом";
else
    return "Загальна вартість є непарним числом";
};

const customerMoney = 500;
const customerChange = customerMoney - guitarsPrice;

const averageGuitarsPrice = +((ibanezPrice + gibsonPrice + fenderPrice) / 3).toFixed(2);

const discount = Math.round(Math.random() * 100) / 100;
const discountPercentage = Math.trunc(discount * 100);
const discountUah = +(guitarsPrice * discount).toFixed(2);
const discountPrice = +(guitarsPrice - discountUah).toFixed(2);

const cost = +(guitarsPrice / 2).toFixed(2);
const profit = cost - discountUah;

const hw1Result = `Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Загальна вартість: ${guitarsPrice}
Округлена ціна: ${roundedGuitarsPrice}
Округлена до сотень ціна: ${roundedToHundredGuitarsPrice}
${oddEven(roundedGuitarsPrice)}
Решта з 500грн: ${customerChange}
Середня ціна: ${averageGuitarsPrice}
Знижка: ${discountPercentage} %
Ціна зі знижкою: ${discountPrice}
Собівартість: ${cost}
Чистий прибуток: ${profit}`;

export {
    maxPrice,
    minPrice,
    guitarsPrice,
    roundedGuitarsPrice,
    roundedToHundredGuitarsPrice,
    oddEven,
    customerChange,
    averageGuitarsPrice,
    discountPercentage,
    discountPrice,
    cost,
    profit
}