import {
  evento,
  exame,
  noticia_DTO,
  referencias,
  setor,
  vagasEmprego,
  bloco,
} from "./entidades";

export type localizacaoAPIretorno = {
  exames?: exame[] | exame;
  setor?: setor[] | setor;
  bloco?: bloco[] | bloco;
  andar?: string;
  coordenada?: string;
  referencias?: referencias;
};

export type noticiaAPIretorno = {
  noticias?: noticia_DTO[];
};

export type vagasAPIretorno = {
  vagas?: vagasEmprego[];
};

export type apiRetorno<T> = {
  codigoStatus?: number;
  mensagem?: string;
  existe?: boolean;
  total?: number;
  body?: T;
};

export type adminAPIretorno<T> = {
  sucesso?: boolean;
  data?: T[];
  total?: number;
  mensagem?: string;
};

//------------ Camily

export type eventosAPIretorno = {
  eventos?: evento[];
};

// Overview: estrutura aninhada bloco -> setores -> exames
export type overviewSetor = setor & {
  exames: exame[];
};

export type overviewBloco = bloco & {
  setores: overviewSetor[];
};

export type overviewAPIretorno = {
  blocos: overviewBloco[];
};

export type examesAPIretorno = {
  exames: exame[];
};

export type blocosAPIretorno = {
  blocos: bloco[];
};


