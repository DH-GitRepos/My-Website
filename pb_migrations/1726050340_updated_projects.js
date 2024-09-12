/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oo6i5k8n",
    "name": "project_category",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "client",
        "uni"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oo6i5k8n",
    "name": "project_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "client",
        "uni"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
