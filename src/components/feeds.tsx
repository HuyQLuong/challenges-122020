import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
    })
);

export default function Feeds() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
        </div>
    );
}
