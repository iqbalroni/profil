$(document).ready(function () {

    $("#toUp").hide();
    // navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('sticky');
            $("#toUp").show();
        } else {
            $('#navbar').removeClass('sticky');
            $("#toUp").hide();
        }
    });

    // dark mode
    $("#dark").hide();

    $('#light').click(function () {
        $("#body").addClass("light");
        $('#light').hide();
        $('#dark').show();
    });

    $('#dark').click(function () {
        $("#body").removeClass("light")
        $('#light').show();
        $('#dark').hide();
    });
    
    // menu
    $(".menu-about").hide();
    $(".menu-projek").hide();
    $(".menu-contact").hide();

    $("#beranda").click(function(){
        $('.menu-biodata').show(1000);
        $('.menu-home').show(1000);
        $('.menu-about').hide(2000);
        $(".menu-projek").hide(2000);
        $(".menu-contact").hide(2000);
    })
    $("#about").click(function(){
        $('.menu-biodata').show(1000);
        $('.menu-home').hide(1000);
        $('.menu-about').show(2000);
        $(".menu-projek").hide(2000);
        $(".menu-contact").hide(2000);
    })
    $("#projek").click(function(){
        $(".menu-projek").show(2000);
        $('.menu-biodata').hide(1000);
        $('.menu-home').hide(1000);
        $('.menu-about').hide(2000);
        $(".menu-contact").hide(2000);
    })
    $("#contact").click(function(){
        $(".menu-projek").hide(2000);
        $('.menu-biodata').hide(1000);
        $('.menu-home').hide(1000);
        $('.menu-about').hide(2000);
        $(".menu-contact").show(2000);
    });

    // list project
    $("#grid").hide();

    $("#column").click(function(){
        $("#grid").show();
        $("#column").hide();
        
        $("#proyek").removeClass("flexible").addClass("columns");
    });

    $("#grid").click(function(){
        $("#column").show();
        $("#grid").hide();
        $("#proyek").removeClass("columns").addClass("flexible");
    });

});