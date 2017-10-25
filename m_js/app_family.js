//家族js


function showInfo(text) {
    $("body").addClass("overflow-hidden");
    $(".info-text").html(text);
    $(".modal-info").fadeIn(300);

    setTimeout(function () {
        $("body").removeClass("overflow-hidden");
        $(".modal-info").fadeOut(300);
    }, 1000);
}
$(".info-sure").click(function (e) {
    e.preventDefault();
    $("body").removeClass("overflow-hidden");
    $(".modal-info").hide();
});

function openHref(url) {
    $(".info-sure-2").click(function (e) {
        e.preventDefault();
        window.location.href = url;
    });
}
(function ($) {
    //获取url参数的封装函数
    //decodeURI() 和 decodeURIComponent()
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&|#)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    };
    $.mygetUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

        var r = window.location.hash.substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    };
})(jQuery);


var server = 'http://192.168.1.37:8080/qmzb';

function FamilyList() {
        var page=1;
        var keyword="";
        var data_arr=[];
        var pagesize=20;
        this.dataLoadFUC= function (keyword,page) {
            var form_2 = new FormData();
            form_2.append("keyword", keyword);
              form_2.append("page", page);
            fetch(server + "check/getFamilyList", {
                method: 'POST',
                //headers: myHeaders,
                mode: 'cors',
                cache: 'default',
                body: form_2
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if(data.code==200){
                    var li_frag=document.createDocumentFragment();
                    data_arr=data.data.list;
                    for (var i = 0; i < pagesize; i++) {
                        var element = data.data.list[i];
                        var li=document.createElement("li");
                    

                        $(li).html(`

                             <li>
                <a href="#">
                    <div class="container app-family-list-con clearfloat">
                        <div class="app-family-left">
                            <i class="app-family-icon app-family-icon-2"></i>
                            <img src="img/family_icon.jpg" alt="">
                        </div>
                        <div class="app-family-mid">
                            <p>家族名称家族名称家族名称家族名称</p>
                            <span>ID 5235223</span>
                        </div>
                        <div class="app-family-right">
                            家族收益: <span>12312312312民票</span>
                        </div>

                    </div>
                </a>

            </li>
                        `);
                        li_frag.appendChild(li);
                    }
                    //for 结束
                    $(".js_fl_list").append(li_frag);



                }else{
                    //失败
                }
            });
        };

        this.SearchdataLoadFUC= function (keyword,page) {
            var form_2 = new FormData();
            form_2.append("keyword", keyword);
              form_2.append("page", page);
            fetch(server + "check/getFamilyList", {
                method: 'POST',
                //headers: myHeaders,
                mode: 'cors',
                cache: 'default',
                body: form_2
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if(data.code==200){
                    var li_frag=document.createDocumentFragment();
                    data_arr=data.data.list;
                 
                    for (var i = 0; i < pagesize; i++) {
                        var element = data.data.list[i];
                        var li=document.createElement("li");

                        
                        $(li).html(`

                             <li>
                <a href="#">
                    <div class="container app-family-list-con clearfloat">
                        <div class="app-family-left">
                            <i class="app-family-icon app-family-icon-2"></i>
                            <img src="img/family_icon.jpg" alt="">
                        </div>
                        <div class="app-family-mid">
                            <p>家族名称家族名称家族名称家族名称</p>
                            <span>ID 5235223</span>
                        </div>
                        <div class="app-family-right">
                            家族收益: <span>12312312312民票</span>
                        </div>

                    </div>
                </a>

            </li>
                        `);
                        li_frag.appendChild(li);
                    }
                    //for 结束
                    $(".js_fl_list").html(li_frag);



                }else{
                    //失败
                }
            });
        };
        this.DataInit=function () {  
               this.dataLoadFUC(keyword,page);
        }   


    
}

var fl=new FamilyList();
fl.DataInit();