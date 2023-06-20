$(document).ready(function(){
  
  qchk=true;
  $(".trigger").click(function(){
    
    if(qchk){
      $(".gnb").stop().animate({right:"0"},500);
      qchk=false;
    }else{
      $(".gnb").stop().animate({right:"-60%"},500);
      qchk=true;
    }
    $(".main").siblings().find(".sub").slideUp(),300;

  });

  $(".main").click(function(){
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().find(">a").removeClass("uparrow")
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").toggleClass("uparrow");
  });

  $(".back").click(function(){
    $(".gnb").stop().animate({right:"-60%"},500);
  });

  // seoultower1

  $(".tab li").click(function(){

    for(i=0;i<4;i++){
      $(".tab li").eq(i).css({backgroundColor:" #afc8fd"});
    };
    
    let inum = $(this).index();
    $(this).css({backgroundColor:" #f39e1f"});

    $(".i1").removeClass("active");

    let result= $(this).attr("data-alt");
    $(".contents1 div").removeClass("active");
    $(`#${result}`).addClass("active");
  });
  
});
