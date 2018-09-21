'use strict'

describe('models/koa/add_dependencies', () => {
  it('should math the snapshot', () => {
    const mock = {}

    jest.mock('../../package_json/get')
    const get = require('../../package_json/get')
    get.mockImplementation(() => mock)

    jest.mock('../../../utils/cmd')

    const addDependencies = require('../add_dependencies')
    addDependencies()

    expect(mock).toMatchSnapshot()
  })
})
