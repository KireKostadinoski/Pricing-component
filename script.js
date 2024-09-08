const rangeBar = document.getElementById('range');
const price = document.getElementById('price');
const pageViews = document.getElementById('pageViews');
const toggleBtn = document.getElementById('toggleBtn');
const monthlyYearly = document.getElementById('monthlyYearly');


function updatePrice() {
    const rangeValue = rangeBar.value; // Get the current value of the range input
    let priceValue;

    // Pricing based on the range bar value
    switch (rangeValue) {
        case "0":
            priceValue = 8;
            pageViews.innerHTML = "10K PAGEVIEWS";
            break;
        case "25":
            priceValue = 12;
            pageViews.innerHTML = "50K PAGEVIEWS";
            break;
        case "50":
            priceValue = 16;
            pageViews.innerHTML = "100K PAGEVIEWS";
            break;
        case "75":
            priceValue = 24;
            pageViews.innerHTML = "500K PAGEVIEWS";
            break;
        case "100":
            priceValue = 36;
            pageViews.innerHTML = "1M PAGEVIEWS";
            break;
        default:
            priceValue = 16;
            pageViews.innerHTML = "100K PAGEVIEWS";
            break;
    }

    //toggle btn
    if (toggleBtn.checked) {
        priceValue = priceValue * 0.75; // Apply 25% discount for yearly billing
        monthlyYearly.innerHTML = "/ year";
    } else {
        monthlyYearly.innerHTML = "/ month"; 
    }

    
    price.innerHTML = `$${priceValue.toFixed(2)}`;

}


rangeBar.addEventListener('input', updatePrice);


toggleBtn.addEventListener('change', updatePrice);

updatePrice();
