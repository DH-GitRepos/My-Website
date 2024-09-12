/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgk5y23xc0gukrk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8kurdj8",
    "name": "module_id",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgk5y23xc0gukrk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8kurdj8",
    "name": "module_id",
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
