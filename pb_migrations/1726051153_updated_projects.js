/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stxntrmx",
    "name": "technologies_list",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stxntrmx",
    "name": "technologies_list",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 5,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
