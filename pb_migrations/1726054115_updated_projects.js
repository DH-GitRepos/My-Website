/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo3lqlxo",
    "name": "project_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Full-stack web application",
        "Website (static build)",
        "Website (framework build)",
        "Website (CMS build)",
        "Webiste (multi-tier)",
        "Desktop CLI application",
        "Desktop WPF application",
        "Database",
        "Pseudocode",
        "Analysis/planning task",
        "A.I. model analysis"
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
    "id": "bo3lqlxo",
    "name": "project_type",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Full-stack web application",
        "Website (static build)",
        "Website (framework build)",
        "Website (CMS build)",
        "Webiste (multi-tier)",
        "Desktop CLI application",
        "Desktop WPF application",
        "Database",
        "Pseudocode",
        "Analysis/planning task"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
