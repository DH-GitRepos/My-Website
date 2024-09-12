/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // remove
  collection.schema.removeField("nafmndnn")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nafmndnn",
    "name": "build_date",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
