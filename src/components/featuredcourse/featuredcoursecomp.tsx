import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { FeaturedCourseModel } from "../../state/models/Featured-course.model";
import "./featuredcoursecomp.css";
import { log } from "console";
const FeaturCouComp: React.FC = () => {
  const { featuredcoursesCre } = useFeaturedCourseAction();
  const { data, loading, error } = useTypedSeletor(
    (state) => state.featuredcourseCombine
  );
  const [mydata, setMydata] = useState<FeaturedCourseModel[]>([]);

  // Equivalent of componentDidMount
  useEffect(() => {
    console.log("Fetching Called");
    featuredcoursesCre();
  }, []);

  useEffect(() => {
    const swapInterverl = setInterval(() => {
      console.log("interval invoked", mydata);
      const temp = mydata;
      if (temp.length > 1) {
        const firstSlice: FeaturedCourseModel | undefined = temp.shift();
        if (firstSlice) {
          temp.push(firstSlice);
        }
        setMydata(temp);
      }
    }, 1000);
    return () => {
      clearInterval(swapInterverl);
    };
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      setMydata(data);

      console.log("Data received", data, mydata);
    }
  }, [data]);

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
        height={300}
      >
        {mydata.map((item: FeaturedCourseModel, index) => (
          <Box key={index} minWidth={250} maxWidth={340}>
            <Card key={index}>
              <CardMedia
                component="img"
                image={`./images/intro/${item.image}`}
              />
              <CardContent>
                <Typography noWrap={false} component="div">
                  {item.desc}
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
