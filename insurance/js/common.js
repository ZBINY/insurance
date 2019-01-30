$('header').load('../html/head.html .head',function (responseTxt, statusTxt, xhr) {
    if (statusTxt == 'success'){
        Headfn();
    }
});
$('footer').load('../html/footer.html .footer-wrapper');

//获取url
function getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}

/***********head.html***********/
//导航切换
function Headfn(){
    $('.head .fir-head .Login .avatar').click(function () {
        $('.head .fir-head .Login .accountMsg').toggle();
    });
    $('.head .fir-head .Login .accountMsg .logout').click(function () {
        $('.head .fir-head .Login').hide();
        $('.head .fir-head .unLogin').show();
    });
    //用户名内容框
    $('.head .fir-head .Login .accountMsg li').click(function () {
        let _index = $(this).index();
        switch (_index){
            case 0:
                sessionStorage.setItem('secHeadNav_index','3');
                window.location.href = '../html/information.html?type=0';
                break;
            case 1:
                sessionStorage.setItem('secHeadNav_index','3');
                window.location.href = '../html/information.html?type=1';
                break;
            case 2: break;
        }
    });

    //导航
    var secHeadNav_index = 0;
    if (!sessionStorage.getItem('secHeadNav_index')) {
        $('.head .sec-head .nav li').removeClass('choose');
        $('.head .sec-head .nav li').eq(secHeadNav_index).addClass('choose');
    }else{
        $('.head .sec-head .nav li').removeClass('choose');
        $('.head .sec-head .nav li').eq(sessionStorage.getItem('secHeadNav_index')).addClass('choose');
    }

    $('.head .sec-head .nav li').click(function () {
        let _index = $(this).index();
        sessionStorage.setItem('secHeadNav_index',_index);
        $(this).addClass('choose');
        $(this).siblings().removeClass('choose');
        switch(_index){
            case 0:
                window.location.href = '../html/index.html';
                break;
            case 1:
                window.location.href = '../html/introduction.html';
                break;
            case 2:
                window.location.href = '../html/strategy.html';
                break;
            case 3:
                window.location.href = '../html/product.html';
                break;
            case 4:
                window.location.href = '../html/news.html';
                break;
            case 5:
                window.location.href = '../html/contact.html';
                break;
        }
    });
}


