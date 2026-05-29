import express from "express";
import { LocalizacaoController } from "../controller/LocalizacaoController";

export const examesRouter = express.Router();
const localizacaoController = new LocalizacaoController();

examesRouter.get("/", localizacaoController.buscarTodosExames);
