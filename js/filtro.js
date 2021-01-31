$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos'){
            $('.cont-product').show('1000');
        } else{
            $('.cont-product').not('.' + valor).hide('1000');
            $('.cont-product').filter('.' + valor).show('1000');
        }
    });
});