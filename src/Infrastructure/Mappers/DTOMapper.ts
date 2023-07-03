export interface DTOMapper<CoreModel, DTO> {
  toCoreModel(dto: DTO): CoreModel;
}
