import { Pokemon } from "../entities/Pokemon";
import { ViewMapper } from "./ViewMapper";

export type PokemonViewModel = {
  name: string;
  id: string;
};

export class PokemonMapper implements ViewMapper<Pokemon, PokemonViewModel> {
  fromViewModel(viewModel: PokemonViewModel): Pokemon {
    throw new Error("Method not implemented.");
  }

  toViewModel(model: Pokemon): PokemonViewModel {
    return {
      name: model.name,
      id: model.id,
    };
  }
}
