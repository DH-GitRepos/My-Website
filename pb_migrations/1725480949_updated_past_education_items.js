/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5ov2uoev81844m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xehgcd36",
    "name": "edu_chronology_order",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 20,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k5ov2uoev81844m")

  // remove
  collection.schema.removeField("xehgcd36")

  return dao.saveCollection(collection)
})
