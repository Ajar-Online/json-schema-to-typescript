export const input = {
  "title": "Enum",
  "type": "object",
  "properties": {
    "bar": {
      "type": "integer",
      "enum": [1, 2, 3],
      "tsEnumNames": ["One","two", "Three"]
    }
  },
  "required": ["bar"],
  "additionalProperties": false
}

export const error = true
