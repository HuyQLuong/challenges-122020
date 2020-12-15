import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { getIssuesAction, updatePageAction } from "actions/issues";

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
    })
);

export default function Issues() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const issues = useSelector(
        (state: any) => state.issues.issueList,
        shallowEqual
    );

    const page = useSelector((state: any) => state.issues.page, shallowEqual);
    const [hightLightIndex, setHighlightIndex] = useState(-1);

    const onHighligtIssue = (idx: number) => {
        if (idx === hightLightIndex) {
            setHighlightIndex(-1);
        } else {
            setHighlightIndex(idx);
        }
    };
    const handleChange = (event: any, value: any) => {
        console.log(value);
        const firstItem = value * 5 - 5;
        const lastItem = value * 5 - 1;
        if (value > page && value > 1) {
            // Click on next button
            if (firstItem > issues.length - 1 || lastItem > issues.length - 1) {
                // Need to load more data
                dispatch(getIssuesAction(value));
            }
        }
        dispatch(updatePageAction(value));
    };

    return (
        <div className={classes.root}>
            <List>
                {issues
                    .slice(page * 5 - 5, page * 5 - 1)
                    .map((issue: any, idx: any) => {
                        return (
                            <ListItem
                                key={idx}
                                className={classes.color}
                                onClick={() => onHighligtIssue(idx)}
                                selected={hightLightIndex === idx}
                            >
                                <ListItemText
                                    primary={issue.title}
                                    secondary={issue.created_at.split("T")[0]}
                                />
                            </ListItem>
                        );
                    })}
            </List>
            <Pagination
                count={issues.length / 5 > 50 ? issues.length : 10}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
}
