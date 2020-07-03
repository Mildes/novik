$(function (){
    $('.header_main_menu').click(function(){
        $('.header_menu').toggleClass('open')
    })
    $('.header_menu_close').click(function(){
        $('.open').toggle()
    })
});