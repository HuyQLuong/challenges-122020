import { getIssuesService } from "services/issuesServices";

export const GET_ISSUES = "GET_ISSUES"
export const UPDATE_PAGE = "UPDATE_PAGE"

const addIssues = (issuesList: any) => {
	return {
        type: GET_ISSUES,
        payload: issuesList
	};
};

const updatePage = (page:any) =>{
    return {
        type: UPDATE_PAGE,
        payload: page
    }
}

export const getInitIssuesAction = () => async (dispatch: any) => {
    const issuesList = await getIssuesService(1)
    dispatch(addIssues(issuesList))
    dispatch(updatePage(1))
}

export const getIssuesAction = (page:any) => async (dispatch: any) => {
    const issuesList = await getIssuesService(page)
    dispatch(addIssues(issuesList))
    dispatch(updatePage(page))
}