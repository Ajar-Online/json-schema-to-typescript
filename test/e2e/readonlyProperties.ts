import { Options } from '../../src/'

export const input = {
  title: 'ReadonlyExample',
  type: 'object',
  properties: {
    foo: {
      type: 'string'
    },
    bar: {
      type: 'number'
    }
  },
  required: ['foo', 'bar'],
  additionalProperties: false
}

export const options: Partial<Options> = {
  readonly: true
}