export const ADD_FEED = "ADD_FEED";
export const INCREASE_NOTIFICATION_NUMBER = "INCREASE_NOTIFICATION_NUMBER";
export const RESET_NOTIFICATION_NUMBER = "RESET_NOTIFICATION_NUMBER";
export const DECREASE_NOTIFICATION_NUMBER = "DECREASE_NOTIFICATION_NUMBER";

const getNotificationInfo = (issue: any, type: any) => {
    return {
        id: issue.id,
        title: issue.title,
        type: type,
    };
};

const addFeed = (feed: any) => {
    return {
        type: ADD_FEED,
        payload: feed,
    };
};

const increaseNotificationNumber = () => {
    return {
        type: INCREASE_NOTIFICATION_NUMBER,
    };
};

const decreaseNotificationNumber = () => {
    return {
        type: DECREASE_NOTIFICATION_NUMBER,
    };
};

const resetNotificationNumber = () => {
    return {
        type: RESET_NOTIFICATION_NUMBER,
    };
};

export const setHighlightFeedsAction = (issue: any) => (dispatch: any) => {
    const feedIssue = getNotificationInfo(issue, "add");
    dispatch(addFeed(feedIssue));
    dispatch(increaseNotificationNumber());
};

export const removeHighlightFeedsAction = (issue: any) => (dispatch: any) => {
    const feedIssue = getNotificationInfo(issue, "remove");
    dispatch(addFeed(feedIssue));
    dispatch(decreaseNotificationNumber());
};

export const clearNotificationAction = () => (dispatch: any) => {
    dispatch(resetNotificationNumber());
};
