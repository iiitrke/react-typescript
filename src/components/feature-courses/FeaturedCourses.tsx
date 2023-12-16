import { Component, useEffect } from "react";
import { useFeaturedCourseAction } from "../../state/hooks/useFeaturedCourseAction";
import { useTypedSeletor } from "../../state/hooks/useTypedSelector";
import { featuredCoureseRepositories } from "../../state/action-creators/featured-courses-creator";

const FeaturedCourse: React.FC = () => {
  const { featuredCoureseRepositories } = useFeaturedCourseAction();

  const data = useTypedSeletor((state) => state.featuredCoursesRepository);

  console.log(data);
  useEffect(() => {
    featuredCoureseRepositories();
  });

  // console.log(data);
  // console.log(error);
  return <>gg</>;
};

export { FeaturedCourse };
