import { Request, Response } from "express";
import { ResponseBuilder } from "../ResponseBuilder";
import { LocalizacaoBusiness } from "../business/LocalizacaoBusiness";
import {
  localizacaoAPIretorno,
  overviewAPIretorno,
  examesAPIretorno,
  blocosAPIretorno,
} from "../types/apiRetornoTipos";
import { catchErros } from "../types/entidades";

export class LocalizacaoController {
  private localizacaoBusiness = new LocalizacaoBusiness();

  buscarLocalizacaoPorParametros = async (req: Request, res: Response) => {
    const responseBuilder = new ResponseBuilder<localizacaoAPIretorno>();

    try {
      const { exame, setor, bloco } = req.query;

      console.log("Controller -> " + exame || setor);

      if (
        (!exame || exame.toString().trim().length === 0) &&
        (!setor || setor.toString().trim().length === 0) &&
        (!bloco || bloco.toString().trim().length === 0)
      ) {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_ERRO_USUARIO,
        );

        responseBuilder.adicionarMensagem(
          "Parametro 'exame', 'setor' e 'bloco'  esta incorreto, não existe ou invalido! e obrigatorio pelo menos 1 filtro de busca",
        );

        throw new Error(catchErros.CLIENTE);
      }

      await this.localizacaoBusiness.obterLocalizacaoPorParametros(
        responseBuilder,
        exame?.toString(),
        setor?.toString(),
        bloco?.toString(),
      );

      responseBuilder.construir(res);
    } catch (err: any) {
      if ((err.message = catchErros.CLIENTE)) {
        responseBuilder.construir(res);
      } else {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_SERVER_ERROR,
        );

        responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
        responseBuilder.construir(res);
      }
    }
  };

  buscarOverview = async (_req: Request, res: Response) => {
    const responseBuilder = new ResponseBuilder<overviewAPIretorno>();

    try {
      await this.localizacaoBusiness.obterOverview(responseBuilder);
      responseBuilder.construir(res);
    } catch (err: any) {
      if (err.message === catchErros.CLIENTE) {
        responseBuilder.construir(res);
      } else {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_SERVER_ERROR,
        );
        responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
        responseBuilder.construir(res);
      }
    }
  };

  buscarTodosExames = async (_req: Request, res: Response) => {
    const responseBuilder = new ResponseBuilder<examesAPIretorno>();

    try {
      await this.localizacaoBusiness.obterTodosExames(responseBuilder);
      responseBuilder.construir(res);
    } catch (err: any) {
      if (err.message === catchErros.CLIENTE) {
        responseBuilder.construir(res);
      } else {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_SERVER_ERROR,
        );
        responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
        responseBuilder.construir(res);
      }
    }
  };

  buscarTodosBlocos = async (_req: Request, res: Response) => {
    const responseBuilder = new ResponseBuilder<blocosAPIretorno>();

    try {
      await this.localizacaoBusiness.obterTodosBlocos(responseBuilder);
      responseBuilder.construir(res);
    } catch (err: any) {
      if (err.message === catchErros.CLIENTE) {
        responseBuilder.construir(res);
      } else {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_SERVER_ERROR,
        );
        responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
        responseBuilder.construir(res);
      }
    }
  };
}
