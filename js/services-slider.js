var servicesButtonDelivery = document.querySelector('.page-services__delivery-button');
var servicesButtonWarranty = document.querySelector('.page-services__warranty-button');
var servicesButtonCredit = document.querySelector('.page-services__credit-button');

var servicesWrapperDelivery = document.querySelector('.page-services__delivery-item');
var servicesWrapperWarranty = document.querySelector('.page-services__warranty-item');
var servicesWrapperCredit = document.querySelector('.page-services__credit-item');

var servicesDelivery = document.querySelector('.page-services__delivery');
var servicesWarranty = document.querySelector('.page-services__warranty');
var servicesCredit = document.querySelector('.page-services__credit');

servicesButtonDelivery.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!servicesDelivery.classList.contains('page-services__service_current')) 
    {
        servicesDelivery.classList.add('page-services__service_current')
        servicesWarranty.classList.remove('page-services__service_current')
        servicesCredit.classList.remove('page-services__service_current')
    }

    if (!servicesButtonDelivery.classList.contains('page-services__button_current') && !servicesWrapperDelivery.classList.contains('page-services__item_current')) 
    {
        servicesButtonDelivery.classList.add('page-services__button_current')
        servicesButtonWarranty.classList.remove('page-services__button_current')
        servicesButtonCredit.classList.remove('page-services__button_current')

        servicesWrapperDelivery.classList.add('page-services__item_current')
        servicesWrapperWarranty.classList.remove('page-services__item_current')
        servicesWrapperCredit.classList.remove('page-services__item_current')
    }
});

servicesButtonWarranty.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!servicesWarranty.classList.contains('page-services__service_current')) 
    {
        servicesWarranty.classList.add('page-services__service_current')
        servicesDelivery.classList.remove('page-services__service_current')
        servicesCredit.classList.remove('page-services__service_current')
    }

    if (!servicesButtonWarranty.classList.contains('page-services__button_current') && !servicesWrapperWarranty.classList.contains('page-services__item_current')) 
    {
        servicesButtonWarranty.classList.add('page-services__button_current')
        servicesButtonDelivery.classList.remove('page-services__button_current')
        servicesButtonCredit.classList.remove('page-services__button_current')

        servicesWrapperWarranty.classList.add('page-services__item_current')
        servicesWrapperDelivery.classList.remove('page-services__item_current')
        servicesWrapperCredit.classList.remove('page-services__item_current')
    }
});

servicesButtonCredit.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (!servicesCredit.classList.contains('page-services__service_current')) 
    {
        servicesCredit.classList.add('page-services__service_current')
        servicesDelivery.classList.remove('page-services__service_current')
        servicesWarranty.classList.remove('page-services__service_current')
    }

    if (!servicesButtonCredit.classList.contains('page-services__button_current') && !servicesWrapperCredit.classList.contains('page-services__item_current')) 
    {
        servicesButtonCredit.classList.add('page-services__button_current')
        servicesButtonDelivery.classList.remove('page-services__button_current')
        servicesButtonWarranty.classList.remove('page-services__button_current')

        servicesWrapperCredit.classList.add('page-services__item_current')
        servicesWrapperDelivery.classList.remove('page-services__item_current')
        servicesWrapperWarranty.classList.remove('page-services__item_current')
    }
});