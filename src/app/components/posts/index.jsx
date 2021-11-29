import { useEffect, useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import usePosts from "hooks/posts";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Card from "components/card";
import Switch from "components/switch";
import LinearProgress from "components/progress/linear";
import Button from "components/button";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "rgba(255,255,255,0.5)",
    padding: theme.spacing(5),
    backdropFilter: "blur(7px)",
  },
  cards: {
    margin: theme.spacing(0, "auto"),
    maxWidth: "100%",
  },
  switch: {
    float: "right",
  },
  shape: {
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
    "& svg": {
      fill: theme.palette.primary.main,
    },
  },
  progress: {
    position: "absolute",
    top: 0,
  },
}));

const Posts = () => {
  const classes = useStyles(),
    [adminMode, setAdminMode] = useState(false),
    { read, remove, update, create, posts } = usePosts(),
    handleChangeMode = ({ target }) => {
      setAdminMode(target.checked);
    };

  useEffect(() => {
    read();
  }, []);

  return (
    <Grid item xs={12}>
      <div className={classes.shape}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      {posts.length ? (
        <Container maxWidth="md" className={classes.container}>
          <Grid container>
            {adminMode && (
              <Grid item xs={6}>
                <Button onClick={create}>Add</Button>
              </Grid>
            )}
            <Grid item xs={6}>
              <Switch
                value={adminMode}
                label="Admin mode"
                handleChange={handleChangeMode}
                className={adminMode ? classes.switch : ""}
              />
            </Grid>
          </Grid>

          {posts.map(({ id, title, body }) => {
            return (
              <Box my={5} key={id}>
                <Grid item xs={12} justifyContent="center">
                  <Card
                    id={id}
                    title={title}
                    body={body}
                    className={classes.cards}
                    adminMode={adminMode}
                    handleRemove={remove}
                    handleUpdate={update}
                  />
                </Grid>
              </Box>
            );
          })}
        </Container>
      ) : (
        <LinearProgress className={classes.progress} />
      )}
    </Grid>
  );
};

export default Posts;
