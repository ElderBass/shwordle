const SET_PLAYER_STATS = 'SET_PLAYER_STATS';
const setPlayerStats = (stats) => ({
    type: SET_PLAYER_STATS,
    payload: stats,
});

export { SET_PLAYER_STATS, setPlayerStats };