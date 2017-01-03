# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
#= require jquery
#= require jquery_ujs
#= require jquery.validate
#= require jquery.validate.additional-methods
#= require jquery.validate.localization/messages_zh
#= require jquery.validate.custom
#= require turbolinks
#= require_tree .

@handleMessage = (msg, callback = null)->
  id = guid()
  $("#faye_msg").append('<div id="'+id+'" class="aaa alert alert-message alert-info fade in"><a href="#" class="close">&times;</a><div>'+msg+'</div></div>')
  setTimeout (->
    $("#" + id).remove();
  ), 3000

  if callback
    callback()


@S4=  ()->
  (((1+Math.random())*0x10000)|0).toString(16).substring(1)

@guid= ()->
  (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
