$('.slider').slick({
    dots: true
});

document.querySelectorAll('.dropdown__row-btn').forEach(function(element){
    element.addEventListener('click', function(){
        if(this.classList.contains('enabled')){
            $(this).find(".button-arrow").toggleClass('active');
            $(this).parent('.dropdown').find(".dropdown__content").toggleClass('show');
        }
        
    });
});

function check() {
    let filled = true;
    $(".check-inputs").each(function() {
      if ($(this).val() == '') filled = false;
    });
    if(filled){
        $('.dropdown__row-btn').removeClass('disabled').addClass('enabled');
    } else {
        $('.revise').removeClass('enabled').addClass('disabled');
    }
}

document.querySelectorAll('.check-inputs').forEach(function(element){
    element.addEventListener('keydown', function(){
        check();
    });
});