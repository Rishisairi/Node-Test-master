import { Entity } from "electrodb"; // ORM(Object relation mapping)

import { client } from "../util/dbconnection.js";

const Products = new Entity(
  {
    model: {
      entity: "Products",
      version: "1",
      service: "ProductsService",
    },
    attributes: {
      productId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
      },
      category: {
        type: "string",
      },
      stockQuantity: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          facets: ["productId"],
        },
        sk: {
          field: "sk",
          facets: [],
        },
      },
    },
  },
  { client, table: "products" }
);

export { Products };
