'use strict'

describe('models/package_json/add_dev_dependencies', () => {
  it('should match the snapshot', () => {
    const mock = {}

    jest.mock('../../package_json/get')
    const get = require('../get')
    get.mockImplementation(() => mock)

    jest.mock('../../../utils/cmd')

    const addDevDependencies = require('../add_dev_dependencies')
    addDevDependencies('foo', 'bar')

    expect(mock).toHaveProperty('devDependencies')
    expect(mock.devDependencies).toHaveProperty('foo', 'bar')
  })
})
