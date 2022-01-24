$(function() {
//*********************取得當網址*********************//
	// var address = window.location.href;
	// alert(address);


//*********************行政區照片切換*********************//
// var $showImage = $('.show-image')
// var $showImage = $(this).parent().parent().siblings('.showbox').find('img')
	$('.abgne a').click(function(){
		// 把 #show-image 改成被點擊到的內容
		$(this).parent().siblings('.showbox').find('img').attr('src', $(this).find('img').attr('src')).attr('title', $(this).find('img').attr('title')).attr('alt', $(this).find('img').attr('alt'));
	}).click(function(){
		// 如果超連結被點擊時, 取消連結動作
		return false;
	});

//*********************行政區照片鍵盤切換用*********************//
	// $('body').keydown(function(){
	// 	if (event.keyCode == 13) { //enter 键值 为13
	// 		// $('.abgne a img').click(function(){
	// 		// 	$(this).find('img').parent().parent().siblings('.showbox').find('img').attr('src', $(this).attr('src')).attr('title', $(this).attr('title')).attr('alt', $(this).attr('alt'));;
	// 		// });
	// 	};
	// });



//*********************行政區域切換*********************//
	// $('.tab a').click(function() {
	// 	$(this).siblings().removeClass('this');
	// 	$(this).addClass('this');
	// });


	// $('#Bei-tou').click(function() {
	// 	$('.bei-tou').siblings('.section').hide();
	// 	$('.bei-tou').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Shi-lin').click(function() {
	// 	$('.shi-lin').siblings('.section').hide();
	// 	$('.shi-lin').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Da-tong').click(function() {
	// 	$('.da-tong').siblings('.section').hide();
	// 	$('.shi-lin').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Da-an').click(function() {
	// 	$('.da-an').siblings('.section').hide();
	// 	$('.da-an').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Zhong-shan').click(function() {
	// 	$('.zhong-shan').siblings('.section').hide();
	// 	$('.zhong-shan').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Zhong-zheng').click(function() {
	// 	$('.zhong-zheng').siblings('.section').hide();
	// 	$('.zhong-zheng').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Nei-hu').click(function() {
	// 	$('.nei-hu').siblings('.section').hide();
	// 	$('.nei-hu').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Wen-shan').click(function() {
	// 	$('.wen-shan').siblings('.section').hide();
	// 	$('.wen-shan').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Song-shan').click(function() {
	// 	$('.song-shan').siblings('.section').hide();
	// 	$('.song-shan').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Xin-yi').click(function() {
	// 	$('.xin-yi').siblings('.section').hide();
	// 	$('.xin-yi').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Wan-hua').click(function() {
	// 	$('.wan-hua').siblings('.section').hide();
	// 	$('.wan-hua').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
	// $('#Nan-gang').click(function() {
	// 	$('.nan-gang').siblings('.section').hide();
	// 	$('.nan-gang').show();
	// 	$('.area-title').attr('title', $(this).attr('title')).html($(this).attr('title'));
	// });
});






