var EFECTS = {};
EFECTS.menu = {};

EFECTS.menu.openOption = function () {
    $(".select-for").click(function () {
    		var dad = $(this).parent().attr('id');
        $("#"+dad+ " #option-for, #"+dad+ " .btnClose").removeClass('d-nn');
        $(this).removeClass('no-brd');
        $("#loadShare").removeClass('aniM' + url);
        $("#loadShare").addClass('aniM' + url + 'G');
        EFECTS.menu.totalTag();
    });
};
EFECTS.menu.closeOption = function () {
    $(".btnClose").click(function () {
        var dad = $(this).closest(".select-option").attr("id");
        EFECTS.menu.actionClose(dad);
    });
};

EFECTS.menu.actionClose = function (dad) {
    $("#"+dad+ " #option-for, #"+dad+ " .btnClose").addClass('d-nn');
    $("#loadShare").removeClass('aniM' + url + 'G');
    $("#loadShare").addClass('aniM' + url);
    $("#"+dad+ " .select-for").addClass('no-brd');
    $(".media-share .select-for, .link-share .select-for").removeClass('no-brd');
};

// Adiciona as Tags
EFECTS.menu.addTag = function () {
    $(".option-item").click(function () {
    		var $dad = $(this).closest(".select-option");
        var txtTag = $(this).text();
        var txtId = $(this).attr("id");
        if (txtId === '0') {
            typeClass = "publico";
        } else {
            typeClass = "turma";
        }
        $(".txtInfo").hide();
        console.log($dad.attr("id"));
        $dad.find(".for-add").append('<span id="' + txtId + '" class="tag-select ' + typeClass + '">' + txtTag + '<span class="del-tag">+</span></span>');
        $(this).addClass("d-nn");
        EFECTS.menu.rmv();
    });
};
//Remove as Tags
EFECTS.menu.rmv = function () {
    $(".del-tag").click(function () {
    		var dad = $(this).closest(".select-option").attr("id");
        var tagId = $(this).parent().attr("id");
        $("#"+dad+" .for-add #"+ tagId).remove();
        $("#"+dad+" #option-for").find("#" + tagId).removeClass('d-nn');
    });
};
// Verifica quantas tags
/*EFECTS.menu.totalTag = function (dad) {
    nTag = $("#"+dad+" .for-add .tag-select").length;
    nItem = $("#"+dad+" #option-for .option-item").length;
    pub = $("#"+dad+" .for-add .publico').length;
    if (pub == 1) {
        //$("#option-for").find("#0").remove();
    }
    if (nTag == 0) {
        $(".for-add .txtInfo").show();
    }
};*/

EFECTS.menu.openOption();
EFECTS.menu.closeOption();
EFECTS.menu.addTag();
EFECTS.menu.rmv();
