/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "282hcx1j7yigd9x",
    "created": "2024-09-11 09:47:17.198Z",
    "updated": "2024-09-11 09:47:17.198Z",
    "name": "projects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q7uogqhr",
        "name": "project_title",
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
        "id": "nafmndnn",
        "name": "build_date",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 50,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "1np6mavw",
        "name": "project_description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 1500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yppwwt2w",
        "name": "website_link",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "nkmy2ob0",
        "name": "website_link_url",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "llbjs2tu",
        "name": "github_link",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "py4hyrlx",
        "name": "github_link_url",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ulghbzfw",
        "name": "screenshot_present",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jzaani1g",
        "name": "screenshot_image",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 255,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("282hcx1j7yigd9x");

  return dao.deleteCollection(collection);
})
