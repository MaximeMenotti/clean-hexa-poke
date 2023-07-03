import { PokemonViewModel } from "../../core/mappers/PokemonMapper";

type PokemonProps = {
  pokemon: PokemonViewModel;
};

function Pokemon({ pokemon }: PokemonProps) {
  return <p>{pokemon.name}</p>;
}

export default Pokemon;
