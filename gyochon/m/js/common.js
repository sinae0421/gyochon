
/* 헤더 / 푸터 */
$(document).ready(function(){
        $("#header").load("/m/m_include/m_header.html",function(){
            var width = $(".pannelNav").width();
            console.log(width);
            $(".pannelNav").css("left", -1*width + "px");
            $(".pannel").click(function(){
                $(".pannelNav").animate({
                    "left":0
                },500);
            });
            $(".closeBtn").click(function(){
                $(".pannelNav").animate({
                    "left": -1*width + "px"
                },500);
            });
            $(".m_gnb li").click(function(){
               $(this).find(".m_lnb").toggle(500);
            })
        });
        $("#footer").load("/m/m_include/m_footer.html");
});