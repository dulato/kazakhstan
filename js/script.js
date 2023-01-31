// menu burger
$('.menu_link').on('click', function(event){
    var checkBox = document.querySelector('.nav input[type="checkbox"]');
    checkBox.checked = false;
});

// scroll body
jQuery(function() {
    $(".menu_link").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
        
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
        
                window.location.hash = hash;
            });
        } 
      });
});

// hide and show block
$('.more_detailed_1').on('click', function(event){
    $('._text_1, .more_detailed_1').toggleClass('active');
    if($('.more_detailed_1').hasClass('active')){
        document.querySelector('.more_detailed_1').innerHTML = 'Жасыру . . .';
        $('.block_place_1').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_1').innerHTML = 'Толығырақ . . .';
        $('.block_place_1').removeClass('active')
    }
});
$('.more_detailed_2').on('click', function(event){
    $('._text_2, .more_detailed_2').toggleClass('active');
    if($('.more_detailed_2').hasClass('active')){
        document.querySelector('.more_detailed_2').innerHTML = 'Жасыру . . .';
        $('.block_place_2').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_2').innerHTML = 'Толығырақ . . .';
        $('.block_place_2').removeClass('active')
    }
});
$('.more_detailed_3').on('click', function(event){
    $('._text_3, .more_detailed_3').toggleClass('active');
    if($('.more_detailed_3').hasClass('active')){
        document.querySelector('.more_detailed_3').innerHTML = 'Жасыру . . .';
        $('.block_place_3').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_3').innerHTML = 'Толығырақ . . .';
        $('.block_place_3').removeClass('active')
    }
});
$('.more_detailed_4').on('click', function(event){
    $('._text_4, .more_detailed_4').toggleClass('active');
    if($('.more_detailed_4').hasClass('active')){
        document.querySelector('.more_detailed_4').innerHTML = 'Жасыру . . .';
        $('.block_place_4').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_4').innerHTML = 'Толығырақ . . .';
        $('.block_place_4').removeClass('active')
    }
});
$('.more_detailed_5').on('click', function(event){
    $('._text_5, .more_detailed_5').toggleClass('active');
    if($('.more_detailed_5').hasClass('active')){
        document.querySelector('.more_detailed_5').innerHTML = 'Жасыру . . .';
        $('.block_place_5').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_5').innerHTML = 'Толығырақ . . .';
        $('.block_place_5').removeClass('active')
    }
});
$('.more_detailed_6').on('click', function(event){
    $('._text_6, .more_detailed_6').toggleClass('active');
    if($('.more_detailed_6').hasClass('active')){
        document.querySelector('.more_detailed_6').innerHTML = 'Жасыру . . .';
        $('.block_place_6').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_6').innerHTML = 'Толығырақ . . .';
        $('.block_place_6').removeClass('active')
    }
});
$('.more_detailed_7').on('click', function(event){
    $('._text_7, .more_detailed_7').toggleClass('active');
    if($('.more_detailed_7').hasClass('active')){
        document.querySelector('.more_detailed_7').innerHTML = 'Жасыру . . .';
        $('.block_place_7').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_7').innerHTML = 'Толығырақ . . .';
        $('.block_place_7').removeClass('active')
    }
});
$('.more_detailed_8').on('click', function(event){
    $('._text_8, .more_detailed_8').toggleClass('active');
    if($('.more_detailed_8').hasClass('active')){
        document.querySelector('.more_detailed_8').innerHTML = 'Жасыру . . .';
        $('.block_place_8').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_8').innerHTML = 'Толығырақ . . .';
        $('.block_place_8').removeClass('active')
    }
});
$('.more_detailed_9').on('click', function(event){
    $('._text_9, .more_detailed_9').toggleClass('active');
    if($('.more_detailed_9').hasClass('active')){
        document.querySelector('.more_detailed_9').innerHTML = 'Жасыру . . .';
        $('.block_place_9').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_9').innerHTML = 'Толығырақ . . .';
        $('.block_place_9').removeClass('active')
    }
});
$('.more_detailed_10').on('click', function(event){
    $('._text_10, .more_detailed_10').toggleClass('active');
    if($('.more_detailed_10').hasClass('active')){
        document.querySelector('.more_detailed_10').innerHTML = 'Жасыру . . .';
        $('.block_place_10').addClass('active')
    }
    else{
        document.querySelector('.more_detailed_10').innerHTML = 'Толығырақ . . .';
        $('.block_place_10').removeClass('active')
    }
});


// Modal window
$('.popup-open_0').on('click', function(event){
    $('.popup-fade_0').fadeIn();
    $('body').addClass('lock');
    return false;
});

jQuery(function() {
    var element = document.getElementById('number');
    var maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };

    var mask = IMask(element, maskOptions);
	$('.question_form').submit(function(e){
		e.preventDefault();
        if($("#number").val().length < 18){
            console.log($("#number").val().length)      
            $(".tel_lb").css('display','block')        
            return;
        }
        else{
            $(".tel_lb").css('display','none');
            let th = $(this);
            $.ajax({
                type: "POST",
                url: "index.php",
                data: "data",
                dataType: th.serialize(),
                success: function () {    
                    $('.popup-fade_0').fadeOut();
                }
            });
        }
        // this.submit()
    });
});

$('.popup-close_0').on('click', function(event){
    $(this).parents('.popup-fade_0').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_0').on('click', function(event){
    if ($(event.target).closest('.popup_0').length == 0) {
        $('.popup-fade_0').fadeOut();	
        $('body').removeClass('lock');
    }
});

// modal info
$('.popup-open_1').on('click', function(event){
    $('.popup-fade_1').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_1').on('click', function(event){
    $(this).parents('.popup-fade_1').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_1').on('click', function(event){
    if ($(event.target).closest('.popup_1').length == 0) {
        $('.popup-fade_1').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_2').on('click', function(event){
    $('.popup-fade_2').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_2').on('click', function(event){
    $(this).parents('.popup-fade_2').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_2').on('click', function(event){
    if ($(event.target).closest('.popup_2').length == 0) {
        $('.popup-fade_2').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_3').on('click', function(event){
    $('.popup-fade_3').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_3').on('click', function(event){
    $(this).parents('.popup-fade_3').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_3').on('click', function(event){
    if ($(event.target).closest('.popup_3').length == 0) {
        $('.popup-fade_3').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_4').on('click', function(event){
    $('.popup-fade_4').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_4').on('click', function(event){
    $(this).parents('.popup-fade_4').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_4').on('click', function(event){
    if ($(event.target).closest('.popup_4').length == 0) {
        $('.popup-fade_4').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_5').on('click', function(event){
    $('.popup-fade_5').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_5').on('click', function(event){
    $(this).parents('.popup-fade_5').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_5').on('click', function(event){
    if ($(event.target).closest('.popup_5').length == 0) {
        $('.popup-fade_5').fadeOut();
        $('body').removeClass('lock');	
    }
});

$('.popup-open_6').on('click', function(event){
    $('.popup-fade_6').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_6').on('click', function(event){
    $(this).parents('.popup-fade_6').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_6').on('click', function(event){
    if ($(event.target).closest('.popup_6').length == 0) {
        $('.popup-fade_6').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_7').on('click', function(event){
    $('.popup-fade_7').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_7').on('click', function(event){
    $(this).parents('.popup-fade_7').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_7').on('click', function(event){
    if ($(event.target).closest('.popup_7').length == 0) {
        $('.popup-fade_7').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_8').on('click', function(event){
    $('.popup-fade_8').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_8').on('click', function(event){
    $(this).parents('.popup-fade_8').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_8').on('click', function(event){
    if ($(event.target).closest('.popup_8').length == 0) {
        $('.popup-fade_8').fadeOut();	
        $('body').removeClass('lock');
    }
});

$('.popup-open_9').on('click', function(event){
    $('.popup-fade_9').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_9').on('click', function(event){
    $(this).parents('.popup-fade_9').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_9').on('click', function(event){
    if ($(event.target).closest('.popup_9').length == 0) {
        $('.popup-fade_9').fadeOut();
        $('body').removeClass('lock');
    }
});

$('.popup-open_10').on('click', function(event){
    $('.popup-fade_10').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_10').on('click', function(event){
    $(this).parents('.popup-fade_10').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_10').on('click', function(event){
    if ($(event.target).closest('.popup_10').length == 0) {
        $('.popup-fade_10').fadeOut();
        $('body').removeClass('lock');	
    }
});

$('.popup-open_11').on('click', function(event){
    $('.popup-fade_11').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_11').on('click', function(event){
    $(this).parents('.popup-fade_11').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_11').on('click', function(event){
    if ($(event.target).closest('.popup_11').length == 0) {
        $('.popup-fade_11').fadeOut();
        $('body').removeClass('lock');	
    }
});

$('.popup-open_12').on('click', function(event){
    $('.popup-fade_12').fadeIn();
    $('body').addClass('lock');
    return false;
});
$('.popup-close_12').on('click', function(event){
    $(this).parents('.popup-fade_12').fadeOut();
    $('body').removeClass('lock');
	return false;
});
$('.popup-fade_12').on('click', function(event){
    if ($(event.target).closest('.popup_12').length == 0) {
        $('.popup-fade_12').fadeOut();
        $('body').removeClass('lock');
    }
});


