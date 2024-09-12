/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5ov2uoev81844m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3dz3xfhk",
    "name": "edu_date_range",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 4,
      "max": 255,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5ov2uoev81844m")

  // remove
  collection.schema.removeField("3dz3xfhk")

  return dao.saveCollection(collection)
})
