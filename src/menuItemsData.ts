export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Courses",

    submenu: [
      {
        title: "Angular",
        url: "/courses",
      },
      {
        title: "React",
        url: "/courses",
      },
      {
        title: "Java",

        submenu: [
          {
            title: "Core Java",
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
    title: "Consultancy",
    url: "/about",
  },
  {
    title: "About",
    url: "/courses",
  },
];
