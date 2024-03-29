import {Router} from "express";
import Order from "../controllers/order/index.js";
import {verifyAccessToken} from "../helpers/jwt.js";

const router = Router();

/**
 * @openapi
 * /order:
 *      post:
 *          tags:
 *              - Order
 *          summary: Create a new order
 *          security:
 *              - bearerAuth: []
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Order'
 *          responses:
 *              '201':
 *                  description: Order created successfully
 *              '400':
 *                  description: Invalid address or items
 *              '401':
 *                  $ref: '#/components/responses/UnauthorizedError'
 * */
router.post("/", verifyAccessToken , Order.Create);

/**
 * @openapi
 * /order:
 *      get:
 *          tags:
 *              - Order
 *          summary: Get a list of all orders
 *          responses:
 *              '200':
 *                  description: A list of all orders
 * */
router.get("/", Order.List);

/**
 * @openapi
 * /order/my-orders:
 *      get:
 *          tags:
 *              - Order
 *          summary: Get user's orders
 *          security:
 *              - bearerAuth: []
 *          responses:
 *              '200':
 *                  description: Successfully retrieved user's orders
 *              '401':
 *                  $ref: '#/components/responses/UnauthorizedError'
 * */
router.get("/my-orders", verifyAccessToken, Order.GetMyOrders);

export default router;
