import React, { useEffect, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { List } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { getIssuesAction, updatePageAction } from "actions/issues";
import IssueItem from "./issueItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 2000,
        },
    })
);

export default function Issues() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const page = useSelector((state: any) => state.issues.page, shallowEqual);
    const issues = useSelector(
        (state: any) => state.issues.issueList,
        shallowEqual
    );

    const [issuesLength, setIssueLength] = useState(0);
    useEffect(() => {
        if (issues.length !== issuesLength) {
            setIssueLength(issues.length);
        }
    }, [issues, issuesLength]);

    const handleChange = (event: any, value: any) => {
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
                    .slice(page * 5 - 5, page * 5)
                    .map((issue: any, idx: any) => {
                        return (
                            <IssueItem
                                page={page}
                                issue={issue}
                                idx={idx}
                                key={idx}
                            ></IssueItem>
                        );
                    })}
            </List>
            <Pagination
                count={issuesLength < 5 ? 1 : issuesLength / 5 + 1}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
}
