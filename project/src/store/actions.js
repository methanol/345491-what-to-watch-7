export const ActionType = {
  SWITCH_GENRE: 'switchGenre',
};

export function switchGenre (genre) {
  return {
    type: ActionType.SWITCH_GENRE,
    payload: {genre},
  };
}
