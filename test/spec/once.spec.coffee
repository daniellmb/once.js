###
@file

## Responsibilities
- unit test once.coffee

Scaffolded with generator-microjs v0.0.10

@author Daniel Lamb <dlamb.open.source@gmail.com>
###

describe 'once.coffee', ->
  sandbox = undefined
  beforeEach ->
    # create a sandbox
    sandbox = sinon.sandbox.create()

  # stub some methods
  afterEach ->
    # restore the environment as it was before
    sandbox.restore()

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(yes).to.not.equal no

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof once).to.equal 'function'

  it 'should call the original function', ->
    # arrange
    callback = sinon.spy()
    proxy = once(callback)
    # act
    proxy()
    # assert
    assert callback.called

  it 'should call the original function only once', ->
    # arrange
    callback = sinon.spy()
    proxy = once(callback)
    # act
    proxy()
    proxy()
    # assert
    assert callback.calledOnce

  it 'should call the original function with correct context and params', ->
    # arrange
    callback = sinon.spy()
    proxy = once(callback)
    obj = {}
    # act
    proxy.call obj, 1, 2, 3
    # assert
    assert callback.calledOn(obj)
    assert callback.calledWith(1, 2, 3)

  it 'should return the return value from the original function', ->
    # arrange
    callback = sinon.stub().returns(42)
    proxy = once(callback)
    # act
    result = proxy()
    # assert
    expect(result).to.equal 42

  it 'should return the same value each time', ->
    # arrange
    callback = (input) ->
      input
    proxy = once(callback)
    # act
    proxy 1337
    result = proxy('foo')
    # assert
    expect(result).to.equal 1337