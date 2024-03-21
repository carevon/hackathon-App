export interface GetIntraDayRecordInputDTO {
    registry_number:number, 
  }
  
  export interface GetIntraDayRecordOutputDTO {
    hasError: boolean;
    message?: string;
    result?: GetIntraDayRecordInputDTO[];
    array_errors?: string[];
  }
  
  export interface QueryParamsDTO {
    paramId: number;
  }