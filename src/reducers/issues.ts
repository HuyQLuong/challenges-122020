/* eslint-disable import/no-anonymous-default-export */
import {
    GET_ISSUES,
    UPDATE_PAGE,
    SET_HIGHLIGHT,
    REMOVE_HIGHLIGHT,
} from "actions/issues";

const addHighlight = (highlightList: any, index: any) => {
    const isAnyHighlight = highlightList.filter(
        (isHighlight) => isHighlight === true
    );
    if (isAnyHighlight.length === 0) {
        highlightList[index] = true;
    }
    return highlightList;
};

const removeHighlight = (highlightList: any, index: any) => {
    highlightList[index] = false;
    return highlightList;
};

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
            const newHighlihgtIssue = Array.from(
                { length: 5 },
                (i) => (i = false)
            );
            const newHighlightIndexState = [
                ...state.highlightIndex,
                ...newHighlihgtIssue,
            ];
            return {
                ...state,
                issueList: newIssuesState,
                highlightIndex: newHighlightIndexState,
            };
        case UPDATE_PAGE:
            const page = action.payload;
            return {
                ...state,
                page: page,
            };
        case SET_HIGHLIGHT:
            const setHighlightIndex = action.payload;
            let setHighlightCloneState = [...state.highlightIndex];
            const setHighlightNewState = addHighlight(
                setHighlightCloneState,
                setHighlightIndex
            );
            return {
                ...state,
                highlightIndex: setHighlightNewState,
            };
        case REMOVE_HIGHLIGHT:
            const removeHighlightIndex = action.payload;
            let removeHighligthCloneState = [...state.highlightIndex];
            const removeHighlightNewState = removeHighlight(
                removeHighligthCloneState,
                removeHighlightIndex
            );
            return {
                ...state,
                highlightIndex: removeHighlightNewState,
            };
        default:
            return state;
    }
};
