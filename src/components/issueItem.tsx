import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ListItem, ListItemText } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { setHighlightFeedsAction } from "actions/feeds";
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
    const page = props.page;
    const idx = props.idx + (page - 1) * 5;

    const isHighlighted = useSelector(
        (state: any) => state.issues.highlightIndex[idx],
        shallowEqual
    );

    useEffect(() => {
        if (isHighlighted === true) {
            dispatch(setHighlightFeedsAction(issue));
        }
    }, [isHighlighted]);

    const onHighlightIssue = (idx: any) => {
        if (isHighlighted === true) {
            dispatch(removeHighlightIssueAction(idx));
        } else {
            dispatch(setHighlightIssueAction(idx));
        }
    };

    return (
        <ListItem
            key={idx}
            className={
                isHighlighted === true ? classes.highlightColor : classes.color
            }
            onClick={() => onHighlightIssue(idx)}
        >
            <ListItemText
                primary={issue.title}
                secondary={issue.created_at.split("T")[0]}
            />
        </ListItem>
    );
}
