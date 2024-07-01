export type Game = {
    gameID: number;
    dealID: number;
    title: string;
    salePrice: string;
    normalPrice: string;
    metacriticScore: string;
    steamRatingText: string;
    steamRatingPercent: string;
    thumb: string;
};

export type GameType = {
    game: Game;
};

export type Joke = {
    id: string;
    value: string;
};
