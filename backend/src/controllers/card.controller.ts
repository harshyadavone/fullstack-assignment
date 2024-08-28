import { Request, Response } from "express";
import { Card, ICard } from "../models/card.model";

export const createCardHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description, link }: ICard = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const newCard = new Card({ title, description, link });
    await newCard.save();

    console.log(`Card created: ${newCard._id}`);
    return res.status(201).json({
      success: true,
      message: "Card created successfully",
      data: newCard,
    });
  } catch (error) {
    console.error(`Error creating card: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Error creating card",
    });
  }
};

export const getCardsHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const cards = await Card.find().select("-__v");

    console.log(`Retrieved ${cards.length} cards`);
    return res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    console.error(`Error getting cards: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Error retrieving cards",
    });
  }
};

export const getCardByIdHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Card ID is required",
      });
    }

    const card = await Card.findById(id).select("-__v");

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }

    console.log(`Retrieved card: ${id}`);
    return res.status(200).json({
      success: true,
      data: card,
    });
  } catch (error) {
    console.error(`Error getting card: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Error retrieving card",
    });
  }
};

export const getCardByTitleHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Card ID is required",
      });
    }

    const cards = await Card.find(
      { $text: { $search: title } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    if (!cards) {
      return res.status(404).json({
        success: false,
        message: "No Cards Found",
      });
    }

    return res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    console.error(`Error getting cards: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Error retrieving cards",
    });
  }
};
