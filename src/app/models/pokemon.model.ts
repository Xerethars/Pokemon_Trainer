export interface PokemonResponse {
    results: Pokemon[]
}

export interface Pokemon {
    id: string | undefined;
    name: string;
    url: string;
    image: string;
    caught: boolean;
}



