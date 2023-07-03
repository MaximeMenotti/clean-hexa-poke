import { Pokemon } from "../../core/entities/Pokemon";
import PokemonDTO from "../Dto/PokemonDTO";
import { DTOMapper } from "./DTOMapper";

export default class PokemonDTOMapper
  implements DTOMapper<Pokemon, PokemonDTO>
{
  toCoreModel(dto: PokemonDTO): Pokemon {
    return {
      id: `${dto.id}`,
      name: dto.name,
    };
  }
}
