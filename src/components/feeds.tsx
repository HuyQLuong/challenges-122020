import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { shallowEqual, useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { title } from "process";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        color: {
            backgroundColor: "white",
            display: "flex",
            margin: 5,
        },
    })
);

export default function Feeds() {
    const classes = useStyles();
    const feeds = useSelector((state: any) => state.feeds.feeds, shallowEqual);
    return (
        <div className={classes.root}>
            <List>
                {feeds.map((feed: any, idx: any) => {
                    return (
                        <ListItem key={idx} className={classes.color}>
                            <ListItemText
                                primary={
                                    feed.type === "add"
                                        ? `Issue #${feed.id}: ${feed.title} was highlighted`
                                        : `Highlighted issue #${feed.id}: ${feed.title} was removed`
                                }
                            />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}
