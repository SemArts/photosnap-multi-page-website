//! BURGER MENU

document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
    document.querySelector('.header').classList.toggle('header-scroll');
    document.querySelector('main').classList.toggle('main-open');
  });

//! SWITCH PRICE

document.addEventListener('DOMContentLoaded', () => {
    const switchToggle = document.getElementById('switchToggle');
    const monthly = document.querySelector('.monthly');
    const yearly = document.querySelector('.yearly');
    const plans = document.querySelectorAll('.plan--price__month, .plan--price__year');

    switchToggle.addEventListener('change', () => {
        plans.forEach(price => {
            if (switchToggle.checked) {
                price.classList.toggle('active', price.classList.contains('plan--price__year'));
                monthly.classList.add('option');
                yearly.classList.remove('option');
            } else {
                price.classList.toggle('active', price.classList.contains('plan--price__month'));
                monthly.classList.remove('option');
                yearly.classList.add('option');
            }
        });
    });

    yearly.classList.add('option');
    
    plans.forEach(price => {
        price.classList.remove('active');
    });

    document.querySelectorAll('.plan--price__month').forEach(price => {
        price.classList.add('active');
    });
});
