import { connection } from "../dbConnection";
import { bloco, exame, setor } from "../types/entidades";

export class LocalizacaoData {
  buscarExames = async (exame: string): Promise<exame> => {
    try {
      const exames = await connection
        .select("*")
        .from("exames")
        .whereLike("nome", exame)
        .first();
      return exames;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  };

  buscarSetorPorId = async (setorId: number): Promise<setor> => {
    try {
      const setor = await connection()
        .select("*")
        .from("local")
        .where("id", setorId)
        .first();
      return setor;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarExamesPorSetor = async (setorId: number): Promise<exame[]> => {
    try {
      const setor = await connection()
        .select("*")
        .from("exames")
        .where("local_id", setorId);

      return setor;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarSetoresPorBloco = async (blocoId: number): Promise<setor[]> => {
    try {
      const setor = await connection()
        .select("*")
        .from("local")
        .where("bloco_id", blocoId);

      return setor;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarSetor = async (setor: string): Promise<setor> => {
    try {
      const setorAchado = await connection()
        .select("*")
        .from("local")
        .where("tipo", "setor")
        .andWhereLike("nome", setor)
        .first();

      return setorAchado;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarBloco = async (bloco: string): Promise<bloco> => {
    try {
      const exames = await connection
        .select("*")
        .from("blocos")
        .whereLike("nome", bloco)
        .first();

      return exames;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarBlocoPorId = async (blocoId: number): Promise<bloco> => {
    try {
      const bloco = await connection()
        .select("*")
        .from("blocos")
        .where("id", blocoId)
        .first();

      return bloco;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  // ---- Overview ----

  buscarTodosBlocos = async (): Promise<bloco[]> => {
    try {
      return await connection().select("*").from("blocos");
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarTodosSetores = async (): Promise<setor[]> => {
    try {
      return await connection().select("*").from("local");
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarTodosExames = async (): Promise<exame[]> => {
    try {
      return await connection().select("*").from("exames");
    } catch (err: any) {
      throw new Error(err);
    }
  };
}

