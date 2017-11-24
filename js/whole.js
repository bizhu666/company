$(function(){
	
	//menu
	$("#menu").click(function(){
		$(".menu").fadeToggle("slow");
	})
	//返回顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$("#return").fadeIn();			
		}else{
			$("#return").fadeOut();
		}
	});
	
	$("#return").click(function(){
		$("html,body").animate({"scrollTop":"0px"
		},2000)
	});
	
	
  //tab标签切换

  $("#top span").click(function(){
  		$(this).addClass("on").siblings().removeClass("on");
  		var inde=$(this).index();
  		$("#newComtent> ul").eq(inde).show().siblings().hide();
  });
})