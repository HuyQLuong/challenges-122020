/* eslint-disable import/no-anonymous-default-export */
import {
    ADD_FEED,
    INCREASE_NOTIFICATION_NUMBER,
    DECREASE_NOTIFICATION_NUMBER,
    RESET_NOTIFICATION_NUMBER,
} from "actions/feeds";

export default (
    state = {
        feeds: [],
        notificationNumber: 0,
    },
    action: {
        type: String;
        payload: any;
    }
) => {
    switch (action.type) {
        case ADD_FEED:
            const feed = action.payload;
            let newFeeds: any[];
            if (state.feeds.length < 5) {
                newFeeds = [...state.feeds, feed];
            } else {
                newFeeds = [...state.feeds.slice(1), feed];
            }
            return {
                ...state,
                feeds: newFeeds,
            };
        case INCREASE_NOTIFICATION_NUMBER:
            return {
                ...state,
                notificationNumber: state.notificationNumber + 1,
            };
        case DECREASE_NOTIFICATION_NUMBER:
            return {
                ...state,
                notificationNumber: state.notificationNumber - 1,
            };
        case RESET_NOTIFICATION_NUMBER:
            return {
                ...state,
                notificationNumber: 0,
            };
        default:
            return state;
    }
};
