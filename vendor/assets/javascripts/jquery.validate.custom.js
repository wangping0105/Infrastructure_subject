/**
 * Created by pan on 14-7-16.
 */
$.validator.setDefaults({
  highlight: function (element){

    $(element).addClass('validate-input-error');
  },
  unhighlight: function (element){
    $(element).removeClass('validate-input-error');
  },
  errorPlacement: function (error, element){
    var $e = $(element);
    var inputGroup = $e.closest('.input-group');
    if(!inputGroup.length) {
      error.insertAfter($e);
    }
    else {
      error.insertAfter(inputGroup);
    }
  }
});

jQuery.extend(jQuery.validator.messages, {
  required: "必选字段",
  remote: "请修正该字段",
  email: "请输入正确格式的邮箱",
  url: "请输入正确的网址",
  date: "请输入合法的日期",
  dateISO: "请输入合法的日期 (ISO).",
  number: "请输入合法的数字",
  digits: "只能输入整数",
  creditcard: "请输入合法的信用卡号",
  equalTo: "请再次输入相同的值",
  accept: "请输入拥有合法后缀名的字符串",
  maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
  minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
  rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
  range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
  max: jQuery.validator.format("请输入一个最大为{0} 的值"),
  min: jQuery.validator.format("请输入一个最小为{0} 的值"),
  require_from_group: jQuery.validator.format("请至少输入这些字段的{0}其中一项")
});


// why not use date_min, because normalizeAttributeRule, Convert the value to a number for number inputs
// broken value fetch
jQuery.validator.addMethod("date_Min", function (value, element, param){

  return this.optional(element) || moment(value) >= moment(param);
}, jQuery.validator.messages.min);

jQuery.validator.addMethod("date_Max", function (value, element, param){
  return this.optional(element) || moment(value) <= moment(param);
}, jQuery.validator.messages.max);

/* 手机号码验证*/
jQuery.validator.addMethod("mobile", function (value, element){
  //  var length = value.length;
  // return this.optional(element)||(/^(([0\+]\d{1,5})?(\D)?1[3|4|5|7|8][0-9]\d{4,8})?$/.test(value));
  var mobile_regex = /^[/\*\+\.\-\,\;\(\)\s\d]+$/;

  return this.optional(element)||(mobile_regex.test(value));
}, "请输入正确的手机号码");

jQuery.validator.addMethod("regular_mobile", function (value, element){
  //  var length = value.length;
  // return this.optional(element)||(/^(([0\+]\d{1,5})?(\D)?1[3|4|5|7|8][0-9]\d{4,8})?$/.test(value));
  var mobile_regex = /^1\d{10,10}$/;

  return this.optional(element)||(mobile_regex.test(value));
}, "请输入正确的手机号码");

jQuery.validator.addMethod("tel", function (value, element){
// var length = value.length;
// var mobile =/^(([0\+]\d{1,5})?(\D)?1[3|4|5|7|8][0-9]\d{4,8})?$/;
// 国家代码最多5位    区号最多5位，分机号最多4位
// var tel = /^(([0\+]\d{1,5})?(\D)?(0\d{2,5}))(\D)?(\d{7,8})(\D(\d{0,4}))?$/;
// 非中文字符
// var tel=/^.*?[\u4E00-\u9FFF]+.*$/

// return this.optional(element)||!tel.test(value)||(mobile.test(value));

  var mobile_regex = /^[/\*\+\.\-\,\;\(\)\s\d]+$/;

  return this.optional(element)||(mobile_regex.test(value));
}, "请输入正确的电话号码");


/*当前元素值是否小于目标元素值*/
$.validator.addMethod('gt', function (value, element, param) {
  var $target = $(param);
  if (this.settings.onfocusout) {
    $target.unbind(".validate-lt").bind("blur.validate-lt", function () {
      $(element).valid();
    });
  }

  if (value.length > 0) {
    return value >= $target.val();
  } else {
    return true
  }
});

jQuery.validator.addMethod("regular_char", function (value, element){
  var regular_regex = /^[\da-zA-Z\u4e00-\u9fa5][\da-zA-Z0-9\u4e00-\u9fa5]*$/;

  return this.optional(element) || (value.match(regular_regex));
}, "仅支持中文、英文、数字");
