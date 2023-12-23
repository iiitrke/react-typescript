import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useUserActions } from "../../lib/hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { IntroModel } from "../../state/models/Intro-type";
import "./Intro.css";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { useEffect } from "react";
const IntroComp = () => {
  const { searchRepositories } = useUserActions();
  const { introRepository } = useIntroAction();

  const { loading, error, cached, data } = useTypedSeletor(
    (state) => state.introRepository
  );
  const data1 = useTypedSeletor((state) => state.featuredcourseCombine);

  useEffect(() => {
    introRepository();
  }, []);

  // function handleFetchUser() {
  //   searchRepositories();
  //   introRepository();

  //   console.log("HandleFetchUser in UserPage");
  //   console.log(data1);
  // }
  return (
    <>
      {loading && <p> Loading</p>}
      {error && <p> Error</p>}

      <Box
        flexDirection={"row"}
        display={"flex"}
        flexWrap={"wrap"}
        gap={6}
        justifyContent={"space-between"}
        marginTop={5}
      >
        {data.map((intro: IntroModel, index) => (
          <Box key={index} minWidth={250} maxWidth={340}>
            <Card key={index}>
              <CardMedia
                component="img"
                image={`./images/intro/${intro.image}`}
              />
              <CardContent>
                <Typography noWrap={false} component="div">
                  <ReactMarkdown children={intro.title} />
                  <ReactMarkdown children={intro.desc} />
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
        {/* </div> */}
      </Box>
      {/* <button className="btn" onClick={handleFetchUser}>
        Fetch User1
      </button> */}
    </>
  );
};

export { IntroComp };
