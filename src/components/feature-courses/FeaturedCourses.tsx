import { Component, useEffect } from "react";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";

const FeaturedCourse: React.FC = () => {
  const { featuredCoureseCreator } = useFeaturedCourseAction;
  // featuredCoureseCreator();
  const { loading, error, cached, data } = useTypedSeletor(
    (state) => state.featuredCoursesRepository
  );

  useEffect(() => {
    featuredCoureseCreator();
  });

  console.log(data);
  console.log(error);
  return <>gg</>;
};

export { FeaturedCourse };
