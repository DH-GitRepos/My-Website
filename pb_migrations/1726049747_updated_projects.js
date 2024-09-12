/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yuodczvx",
    "name": "module_title",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Software development and application modelling",
        "Web development and operating systems",
        "networking concepts and cyber security",
        "commercial computing",
        "databases and data structures",
        "server-side programming",
        "mobile app development",
        "Introduction to A.I.",
        "Clean coding and concurren programming",
        "developing with web frameworks",
        "Web and A.I.",
        "Final year project"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // remove
  collection.schema.removeField("yuodczvx")

  return dao.saveCollection(collection)
})
