###*
  @file Once.js is a 0.1kb micro-library that enables you to enforce a function can only be executed once.
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