/**
 * Created by hp on 24-08-2017.
 */

//function go()
//{
//    var id = $(this).attr('data-id');
//    console.log(id);
//    $(id).css({'display':'block'});
//    $('.wraps_common').css({'display':'none'});
//
//}


function person_next()
{
    $('.documents_wrap').css({'display':'none'});
    $('.company_wrap').css({'display':'block'});
    $('.personal_wrap').css({'display':'none'});
    $('.person_blk').addClass("green_bg");
    $('.comp_blk').addClass("green");
}
function person_prev()
{
    $('.documents_wrap').css({'display':'none'});
    $('.company_wrap').css({'display':'none'});
    $('.personal_wrap').css({'display':'block'});
    $('.person_blk').removeClass("green_bg");
    $('.comp_blk').removeClass("green");
}
function company_next()
{
    $('.documents_wrap').css({'display':'block'});
    $('.company_wrap').css({'display':'none'});
    $('.personal_wrap').css({'display':'none'});
    $('.comp_blk').addClass("green_bg");
    $('.req_blk').addClass("green");
}
function doc_prev()
{
    $('.documents_wrap').css({'display':'none'});
    $('.company_wrap').css({'display':'block'});
    $('.personal_wrap').css({'display':'none'});
    $('.comp_blk').removeClass("green_bg");
    $('.req_blk').removeClass("green");
}
function rad_act()
{
    $(".radio").removeClass('active');
    $(this).addClass('active');
}
function top_mov()
{
    $('html, body').animate({scrollTop: '0px'}, 300);
}
function navig()
{
    $('.content_wrap').css({'display':'block'});
    $('.content_navigation').css({'display':'none'});
}
function init() {
    //$('.go_btn ').click(go);

    $('.personal').click(person_next);
    $('.pr_company').click(person_prev);
    $('.company').click(company_next);
    $('.pr_doc').click(doc_prev);
    $('.radio').click(rad_act);
    $('.to_top').click(top_mov);
    $('.to_nav_tab').click(navig);
}
$(document).ready(init);