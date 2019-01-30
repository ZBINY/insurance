/***********login.html***********/
//显示登录还是注册页面
$('.login-bg .loginBox-btn p').click(function () {
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
    $(this).prependTo('.login-bg .loginBox-btn');
    if ($(this).hasClass('loginBtn')) {
        $('.login-bg .login-box .login').show();
        $('.login-bg .login-box .register').hide();
        $(document).attr("title","登录");
    }else{
        $('.login-bg .login-box .login').hide();
        $('.login-bg .login-box .register').show();
        $(document).attr("title","注册");
    }
});
/***********index.html***********/
//banner图标置底
$('.firstPage-wrapper .f-down').click(function(){
    $('html,body').animate({
            scrollTop: document.body.clientHeight + 'px'
        }, 800);
});
//保单保函搜索
$('.firstPage-wrapper .search .searchBtn').click(function(){
    $('.firstPage-wrapper .search .qualification-box').show();
});
$('.firstPage-wrapper .search .qualification-box').click(function () {
    $('.firstPage-wrapper .search .qualification-box').hide();
});
$('.firstPage-wrapper .search .qualification-box .con').click(function (e) {
    event.stopPropagation();//阻止事件冒泡
});

//产品服务hover
$('.firstpage-fir .content-wrapper .con').hover(function () {
    $(this).children('.title-box').addClass('choose');
    $(this).children('.detail').show();
},function(){
    $(this).children('.title-box').removeClass('choose');
    $(this).children('.detail').hide();
});
//产品服务立即加入
$('.firstpage-fir .content-wrapper .con .join').click(function(){
    sessionStorage.setItem('secHeadNav_index','3');
    window.location.href = '../html/product.html';
});
//产品服务查看更多
$('.firstpage-fir .content-wrapper .more').click(function(){
    sessionStorage.setItem('secHeadNav_index','3');
    window.location.href = '../html/product.html';
});

//资讯中心左侧hover
$('.firstpage-sec .content-wrapper .lft .con-wrapper li').hover(function () {
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
},function(){
    $(this).siblings().removeClass('choose');
});
$('.firstpage-sec .content-wrapper .lft .con-wrapper li').click(function(){
    sessionStorage.setItem('secHeadNav_index','4'); //header选中状态
});
//资讯中心查看更多
$('.firstpage-sec .content-wrapper .lft .more').click(function(){
    sessionStorage.setItem('secHeadNav_index','4');
    window.location.href = '../html/news.html';
});

//固定侧栏
$('.firstPage-wrapper .slideBox .con').hover(function(){
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');
    $(this).children('.name').show();
    //切换图片
    let _src = $(this).children('.imgs').children('img').attr('src').replace('.png','') + '-c.png';
    // console.log(_src);
     $(this).children('.imgs').children('img').attr('src',_src);
},function(){
    $(this).removeClass('choose');
    $(this).children('.name').hide();
    let _src = $(this).children('.imgs').children('img').attr('src').replace('-c','');
    // console.log(_src);
    $(this).children('.imgs').children('img').attr('src',_src);
});

$('.firstPage-wrapper .slideBox .f-top').click(function(){
    $('html,body').animate({
        scrollTop: 0
    }, 800);
});

/***********product.html***********/

/***********productDetail.html***********/
//tab切换
$('.productDetail .productDetail-msg .content-wrapper .nav ul li').click(function () {
    let _index = $(this).index();
   $(this).addClass('choose');  //选中添加样式.choose
   $(this).siblings().removeClass('choose');
    //对应的内容框显示
    $('.productDetail .productDetail-msg .content-wrapper .nav-content .content').hide();
    $('.productDetail .productDetail-msg .content-wrapper .nav-content .content').eq(_index).show();
});


/***********orderDetail.html***********/
$('.orderDetail .orderDetail-head .rgt .status-box .choose').last().css({'borderTopRightRadius':'10px','borderBottomRightRadius':'10px'});

/***********introduction.html***********/
//tab切换
$('.introduction-wrapper .nav p').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');  //选中添加样式.choose
    $(this).siblings().removeClass('choose');

    if (_index == 0){
        $('.introduction-wrapper .introduction-container .title-color h1').text('平台简介');
    }else{
        $('.introduction-wrapper .introduction-container .title-color h1').text('平台荣誉');
    }
    //对应的内容框显示
    $('.introduction-wrapper .introduction-container .content-wrapper').hide();
    $('.introduction-wrapper .introduction-container .content-wrapper').eq(_index).show();
});

/***********information.html***********/
//二级菜单切换
$('.information-wrapper .information-container .titleBar .name').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');

    if (_index == 0){
        $('.information-wrapper .information-container .titleBar .line').eq(0).css('borderBottomColor','#d3d3d3');
        $('.information-wrapper .information-container .information-content').hide();
        $('.information-wrapper .information-container .information-content1').show();
        var _chooseIndex = $('.information-wrapper .information-container .information-content1 .nav-bar').find('.choose').index();
        // console.log(_chooseIndex)
        $('.information-wrapper .information-container .information-content2 .content').hide();
        $('.information-wrapper .information-container .information-content2 .content').eq(_chooseIndex).show();
    }else{
        $('.information-wrapper .information-container .titleBar .line').eq(0).css('borderBottomColor','#0066cc');
        $('.information-wrapper .information-container .information-content').hide();
        $('.information-wrapper .information-container .information-content2').show();


        var _chooseIndex = $('.information-wrapper .information-container .information-content2 .nav-bar').find('.choose').index();
        // console.log(_chooseIndex)
        $('.information-wrapper .information-container .information-content2 .content').hide();
        $('.information-wrapper .information-container .information-content2 .content').eq(_chooseIndex).show();
    }
});
//左侧导航栏切换
//订单中心
$('.information-wrapper .information-content1 .nav-bar li').click(function(){
    let _index = $(this).index();
    let _name = $(this).text();

    //当前标签没有choose执行
    if ($(this).hasClass('choose')){
        // alert(1)
    } else{
        $(this).addClass('choose');
        $(this).siblings().removeClass('choose');

        //选择图标变成蓝色
        let _src = $(this).children('i').children('img').attr('src').replace('.png','') + '-c.png';
        // console.log(_src);
        $(this).children('i').children('img').attr('src',_src);

        //其他图标为灰色
        var arrimg = $(this).siblings().children('i').children('img');
        $.each(arrimg,function(i,v){
            let _src = $(v).attr('src').replace('-c','');
            $(v).attr('src',_src)
        });

        // $('.information-wrapper .information-content .content .title').text(_name); //右侧标题

        $('.information-wrapper .information-content1 .content').hide();
        $('.information-wrapper .information-content1 .content').eq(_index).show();
    }
});
//账号管理
$('.information-wrapper .information-content2 .nav-bar li').click(function(){
    let _index = $(this).index();

    //当前标签没有choose执行
    if ($(this).hasClass('choose')){
        // alert(1)
    } else{
        $(this).addClass('choose');
        $(this).siblings().removeClass('choose');

        //选择图标变成蓝色
        let _src = $(this).children('i').children('img').attr('src').replace('.png','') + '-c.png';
        $(this).children('i').children('img').attr('src',_src);

        //其他图标为灰色
        var arrimg = $(this).siblings().children('i').children('img');
        $.each(arrimg,function(i,v){
            let _src = $(v).attr('src').replace('-c','');
            $(v).attr('src',_src)
        });

        $('.information-wrapper .information-content2 .content').hide();
        $('.information-wrapper .information-content2 .content').eq(_index).show();
    }
});
//账号管理-个人信息-编辑
$('.information-wrapper .I-grxx .edit').click(function(){
    $('.information-wrapper .I-grxx .con .name input').val('');
});
//账号管理-地址管理
//增加
$('.information-wrapper .I-dzgl .title .add').click(function(){
    $('.information-wrapper .I-dzgl .con .address-add').show();
    $('.information-wrapper .I-dzgl .con .address-add .return').click(function () {
        $('.information-wrapper .I-dzgl .con .address-add').hide();
    })
});
//删除
$('.information-wrapper .I-dzgl .con .address-delete table .del').click(function(){
    let _index = $(this).parent().parent().index();
    $('.information-wrapper .I-dzgl .con .address-delete tbody tr').eq(_index).remove();
});
//账号管理-发票抬头
//编辑
$('.information-wrapper .I-fptt .con .invoice-mr .edit').click(function () {
    $('.information-wrapper .I-fptt .con .invoice-mr input[type="text"]').attr('disabled',false);
    $('.information-wrapper .I-fptt .con .invoice-mr input[type="text"]').val('');
});
//增加
$('.information-wrapper .I-fptt .title .add').click(function(){
    $('.information-wrapper .I-fptt .con .invoice-add').show();
    $('.information-wrapper .I-fptt .con .invoice-add .return').click(function () {
        $('.information-wrapper .I-fptt .con .invoice-add').hide();
    })
});
//账号管理-账户安全
//修改登录密码
$('.information-wrapper .I-zhaq .acc-lft .pwd-box .change').click(function () {
    $('.information-wrapper .I-zhaq .acc-rgt .change-pwd').show();
    $('.information-wrapper .I-zhaq .acc-rgt .change-phone').hide();

    //修改框提交
    $('.information-wrapper .I-zhaq .acc-rgt .change-pwd .submitBtn').click(function () {
        $('.information-wrapper .I-zhaq .acc-rgt .change-pwd').hide();
    })
});
//修改认证手机
$('.information-wrapper .I-zhaq .acc-lft .phone-box .change').click(function () {
    $('.information-wrapper .I-zhaq .acc-rgt .change-phone').show();
    $('.information-wrapper .I-zhaq .acc-rgt .change-pwd').hide();

    //获取验证码
    $('.information-wrapper .I-zhaq .acc-rgt .change-phone .getIdenfityCode').click(function () {
        settime($(this));
    });
    //修改框提交
    $('.information-wrapper .I-zhaq .acc-rgt .change-phone .submitBtn').click(function () {
        $('.information-wrapper .I-zhaq .acc-rgt .change-phone').hide();
    });
});

var countdown=60; //倒计时时长
function settime(obj) { //发送验证码倒计时
    if (countdown == 0) {
        obj.attr('disabled',false);
        obj.val("获取验证码");
        countdown = 60;
        return;
    } else {
        obj.attr('disabled',true);
        obj.val("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {
            settime(obj) }
        ,1000)
}


//账号管理-企业认证
//tab
$('.information-wrapper .I-qyrz .con .tab-bar p').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');

    $('.information-wrapper .I-qyrz .con .tab-con-wrapper .tab-content').hide();
    $('.information-wrapper .I-qyrz .con .tab-con-wrapper .tab-content').eq(_index).show();
});
//查看详情
$('.information-wrapper .I-qyrz .con .tab-con-wrapper .view-btn').click(function(){
    $(this).parent().css('position','relative');
    $(this).parent().append(viewDetail());
});
//账号管理-消息通知
//查看详情
$('.information-wrapper .I-xxtz .con .table-wrapper .status').click(function(){
    $(this).parent().css('position','relative');
    $(this).parent().append(viewDetail2());
});

//订单中心-我的订单
//tab
$('.information-wrapper .I-wddd .con .tab-bar p').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');

    $('.information-wrapper .I-wddd .con .tab-con-wrapper .tab-content').hide();
    $('.information-wrapper .I-wddd .con .tab-con-wrapper .tab-content').eq(_index).show();
});
//订单详情跳转
$('.information-wrapper .I-wddd .con .view-detail').click(function () {
    window.location.href="../html/orderDetail.html";
});
//删除
$('.information-wrapper .I-wddd .con .delete').click(function () {
    $(this).parent().parent().remove();
});
//订单中心-完善订单
//tab
$('.information-wrapper .I-wsdd .con .tab-bar p').click(function () {
    let _index = $(this).index();
    $(this).addClass('choose');
    $(this).siblings().removeClass('choose');

    $('.information-wrapper .I-wsdd .con .tab-con-wrapper .tab-content').hide();
    $('.information-wrapper .I-wsdd .con .tab-con-wrapper .tab-content').eq(_index).show();
});
/***********newsDetail.html***********/
(function closeWindow() {
    clearInterval(t)
})();
var i=1;
function showPic() {
    if (i == 1){
        i = 2;
        $('.newsDetail-wrapper .news-container .rgt .lxfs').html('微信：123456');
    }else{
        i = 1;
        $('.newsDetail-wrapper .news-container .rgt .lxfs').html('QQ:1234567891');
    }
}
var t= window.setInterval("showPic()", 5000);
/***********strategy.html***********/
//加入我们
$('.strategy-wrapper .join-btn').click(function(){
    $('.strategy-wrapper .join-container').show();
    $('body,html').css('overflow','hidden');
    funShowDivCenter($('.strategy-wrapper .join-container .joinBox'));
});
//让指定的DIV始终显示在屏幕正中间
function funShowDivCenter(div) {
    var top = ($(window).height() - $(div).height()) / 2;
    var left = ($(window).width() - $(div).width()) / 2;
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    $(div).css({ position: 'absolute', 'top': top + scrollTop, left: left + scrollLeft }).show();
}

//加入我们弹窗关闭
$('.strategy-wrapper .join-container').on('click','.close',function () {
    $('.strategy-wrapper .join-container').hide();
    $('body,html').css('overflow','auto');
});
//加入我们弹窗提交
$('.strategy-wrapper .join-container').on('click','.submitBtn',function () {
    $('.strategy-wrapper .join-container').hide();
    $('body,html').css('overflow','auto');
});
