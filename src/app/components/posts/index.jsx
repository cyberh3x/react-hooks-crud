import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import usePosts from "hooks/posts";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Card from "components/card";
import LinearProgress from "components/progress/linear";

const useStyles = makeStyles((theme) => ({
  cards: {
    margin: theme.spacing(0, "auto"),
  },
}));

const Posts = () => {
  const classes = useStyles(),
    { get, posts } = usePosts();

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {posts ? (
        <Container maxWidth="md">
          {posts.map(({ id, title, body }) => {
            return (
              <Box my={5} key={id}>
                <Grid item xs={12} justifyContent="center">
                  <Card title={title} body={body} className={classes.cards} />
                </Grid>
              </Box>
            );
          })}
        </Container>
      ) : (
        <Grid item xs={12}>
          <LinearProgress />
        </Grid>
      )}
    </>
  );
};

export default Posts;
