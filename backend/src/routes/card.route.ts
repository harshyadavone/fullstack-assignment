import { Router } from "express";
import {
  createCardHandler,
  getCardByIdHandler,
  getCardByTitleHandler,
  getCardsHandler,
} from "../controllers/card.controller";

const cardRouter = Router();

cardRouter.post("/cards", createCardHandler);
cardRouter.get("/cards", getCardsHandler);
cardRouter.get("/cards/:id", getCardByIdHandler);
cardRouter.post("/cards/search", getCardByTitleHandler);

export const cardRouterHandler = cardRouter;
