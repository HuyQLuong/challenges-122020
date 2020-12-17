import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import Issues from "./issues";
import Feeds from "./feeds";
import Notification from "./notification";
import { useDispatch } from "react-redux";
import { clearNotificationAction } from "actions/feeds";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    })
);

export default function Drawers() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [menuIndex, setMenuIndex] = useState(0);
    const onClickMenu = (index: number) => {
        if (index === 1) {
            setMenuIndex(1);
            dispatch(clearNotificationAction());
        } else {
            setMenuIndex(0);
        }
    };

    const isNotificationComponent = (index: any) => {
        if (index % 2 !== 0) {
            return <Notification></Notification>;
        }
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Github Issues
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {["Issues", "Feeds"].map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                onClickMenu(index);
                            }}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <PriorityHighIcon />
                                ) : (
                                    <InboxIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            {isNotificationComponent(index)}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {menuIndex === 1 ? <Feeds></Feeds> : <Issues></Issues>}
            </main>
        </div>
    );
}
