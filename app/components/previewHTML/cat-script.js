$(function(){
    var popularCat = $(".popularCat"),
        popularCatMob = $(".popularCat .btnLink"),
        popularCatItems = $("#popularCatItems"),
        btnLinkTxt = $(".popularCat .btnLinkTxt"),
        btnLinkIndicator = $(".popularCat .btnLink span.btnLinkIndicator"),
        frontBtnLinkIndicator = $("#frontLoadBtn .btnLink span.btnLinkIndicator"),
        topBtnLinkIndicator = $("#topLoadBtn .btnLink span.btnLinkIndicator"),
        topLoadOpen = 0,
        frontLoadOpen = 0,
        popularOpen = 0,
        htmlBody = $('html,body'),
        frontLoadBtn = $("#frontLoadBtn"),
        mfrontLoadBtn = $("#frontLoadBtn .btnLink"),
        topLoadBtn = $("#topLoadBtn"),
        mtopLoadBtn = $("#topLoadBtn .btnLink"),
        topLoad = $("#topLoad"),
        frontLoad = $("#frontLoad"),
        allExpandables = $(".popularCat, #frontLoadBtn, #topLoadBtn"),
        catTile = $(".subcategory-tile-menu"),
        TopMenu = $(".catPageTiles"),
        subMenu = $(".submenu-expand"),
        catTileOpen = 0;
    ;

    function frontLoadSlideTog(){
        frontLoad.slideToggle(function(){
            htmlBody.animate({
                scrollTop: frontLoad.offset().top - 300
            }, 500);
        });
    };

    function topLoadSlideTog(){
        topLoad.slideToggle(function(){
            htmlBody.animate({
                scrollTop: topLoad.offset().top - 300
            }, 500);
        });
    };

    function popularSlideTog(){
        popularCatItems.slideToggle(function(){
            htmlBody.animate({
                scrollTop: popularCatItems.offset().top - 300
            }, 500);
        });
    }
    function openPopularCatSlide(){
        closeAllSubMenu();
        popularOpen = 1;
        popularCat.addClass('active');
        popularCat.addClass('hover_effect');
        popularCat.css('background','#efefef');
        btnLinkTxt.html('Close All');
        btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
        $("#popularCatItems").slideDown();
    }
    function closePopularCatSlide(){
        popularOpen = 0;
        popularCat.removeClass('hover_effect');
        popularCat.removeClass('active');
        popularCat.css('background','#fff');
        btnLinkTxt.html('VIEW All');
        btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
        $("#popularCatItems").slideUp();
    }

    popularCat.on('mousedown', function(event){
        event.preventDefault();
        if(popularOpen == 1){
            closePopularCatSlide();
            htmlBody.animate({
                scrollTop: TopMenu.offset().top
            }, 500);
        }
        else{
            openPopularCatSlide();
            htmlBody.animate({
                scrollTop: $(this).offset().top - 300
            }, 500);
        }
        event.stopPropagation();
    });
    $(document).on('mousedown','.subcategory-tile-menu', function(){

        console.log("Clicked on catTile dynamic");
        if($(this).attr("id")){
            event.preventDefault();
            closePopularCatSlide();
            htmlBody.animate({
                scrollTop: $(this).offset().top - 300
            }, 500);
            var idName = "#" + $(this).attr("id").replace('Btn',"");
            if ($(window).width() < 768 ){
                var loc = $(this).index();
                if(loc % 2 == 0){
                    catTile.eq(loc + 1).after($(idName));
                }
                else{
                    catTile.eq(loc).after($(idName));
                }
            }
            if($(this).hasClass("active")){
                $(idName).slideUp();
                $(this).removeClass('active');
                $(this).removeClass('hover_effect');
                $(this).css('background','#fff');
                $(this).find(".btnLinkIndicator").css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
                if ($(window).width() < 768 ){
                    $(idName).css('border-bottom', 'none');
                }
            }
            else{
                closeAllSubMenu();
                $(idName).slideDown();
                $(this).addClass('active');
                $(this).addClass('hover_effect');
                $(this).css('background','#efefef');
                $(this).find(".btnLinkIndicator").css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
                if ($(window).width() < 768 ){
                    $(idName).css('border-bottom', '1px solid #e0e0e0');
                }
            }
            event.stopPropagation();
        }

    });
    catTile.on('mousedown', function(event){
        console.log("Clicked on catTile");
        if($(this).attr("id")){
            event.preventDefault();
            closePopularCatSlide();
            htmlBody.animate({
                scrollTop: $(this).offset().top - 300
            }, 500);
            var idName = "#" + $(this).attr("id").replace('Btn',"");
            if ($(window).width() < 768 ){
                var loc = $(this).index();
                if(loc % 2 == 0){
                    catTile.eq(loc + 1).after($(idName));
                }
                else{
                    catTile.eq(loc).after($(idName));
                }
            }
            if($(this).hasClass("active")){
                $(idName).slideUp();
                $(this).removeClass('active');
                $(this).removeClass('hover_effect');
                $(this).css('background','#fff');
                $(this).find(".btnLinkIndicator").css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
                if ($(window).width() < 768 ){
                    $(idName).css('border-bottom', 'none');
                }
            }
            else{
                closeAllSubMenu();
                $(idName).slideDown();
                $(this).addClass('active');
                $(this).addClass('hover_effect');
                $(this).css('background','#efefef');
                $(this).find(".btnLinkIndicator").css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
                if ($(window).width() < 768 ){
                    $(idName).css('border-bottom', '1px solid #e0e0e0');
                }
            }
            event.stopPropagation();
        }
    });
    function closeAllSubMenu(){
        catTile.removeClass('active');
        catTile.removeClass('hover_effect');
        catTile.css('background','#fff');
        catTile.find(".btnLinkIndicator").css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
        subMenu.slideUp().delay(300);
    }

//    popularCat.on('mousedown', function(event){
//        event.preventDefault();
//
//        if (topLoadOpen == 1){
//            topLoadOpen = 0;
//            topLoadBtn.removeClass('hover_effect');
//            topLoadBtn.removeClass('active');
//            topLoadBtn.css('background','#fff');
//            topBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            topLoad.slideUp(function(){
//                popularSlideTog();
//            });
//        }else if (frontLoadOpen == 1){
//            frontLoadOpen = 0;
//            frontLoadBtn.removeClass('hover_effect');
//            frontLoadBtn.removeClass('active');
//            frontLoadBtn.css('background','#fff');
//            frontBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                frontLoad.css('border-bottom', 'none');
//            }
//            frontLoad.slideUp(function(){
//                popularSlideTog();
//            });
//        }else{
//            popularSlideTog();
//        }
//
//        if($(this).hasClass('active')){
//            popularOpen = 0;
//            popularCat.removeClass('hover_effect');
//            popularCat.removeClass('active');
//            popularCat.css('background','#fff');
//            btnLinkTxt.html('VIEW All');
//            btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//
//        }else{
//            popularOpen = 1;
//            popularCat.addClass('active');
//            popularCat.addClass('hover_effect');
//            popularCat.css('background','#efefef');
//            btnLinkTxt.html('Close All');
//            btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
//        }
//        event.stopPropagation();
//    });
//
//    // allExpandables.on('touchend', function(e) {
//    //     e.preventDefault();
//    //     $(this).removeClass('hover_effect');
//    // });
//
//    frontLoadBtn.on('mousedown', function(event){
//        event.preventDefault();
//        if ($(document).width() < 768 ){
//            topLoadBtn.after(frontLoad);
//        }
//
//        if (topLoadOpen == 1){
//            topLoadOpen = 0;
//            topLoadBtn.removeClass('hover_effect');
//            topLoadBtn.removeClass('active');
//            topLoadBtn.css('background','#fff');
//            topBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            topLoad.slideUp(function(){
//                frontLoadSlideTog();
//            });
//        }else if (popularOpen == 1){
//            popularOpen = 0;
//            popularCat.removeClass('hover_effect');
//            popularCat.removeClass('active');
//            popularCat.css('background','#fff');
//            btnLinkTxt.html('VIEW All');
//            btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            popularCatItems.slideUp(function(){
//                frontLoadSlideTog();
//            });
//        }else{
//            frontLoadSlideTog();
//        }
//
//        if($(this).hasClass('active')){
//            frontLoadOpen = 0;
//            frontLoadBtn.removeClass('hover_effect');
//            frontLoadBtn.removeClass('active');
//            frontLoadBtn.css('background','#fff');
//            frontBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                frontLoad.css('border-bottom', 'none');
//            }
//
//        }else{
//            frontLoadOpen = 1;
//            frontLoadBtn.addClass('active');
//            frontLoadBtn.addClass('hover_effect');
//            frontLoadBtn.css('background','#efefef');
//            frontBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                frontLoad.css('border-bottom', '1px solid #e0e0e0');
//            }
//        }
//        event.stopPropagation();
//    });
//
//
//    topLoadBtn.on('mousedown', function(event){
//        event.preventDefault();
//        if ($(document).width() < 768 ){
//            topLoadBtn.after(topLoad);
//        }
//        if (frontLoadOpen == 1){
//            frontLoadOpen = 0;
//            frontLoadBtn.removeClass('hover_effect');
//            frontLoadBtn.removeClass('active');
//            frontLoadBtn.css('background','#fff');
//            frontBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                frontLoad.css('border-bottom', 'none');
//            }
//            frontLoad.slideUp(function(){
//                topLoadSlideTog();
//            });
//        }else if (popularOpen == 1){
//            popularOpen = 0;
//            popularCat.removeClass('hover_effect');
//            popularCat.removeClass('active');
//            popularCat.css('background','#fff');
//            btnLinkTxt.html('VIEW All');
//            btnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            popularCatItems.slideUp(function(){
//                topLoadSlideTog();
//            });
//        }else{
//            topLoadSlideTog();
//        }
//
//
//        if($(this).hasClass('active')){
//            topLoadOpen = 0;
//            topLoadBtn.removeClass('hover_effect');
//            topLoadBtn.removeClass('active');
//            topLoadBtn.css('background','#fff');
//            topBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/down.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                topLoad.css('border-bottom', 'none');
//            }
//
//        }else{
//            topLoadOpen = 1;
//            topLoadBtn.addClass('active');
//            topLoadBtn.addClass('hover_effect');
//            topLoadBtn.css('background','#efefef');
//            topBtnLinkIndicator.css('background', 'url(http://www.appliancesonline.com.au/images/opt/washing-v2/images/up.png) 0px 11px no-repeat');
//            if ($(document).width() < 768 ){
//                topLoad.css('border-bottom', '1px solid #e0e0e0');
//            }
//        }
//            event.stopPropagation();
//    });
});