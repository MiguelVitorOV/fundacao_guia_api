import axios from "axios";
import { apiRetorno, blocosAPIretorno } from "../src/types/apiRetornoTipos";

const URL_LOCALIZACAO_BLOCOS = "http://localhost:3003/localizacao/blocos";

describe("Testando endpoint de listar todos os blocos", () => {
  test("GET /localizacao/blocos deve retornar 200 e a lista de todos os blocos", async () => {
    const response = await axios.get(URL_LOCALIZACAO_BLOCOS);
    expect(response.status).toBe(200);

    const data = response.data as apiRetorno<blocosAPIretorno>;
    expect(data.codigoStatus).toBe(200);
    expect(data.body).toBeDefined();
    expect(data.body?.blocos).toBeDefined();
    expect(Array.isArray(data.body?.blocos)).toBe(true);
    expect(data.body?.blocos.length).toBeGreaterThan(0);
    
    // Verifica a estrutura de um bloco
    const primeiroBloco = data.body?.blocos[0];
    expect(primeiroBloco).toHaveProperty("id");
    expect(primeiroBloco).toHaveProperty("nome");
  });
});

