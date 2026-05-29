import express from "express";
import { LocalizacaoController } from "../controller/LocalizacaoController";
export const localizacaoRouter = express.Router();
const localizacaoController = new LocalizacaoController();

localizacaoRouter.get(
  "/",
  localizacaoController.buscarLocalizacaoPorParametros,
);

localizacaoRouter.get(
  "/overview",
  localizacaoController.buscarOverview,
);

localizacaoRouter.get(
  "/exames",
  localizacaoController.buscarTodosExames,
);

