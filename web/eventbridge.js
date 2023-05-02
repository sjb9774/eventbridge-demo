import { DeliveryMethod } from "@shopify/shopify-api";

let webhookConfigs = {};
let webhookTopics = ["PRODUCTS_CREATE", "PRODUCTS_DELETE", "PRODUCTS_UPDATE", "FULFILLMENTS_CREATE", "ORDERS_CREATE"];

webhookTopics.map((topic) => {
  webhookConfigs[topic] = {
    deliveryMethod: DeliveryMethod.EventBridge,
    arn: process.env.EVENTBRIDGE_SOURCE_ARN
  }
});

export default webhookConfigs;
