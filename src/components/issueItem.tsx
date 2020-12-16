import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ListItem, ListItemText } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
    removeHighlightFeedsAction,
    setHighlightFeedsAction,
} from "actions/feeds";
import {
    removeHighlightIssueAction,
    setHighlightIssueAction,
} from "actions/issues";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 2000,
        },
        color: {
            backgroundColor: "white",
            display: "flex",
            margin: 5,
        },
        highlightColor: {
            backgroundColor: "#ffbebe",
            display: "flex",
            margin: 5,
        },
    })
);

export default function IssueItem(props: any) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const issue = props.issue;
    const idx = props.idx;
    const page = props.page;

    const highlightIndex = useSelector(
        (state: any) => state.issues.highlightIndex,
        shallowEqual
    );

    const onHighlightIssue = (idx: any) => {
        console.log(idx);
        if (highlightIndex.length > 0 && highlightIndex.includes(idx)) {
            dispatch(removeHighlightIssueAction(idx));
            dispatch(removeHighlightFeedsAction(issue));
        } else {
            dispatch(setHighlightIssueAction(idx));
            dispatch(setHighlightFeedsAction(issue));
        }
    };

    return (
        <ListItem
            key={idx}
            className={
                highlightIndex.length > 0 &&
                highlightIndex.includes(idx + (page - 1) * 5)
                    ? classes.highlightColor
                    : classes.color
            }
            onClick={() => onHighlightIssue(idx + (page - 1) * 5)}
        >
            <ListItemText
                primary={issue.title}
                secondary={issue.created_at.split("T")[0]}
            />
        </ListItem>
    );
}
