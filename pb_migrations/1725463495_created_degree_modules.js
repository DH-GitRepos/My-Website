/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bgk5y23xc0gukrk",
    "created": "2024-09-04 15:24:55.325Z",
    "updated": "2024-09-04 15:24:55.325Z",
    "name": "degree_modules",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "km8j8hzb",
        "name": "module_title",
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
        "id": "3bm4mnfm",
        "name": "module_content",
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
  const collection = dao.findCollectionByNameOrId("bgk5y23xc0gukrk");

  return dao.deleteCollection(collection);
})
