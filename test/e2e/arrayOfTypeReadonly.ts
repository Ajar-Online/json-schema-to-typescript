import { Options } from '../../src/'

export const input = {
  "title": "arrayOfTypeReadonly",
  "type": "object",
  'properties': {
    foo: {
      items: {
        "type": "string"
      },
      type: "array"
    },
    bar: {
      items: {
        "type": "string"
      },
      type: ["array"]
    },
    baz: {
      items: {
        "type": ["string", "number"]
      },
      type: ['array']
    },
    moo: {
      items: [
        {type: 'integer'},
        {type: 'string'}
      ]
    }
  }
}

export const options: Partial<Options> = {
  readonly: true
}