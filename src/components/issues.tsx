import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 2000,
    },
    color: {
        backgroundColor: "white",
        display: 'flex'
    },
  }),
);

export default function Issues() {
    const classes = useStyles();
    // const issues = useSelector((state: any) => state.issues.issueList);
    const issues = [
        {
          "url": "https://api.github.com/repos/rails/rails/issues/40848",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/40848/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/40848/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/40848/events",
          "html_url": "https://github.com/rails/rails/pull/40848",
          "id": 767419512,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTQwMTMzNTA4",
          "number": 40848,
          "title": "Sets default mailer queue to default",
          "user": {
            "login": "pftg",
            "id": 125715,
            "node_id": "MDQ6VXNlcjEyNTcxNQ==",
            "avatar_url": "https://avatars0.githubusercontent.com/u/125715?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/pftg",
            "html_url": "https://github.com/pftg",
            "followers_url": "https://api.github.com/users/pftg/followers",
            "following_url": "https://api.github.com/users/pftg/following{/other_user}",
            "gists_url": "https://api.github.com/users/pftg/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/pftg/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/pftg/subscriptions",
            "organizations_url": "https://api.github.com/users/pftg/orgs",
            "repos_url": "https://api.github.com/users/pftg/repos",
            "events_url": "https://api.github.com/users/pftg/events{/privacy}",
            "received_events_url": "https://api.github.com/users/pftg/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107188,
              "node_id": "MDU6TGFiZWwxMDcxODg=",
              "url": "https://api.github.com/repos/rails/rails/labels/actionmailer",
              "name": "actionmailer",
              "color": "8B00FC",
              "default": false,
              "description": null
            },
            {
              "id": 107195,
              "node_id": "MDU6TGFiZWwxMDcxOTU=",
              "url": "https://api.github.com/repos/rails/rails/labels/railties",
              "name": "railties",
              "color": "8BE06E",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 1,
          "created_at": "2020-12-15T10:13:23Z",
          "updated_at": "2020-12-15T10:38:17Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/40848",
            "html_url": "https://github.com/rails/rails/pull/40848",
            "diff_url": "https://github.com/rails/rails/pull/40848.diff",
            "patch_url": "https://github.com/rails/rails/pull/40848.patch"
          },
          "body": "Fixes: #40846",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/40847",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/40847/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/40847/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/40847/events",
          "html_url": "https://github.com/rails/rails/pull/40847",
          "id": 767409684,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTQwMTI3NDg3",
          "number": 40847,
          "title": "Fix missing attribute error and typo in Getting Started: Using Concerns",
          "user": {
            "login": "david-eom",
            "id": 66581587,
            "node_id": "MDQ6VXNlcjY2NTgxNTg3",
            "avatar_url": "https://avatars3.githubusercontent.com/u/66581587?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/david-eom",
            "html_url": "https://github.com/david-eom",
            "followers_url": "https://api.github.com/users/david-eom/followers",
            "following_url": "https://api.github.com/users/david-eom/following{/other_user}",
            "gists_url": "https://api.github.com/users/david-eom/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/david-eom/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/david-eom/subscriptions",
            "organizations_url": "https://api.github.com/users/david-eom/orgs",
            "repos_url": "https://api.github.com/users/david-eom/repos",
            "events_url": "https://api.github.com/users/david-eom/events{/privacy}",
            "received_events_url": "https://api.github.com/users/david-eom/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 150377,
              "node_id": "MDU6TGFiZWwxNTAzNzc=",
              "url": "https://api.github.com/repos/rails/rails/labels/docs",
              "name": "docs",
              "color": "02d7e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2020-12-15T10:03:28Z",
          "updated_at": "2020-12-15T10:09:54Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/40847",
            "html_url": "https://github.com/rails/rails/pull/40847",
            "diff_url": "https://github.com/rails/rails/pull/40847.diff",
            "patch_url": "https://github.com/rails/rails/pull/40847.patch"
          },
          "body": "### Summary\r\n\r\nBy following the guide \"Using Concerns\", application will raise `ActiveModel::MissingAttributeError`.\r\n\r\nThis is because ` status` column is not added, and user did not provide the `status` parameter when creating articles and comments.\r\n\r\nThe following three actions will fix this issue:\r\n\r\n1. Run migration commands _(with reference to https://guides.rubyonrails.org/active_record_migrations.html#creating-a-standalone-migration)_\r\n2. Include a select box in forms when user creates/edits articles and comments\r\n3. Permit `:status` key in strong parameter\r\n\r\nFix a slight typo for module `Visible` to make it identical to previous appearances\r\n\r\n### Other Information\r\n\r\nAs a new programmer who just started learning programming as well as Ruby on Rails, I spent quite some time searching for possible typo in my code, only come to realise that the guide was actually not a complete one that lets the rails app run without error.\r\n\r\nI do hope that even if my changes were not accepted, the guide could still include a paragraph indicating that \"extra steps need to be taken, but we will not delve too deep here\".\r\n\r\nThanks in advance!",
          "performed_via_github_app": null
        }
      ]
    const [hightLightIndex, setHighlightIndex] = useState(-1)
    const onHighligtIssue = (idx:number) => {
        if (idx === hightLightIndex){
            setHighlightIndex(-1)
        }
        else{
            setHighlightIndex(idx)
            
        }
    }  
    return (
        <div className={classes.root}>
            <List>
                {issues.map((issue:any, idx:any)=>{
                    return (
                            <ListItem 
                                key={idx}
                                className={classes.color}
                                onClick={()=> onHighligtIssue(idx)}
                                selected={hightLightIndex === idx}
                            > 
                                <ListItemText primary={issue.title} secondary={issue.created_at.split("T")[0]}/>
                            </ListItem>
                    )
                })}
            </List>
        </div>
    );
}
