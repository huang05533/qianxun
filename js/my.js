$(function(){

	//千寻首页
	var n=0;
	var timer;
	$('.screen1').children('.title').removeClass('no');
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			n=n-d;
			if(n>6){n=6}
			if(n<0){n=0}
			$('section').animate({'top':-100*n+'%'}, 500)
        $('.aside ul li').eq(n).addClass('current').siblings('').removeClass('current');

		$('section>div').eq(n).children('.title').removeClass('no').parent('div').siblings('div').children('.title').addClass('no')
		},1000)
	})
	

	//点击首页右侧小按钮
	$('.aside ul li').click(function(event){
		var index=$(".aside ul li").index($(this))	
		$('.aside ul li').eq(index).addClass('current').siblings('').removeClass('current');
		$('section').css({'top':-100*index+'%'}, 500)
	});


	//图片轮播
	var num=0;
	var timee;
	function zou(){
		timee=setInterval(function(){
			num++;
			if(num>4){          	
				num=0; 
                $('.banner-right ul').css('left', -770*num+'px'); 
                num=1;
			}        			
    		$('.banner-right ul').animate({'left':-770*num+'px'})
		},1000);	
	}
	zou();
	$('.banner-right').hover(function() {		
		clearInterval(timee);
	}, function() {
		zou();
	});
	$('.left').click(function(event) {
		num--;
		if(num<0){
			num=4;
            $('.banner-right ul').css('left', -770*num+'px'); 
            num=3;
		}
		$('.banner-right ul').animate({'left':-770*num+'px'})
	});
	$('.right').click(function(event) {
		num++;
		if(num>4){        			
            num=0; 
            $('.banner-right ul').css('left', -770*num+'px'); 
            num=1;
		}
		$('.banner-right ul').animate({'left':-770*num+'px'})
	});
	$('.banner-right span').click(function(event) {
        console.log(event.target)
		console.log($(this).index());       			
	});     


	//播放音乐
	$('.music').click(function(event) {

		$(this).toggleClass('play');
		
		if($(this).hasClass('play')){
			$('audio')[0].play()
			$('.music').css('animation-play-state', 'running');
			$('.current').css('animation-play-state', 'running');
			$('img').css('animation-play-state', 'running');
		}else{
			$('audio')[0].pause()
			$('.music').css('animation-play-state', 'paused');
			$('.current').css('animation-play-state', 'paused');
			$('img').css('animation-play-state', 'paused');
		}
	});

})