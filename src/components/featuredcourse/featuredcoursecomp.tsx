import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { FeaturedCourseModel } from "../../state/models/Featured-course.model";
import "./featuredcoursecomp.css";
const FeaturCouComp: React.FC = () => {
  const { featuredcoursesCre } = useFeaturedCourseAction();
  const { data, loading, error } = useTypedSeletor(
    (state) => state.featuredcourseCombine
  );
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    featuredcoursesCre();
  }, []);

  return (
    <>
      {loading && <p> Loading</p>}
      {error && <p> Error</p>}

      <Box
        sx={{
          bgcolor: "background.paper",
          color: "text.secondary",
          py: { xs: 0, sm: 0, md: 2 },
          marginTop: "20px",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth={false}>
          {loading && <p> Loading</p>}
          {error && <p> Error</p>}
          <h2> Featured Courses</h2>
          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 4, lg: 6, xl: 8 }}
            justifyContent="space-between"
          >
            {data.map((item: FeaturedCourseModel, index) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Card key={index}>
                  <CardMedia component="img" image={item.image} />
                  <CardContent>
                    <Typography noWrap={false} component="div">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* <Box
        ref={divRef}
        flexDirection={"row"}
        display={"flex"}
        flexWrap={"wrap"}
        gap={6}
        justifyContent={"space-between"}
        marginTop={5}
        height={300}
      >
        {data.map((item: FeaturedCourseModel, index) => (
          <Box key={index} minWidth={250} maxWidth={340}>
            <Card key={index}>
              <CardMedia component="img" image={item.image} />
              <CardContent>
                <Typography noWrap={false} component="div">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box> */}
    </>
  );
};

export { FeaturCouComp };
