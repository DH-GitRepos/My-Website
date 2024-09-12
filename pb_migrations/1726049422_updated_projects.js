/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9nukprc",
    "name": "client_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // remove
  collection.schema.removeField("t9nukprc")

  return dao.saveCollection(collection)
})
