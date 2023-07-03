import { PokemonRepository } from "../../core/repositories/PokemonRepository";
import { Http } from "../../core/repositories/Http";
import PokemonDTOMapper from "../Mappers/PokemonDTOMapper";
import PokemonDTO from "../Dto/PokemonDTO";

export const pokeApiRepository = (client: Http): PokemonRepository => ({
  getPokemon: async (id: string) => {
    const pokemonDTO = await client.get<PokemonDTO>(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    const mapper = new PokemonDTOMapper();
    return mapper.toCoreModel(pokemonDTO);
  },
});
