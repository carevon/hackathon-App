export default interface IGateway {
    createAppointment(
        registry_number:number, 
    ) : Promise<any>;
    getAll():Promise<any>;
    getIntradayRecordsByRegistryNumber(registry_number: number): Promise<any>;
}