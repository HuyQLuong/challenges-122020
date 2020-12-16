import { getIssuesService } from "services/issuesServices";

export const GET_ISSUES = "GET_ISSUES";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const SET_HIGHLIGHT = "SET_HIGHLIGHT";
export const REMOVE_HIGHLIGHT = "REMOVE_HIGHLIGHT_ISSUE";

const addIssues = (issuesList: any) => {
    return {
        type: GET_ISSUES,
        payload: issuesList,
    };
};

const updatePage = (page: any) => {
    return {
        type: UPDATE_PAGE,
        payload: page,
    };
};

const setHighlightIssue = (idx: any) => {
    return {
        type: SET_HIGHLIGHT,
        payload: idx,
    };
};

const removeHighlightIssue = (idx: any) => {
    return {
        type: REMOVE_HIGHLIGHT,
        payload: idx,
    };
};

export const getInitIssuesAction = () => async (dispatch: any) => {
    const issuesList = await getIssuesService(1);
    dispatch(addIssues(issuesList));
    dispatch(updatePage(1));
};

export const getIssuesAction = (page: any) => async (dispatch: any) => {
    const issuesList = await getIssuesService(page);
    dispatch(addIssues(issuesList));
};

export const updatePageAction = (page: any) => (dispatch: any) => {
    dispatch(updatePage(page));
};

export const setHighlightIssueAction = (idx: any) => (dispatch: any) => {
    dispatch(setHighlightIssue(idx));
};

export const removeHighlightIssueAction = (idx: any) => (dispatch: any) => {
    dispatch(removeHighlightIssue(idx));
};
