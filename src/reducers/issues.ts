/* eslint-disable import/no-anonymous-default-export */
import { GET_ISSUES, UPDATE_PAGE } from "actions/issues";

export default (
	state = {
        issueList: [],
        page: 0
    },
	action: {
        type: String,
        payload: any
    },
) => {
    switch (action.type){
        case GET_ISSUES:
            const issues = action.payload;
            const newIssuesState = [...state.issueList, ...issues];
            return {
                ...state,
                issueList: newIssuesState
            }
        case UPDATE_PAGE:
            const page = action.payload
            return {
                ...state,
                page: page
            }
        default:
            return state;
    }
};