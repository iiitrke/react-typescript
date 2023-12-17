import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useUserActions } from "../../state/hooks/useUserActions";
import { useIntroAction } from "../../state/hooks/useIntroAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { IntroModel } from "../../state/models/Intro-type";
import ReactMarkdown from "react-markdown";
import { spacing } from "@storybook/design-system/dist/components/shared/styles";

export const IntroFC: React.FC = () => {
  const { searchRepositories } = useUserActions();
  const { introRepository } = useIntroAction();

  const { loading, error, cached, data } = useTypedSeletor(
    (state) => state.introRepository
  );
  const data1 = useTypedSeletor((state) => state.featuredcourseCombine);

  useEffect(() => {
    introRepository();
  }, []);

  return (
    <>
      <Typography variant="h5" color="text.primary" gutterBottom>
        Welcome to Itasca
      </Typography>
      <Typography variant="body2" color="text.primary" gutterBottom>
        Welcome to Itascs Technologies
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          color: "text.secondary",
          py: 0,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={6} justifyContent="space-between">
            {data.map((intro: IntroModel, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card key={index}>
                  <CardMedia
                    component="img"
                    image={`./images/intro/${intro.image}`}
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                      <ReactMarkdown children={intro.title} />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      gutterBottom
                    >
                      <ReactMarkdown children={intro.desc} />
                    </Typography>
                  </CardContent>
                </Card>

                {/* Add your logo component or image here */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};
