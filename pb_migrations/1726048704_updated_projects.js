/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygarncax",
    "name": "project_year",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1990,
      "max": 2100,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // remove
  collection.schema.removeField("ygarncax")

  return dao.saveCollection(collection)
})
