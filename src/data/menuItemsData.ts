export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "Internship",
        url: "internship",
      },
      {
        title: "Placement",
        url: "placementassistance",
      },
    ],
  },

  {
    title: "All Courses",
    url: "courses",
    submenu: [
      {
        title: "Java",
        url: "java",
        submenu: [
          {
            title: "Core Java",
            url: "corejava",
          },
          {
            title: "Advance Java",
            url: "advancejava",
          },
          {
            title: "Spring boot",
            url: "springboot",
          },
        ],
      },
      {
        title: "Angular",
        url: "angular",
      },
      {
        title: "React",
        url: "react",
      },
      {
        title: "CSS/SCSS",
        url: "css-scss",
      },
      {
        title: "Web Development",
        url: "web-dev",
        submenu: [
          {
            title: "Frontend",
            url: "frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
                url: "node",
              },
              {
                title: "PHP",
                url: "php",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },

  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "About",
    url: "/about",
  },

  {
    title: "Blog",
    url: "/blog",
  },
];
