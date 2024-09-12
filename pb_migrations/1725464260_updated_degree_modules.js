/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgk5y23xc0gukrk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cproprwj",
    "name": "module_year",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 3,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "olzs4vzf",
    "name": "module_level",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 6,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bgk5y23xc0gukrk")

  // remove
  collection.schema.removeField("cproprwj")

  // remove
  collection.schema.removeField("olzs4vzf")

  return dao.saveCollection(collection)
})
