import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
    })
);

export default function Issues() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            
        </div>
    );
}
