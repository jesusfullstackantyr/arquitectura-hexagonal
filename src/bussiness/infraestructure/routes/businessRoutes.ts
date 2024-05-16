import express,{ Router } from "express";
import { createBusinessController, detailBusinessController, listingBusinessController, removeBusinessController } from "../dependencies";

export const businessRouter:Router = express.Router();

businessRouter.get('/',listingBusinessController.execute.bind(listingBusinessController));
businessRouter.get('/:id',detailBusinessController.execute.bind(detailBusinessController));
businessRouter.post('/',createBusinessController.execute.bind(createBusinessController));
businessRouter.delete('/:id',removeBusinessController.execute.bind(removeBusinessController));
