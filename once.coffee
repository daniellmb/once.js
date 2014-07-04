###*
  @file once.js was created using generator-microjs.
  Scaffolded with generator-microjs v0.0.10
  @author Daniel Lamb <dlamb.open.source@gmail.com>
###

once = (fn) ->
  ran = no
  result = undefined
  proxy = ->
    return result if ran
    ran = yes
    result = fn.apply(@, arguments)
    fn = null # for garbage collection
    result