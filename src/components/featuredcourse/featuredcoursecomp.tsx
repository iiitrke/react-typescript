import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useUserActions } from "../../hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { IntroModel } from "../../state/models/Intro-type";
import "./featuredcoursecomp.css";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { FeaturedCourseModel } from "../../state/models/Featured-course.model";
import React, { useEffect } from "react";
const FeaturCouComp: React.FC = () => {
  const { featuredcoursesCre } = useFeaturedCourseAction();

  const { data, loading, error } = useTypedSeletor(
    (state) => state.featuredcourseCombine
  );

  // Equivalent of componentDidMount
  useEffect(() => {
    console.log("fgfgfgf");
    featuredcoursesCre();
  }, []);

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
        {data.map((data: FeaturedCourseModel, index) => (
          <Box key={index} minWidth={250} maxWidth={340}>
            <Card key={index}>
              <CardMedia
                component="img"
                image={`./images/intro/${data.image}`}
              />
              <CardContent>
                <Typography noWrap={false} component="div">
                  {data.desc}
                </Typography>
                {/* <Typography noWrap={false} component="div">
                  <ReactMarkdown children={data.title} />
                  <ReactMarkdown children={intro.desc} />
                </Typography> */}
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

export { FeaturCouComp };
