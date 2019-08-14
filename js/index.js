/**
 * Created by Administrator on 2019/8/7 0007.
 */
$(function () {
    $("#navigation .navbar-toggle").click(function () {
        $(this).css({backgroundColor:"#F7F7F7"})
    })
})
$(function () {
    $(".carousel").carousel();//Í¼Æ¬×Ô¶¯ÂÖ²¥
})


$(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <= 300) {
            $(".header .title .banner nav").css({position:"",backgroundColor:"", boxShadow:""})

        } else {
            $(".header .title .banner nav").css({position:"fixed",backgroundColor:"white",top:"0px", boxShadow:"1px 1px 1px 0px #e7e7e7"})
        }
    })
})

function fun(){
    var u=document.getElementById("user").value;
    var m=document.getElementById("user1").value;
    var n=document.getElementById("user2").value;
    if(u==""){
        $(".form .i3").css({display:"block"})
    }
    else {
        $(".form .i3").css({display:"none"})
    }
    if(m==""){
        $(".form .i4").css({display:"block"})
    }
    else {
        $(".form .i4").css({display:"none"})
    }
    if(n==""){
        $(".form .i5").css({display:"block"})
    }
    else {
        $(".form .i5").css({display:"none"})
    }
}

