'use strict'

describe('models/eslint/add_dependencies', () => {
  it('should match the snapshot when input an expected style', () => {
    const mock = {}

    jest.mock('../../package_json/get')
    const get = require('../../package_json/get')
    get.mockImplementation(() => mock)

    jest.mock('../../../utils/cmd')

    const addDependencies = require('../add_dependencies')
    addDependencies('Standard')

    expect(mock).toMatchSnapshot()
  })

  it('should throw error when input an unexpected style', () => {
    const mock = {}

    jest.mock('../../package_json/get')
    const get = require('../../package_json/get')
    get.mockImplementation(() => mock)

    jest.mock('../../../utils/cmd')

    const addDependencies = require('../add_dependencies')

    expect(() => addDependencies('xxx')).toThrow()
  })
})
