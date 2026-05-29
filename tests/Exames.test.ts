import axios from "axios";
import { AxiosError } from "axios";
import { apiRetorno, examesAPIretorno } from "../src/types/apiRetornoTipos";

const URL_EXAMES = "http://localhost:3003/exames";
const URL_LOCALIZACAO_EXAMES = "http://localhost:3003/localizacao/exames";

describe("Testando endpoint de listar todos os exames", () => {
  test("GET /exames deve retornar 200 e a lista de todos os exames", async () => {
    const response = await axios.get(URL_EXAMES);
    expect(response.status).toBe(200);

    const data = response.data as apiRetorno<examesAPIretorno>;
    expect(data.codigoStatus).toBe(200);
    expect(data.body).toBeDefined();
    expect(data.body?.exames).toBeDefined();
    expect(Array.isArray(data.body?.exames)).toBe(true);
    expect(data.body?.exames.length).toBeGreaterThan(0);
    
    // Verifica a estrutura de um exame
    const primeiroExame = data.body?.exames[0];
    expect(primeiroExame).toHaveProperty("id");
    expect(primeiroExame).toHaveProperty("nome");
    expect(primeiroExame).toHaveProperty("descricao");
    expect(primeiroExame).toHaveProperty("local_id");
  });

  test("GET /localizacao/exames deve retornar 200 e a lista de todos os exames", async () => {
    const response = await axios.get(URL_LOCALIZACAO_EXAMES);
    expect(response.status).toBe(200);

    const data = response.data as apiRetorno<examesAPIretorno>;
    expect(data.codigoStatus).toBe(200);
    expect(data.body).toBeDefined();
    expect(data.body?.exames).toBeDefined();
    expect(Array.isArray(data.body?.exames)).toBe(true);
    expect(data.body?.exames.length).toBeGreaterThan(0);
  });
});
