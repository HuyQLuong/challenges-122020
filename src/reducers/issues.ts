/* eslint-disable import/no-anonymous-default-export */
import {
    GET_ISSUES,
    UPDATE_PAGE,
    SET_HIGHLIGHT,
    REMOVE_HIGHLIGHT,
} from "actions/issues";

export default (
    state = {
        issueList: [],
        page: 0,
        highlightIndex: [],
    },
    action: {
        type: String;
        payload: any;
    }
) => {
    switch (action.type) {
        case GET_ISSUES:
            const issues = action.payload;
            const newIssuesState = [...state.issueList, ...issues];
            return {
                ...state,
                issueList: newIssuesState,
            };
        case UPDATE_PAGE:
            const page = action.payload;
            return {
                ...state,
                page: page,
            };
        case SET_HIGHLIGHT:
            const setHighlightIndex = action.payload;
            const setHighlightIndexState = Array.from(
                new Set([...state.highlightIndex, setHighlightIndex])
            );
            return {
                ...state,
                highlightIndex: setHighlightIndexState,
            };
        case REMOVE_HIGHLIGHT:
            const removeHighlightIndex = action.payload;
            const removeHighlightIndexState = state.highlightIndex.filter(
                (idx) => idx !== removeHighlightIndex
            );
            return {
                ...state,
                highlightIndex: removeHighlightIndexState,
            };
        default:
            return state;
    }
};
