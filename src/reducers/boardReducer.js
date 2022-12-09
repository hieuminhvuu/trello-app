export const boardReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "BOARDS_LOADED_SUCCESS":
            return {
                ...state,
                boards: payload,
                boardsLoading: false,
            };
        case "BOARDS_LOADED_FAIL":
            return {
                ...state,
                boards: [],
                boardsLoading: false,
            };
        case "ADD_BOARD":
            return {
                ...state,
                boards: [...state.boards, payload],
            };
        default:
            return state;
    }
};
