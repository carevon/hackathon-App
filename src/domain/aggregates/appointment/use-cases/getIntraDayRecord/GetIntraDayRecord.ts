import DynamoGateway from "../../gateway/DynamoGateway";
import IGateway from "../../interfaces/Gateway";
import IUseCase from "../../interfaces/UseCase";
import { GetIntraDayRecordInputDTO, QueryParamsDTO } from "./GetIntraDayRecordDTO";

export default class GetIntraDayRecord implements IUseCase {
    input: GetIntraDayRecordInputDTO;
    gateway: IGateway;

    mock = `[
        {
          "time": "2024-03-20T22:54:58.330Z",
          "registry_number": "123456",
          "id": "123456"
        }
      ]`

    constructor(input: GetIntraDayRecordInputDTO, gateway: IGateway) {
        this.input = input;
        this.gateway = gateway;
    }

    async execute(input: GetIntraDayRecordInputDTO): Promise<any> {
        try {
            // Buscar registros de ponto para o userId fornecido
            const records = await this.gateway.getIntradayRecordsByRegistryNumber(input.registry_number);
            // adicionar filtragem aqui
            return records;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Erro ao buscar registros: ${error.message}`);
            } else {
                // Se não for uma instância de Error, tratar de forma genérica
                throw new Error("Erro desconhecido ao buscar registros.");
            }
        }
    }
}