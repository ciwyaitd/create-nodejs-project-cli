'use strict'

describe('models/package_json/add_dependencies', () => {
  it('should match the snapshot', () => {
    const mock = {}

    jest.mock('../../package_json/get')
    const get = require('../../package_json/get')
    get.mockImplementation(() => mock)

    jest.mock('../../../utils/cmd')

    const addDependencies = require('../add_dependencies')
    addDependencies('foo', 'bar')

    expect(mock).toHaveProperty('dependencies')
    expect(mock.dependencies).toHaveProperty('foo', 'bar')
  })
})
