import 'bootstrap/dist/js/bootstrap';
import '';
import '@fortawesome/fontawesome-free/js/all.min';
import './CSS/style.css';
import './SASS/style.scss';


document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المُنتج إلى عربة الشراء");
    });
});


document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active');
    });
});

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        });
        item.parentNode.parentNode.classList.add('active')
    });
});

// Total price counter

document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUnit = parent.getAttribute('data-product-price');
        const totalPriceForProduct = newQuantity * pricePerUnit
        parent.querySelector('.total-price-for-product').innerHTML = totalPriceForProduct + "$" ;

        calculateTotalPrice()
    });
});

document.querySelectorAll('[data-remove-from-card]').forEach(item => {
    item.addEventListener('click', () => {
        item.closest('[data-product-info]').remove()
        calculateTotalPrice()
    })
})


function calculateTotalPrice() {
    let totalPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product => {
        const pricePerUnite = product.getAttribute('data-product-price');
        const quantity = product.querySelector('[data-product-quantity]').value
        const totalPriceForProduct = pricePerUnite * quantity

        totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
    })
    document.getElementById('total-price-for-all-product').innerHTML = totalPriceForAllProduct + '$'
}

// chosing country and cities

const citiesByCountry = {
    om: ['مسقط','عبري','مسندم', 'أخرى'],
    su: ['الرياض','جدة','تبوك', 'أخرى'],
    ed: ['أبوضبي','الشارقة','عجمان', 'أخرى'],
    kw: ['الكويت','حولي', 'الأحمدي', 'أخرى'],
    ph: ['المنامة','المحرق', 'سترة', 'أخرى']
}

document.querySelectorAll('select[name="country"]').forEach(item => {
    item.addEventListener('change', () => {
        const country = item.value

        const cities = citiesByCountry[country]

        document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

        const firstOption = document.createElement('option')
        const optionText = document.createTextNode('اختر المدينة')
        firstOption.appendChild(optionText)
        firstOption.setAttribute('value', '')
        firstOption.setAttribute('disabled', 'true')
        firstOption.setAttribute('selected', 'true')

        const city_options = document.getElementById('paymentcities')
        city_options.appendChild(firstOption)

        cities.forEach(city => {
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value', city)
            city_options.appendChild(newOption)
        })
    })
})

//hide an recover visa pay method

document.querySelectorAll('#form-checkout [name="payment-method"]').forEach(item =>{
    item.addEventListener('change', () => {
        const payment_method = item.value

        const criditVardInput = document.querySelectorAll('#credit_card_info input')
        if (payment_method === 'on_delivery'){
            criditVardInput.forEach(input => {
                input.style.display='none'
            })
        }
        else{
            criditVardInput.forEach(input => {
                input.style.display='block'
            });
        }
    });
});

document.getElementById('copyright').innerHTML = "جميع الحقوق محفوظة @ " +  new Date ().getFullYear();

console.log('Hi');

console.log('Hi');