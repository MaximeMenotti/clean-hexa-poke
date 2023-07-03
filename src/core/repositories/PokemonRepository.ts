import { Pokemon } from "../entities/Pokemon";

export interface PokemonRepository {
  getPokemon(id: string): Promise<Pokemon>;
}
