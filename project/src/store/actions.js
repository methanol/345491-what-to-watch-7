export const ActionType = {
  SWITCH_GENRE: 'switchGenre',
  MORE_MOVIES: 'moreMovies',
  RESET_MOVIES_LIST: 'resetMoviesList',
};

export function switchGenre (genre) {
  return {
    type: ActionType.SWITCH_GENRE,
    payload: {genre},
  };
}

export function showMoreMovies () {
  return {
    type: ActionType.MORE_MOVIES,
  };
}

export function resetMoviesList () {
  return {
    type: ActionType.RESET_MOVIES_LIST,
  };
}
