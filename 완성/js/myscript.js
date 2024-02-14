$(function(){

//menu
$(".main>li").hover(function(){
    $(this).find(".sub").stop().slideDown();
}, function(){
    $(this).find(".sub").stop().slideUp();
})

//slide]
var n = 0 ;
setInterval(function(){
n = (n+1) % 3 ;
pos = n * -100 + "%"
$(".left_move").animate({left:pos},500)
},2000)



//pop
$(".p_click").click(function(){
    $(".modal, .pop").show();
})
$(".close").click(function(){
    $(".modal, .pop").hide();
})
})//jquery  