
$(document).ready(function(){
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });

    let aboutOffset = $("#about").offset().top;
    $(window).scroll(function(){
    let wScroll=$(window).scrollTop();
    console.log(wScroll);
    if(wScroll > aboutOffset-50)
    {
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.5)");
        $("#btn-home").fadeIn(500);
    }
    else{
        $("#main-nav").css("backgroundColor","transparent");
        $("#btn-home").fadeOut(500);
    }
    })

    $("#btn-home").click(function(){
    $(window).scrollTop(0);
    
    })

    $("#toggle").click(function(){
    let slidebarWidth=$("#colorsBox").innerWidth();
    if($("#side-bar").css("left")== "0px"){
        $("#side-bar").animate({left:`-${slidebarWidth}`},1000);
    }
    else{
        $("#side-bar").animate({left:`0px`},1000);
    }
    
    })

    let colorBoxs = $(".color-box");
    colorBoxs.eq(0).css("backgroundColor","orange");
    colorBoxs.eq(1).css("backgroundColor","aqua");
    colorBoxs.eq(2).css("backgroundColor","lightgreen");
    colorBoxs.eq(3).css("backgroundColor","#09c");
    colorBoxs.eq(4).css("backgroundColor","teal");
    colorBoxs.eq(5).css("backgroundColor","#ff206e");

    colorBoxs.click(function(e){
    let colorboxColor = $(e.target).css("backgroundColor");
    $(".change").css("color",colorboxColor);
    })
 })

