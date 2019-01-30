function viewDetail(){
    var a = '<div class="I-alertbox-wrapper">\n' +
        '<ul class="I-alertbox">' +
        '<li><span class="name">企业名称：</span><span class="valuetxt">内蒙古自治区建筑业协会</span></li>' +
        '<li><span class="name">统一社会信用代码：</span><span class="valuetxt"></span></li>' +
        '<li><span class="name">营业执照：</span><span class="valuetxt"></span></li>' +
        '<li><span class="name">营业执照：</span><span class="valuetxt"></span></li>' +
        '<li><span class="name">开户许可证：</span><span class="valuetxt"></span></li>' +
        '<li><input type="button" value="返回" class="return"></li>' +
        '</ul></div>';

    $('body').on('click','.I-alertbox-wrapper .I-alertbox .return',function(){
        $(this).parent().parent().remove();
    });

    return a;
}


function viewDetail2(){
    var a = '<div class="I-alertbox-wrapper">\n' +
        '<div class="I-alertbox2">' +
        '<p>现代保险业伴随着人类已经走过了300多年的历史。人类历史的发展，一直与海洋密不可分，于是海上保险自然成为了人类各种保险中起源最早的险种，由于海上保险的发展，才带动了整个保险业的繁荣与发展。保险业发展到今天，已与银行业和证券业等一道支撑着全球的金融体制。目前为止，在全球500强企业中保险公司占据了50家以上，显示了其强大的发展势头。</p>'+
        '<input type="button" value="返回" class="return">'+
        '</div>' +
        '</div>';

    $('body').on('click','.I-alertbox-wrapper .I-alertbox2 .return',function(){
        $(this).parent().parent().remove();
    });

    return a;
}