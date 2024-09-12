/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k5ov2uoev81844m",
    "created": "2024-09-04 20:11:23.255Z",
    "updated": "2024-09-04 20:11:23.255Z",
    "name": "past_education_items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wqe6kxje",
        "name": "edu_title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lz04nhdi",
        "name": "edu_establishment",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sumxlnvn",
        "name": "edu_result",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dcsohkns",
        "name": "edu_description",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 5,
          "max": 1000,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k5ov2uoev81844m");

  return dao.deleteCollection(collection);
})
