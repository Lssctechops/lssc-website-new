export const menuItems = [
  {
    id: "1",
    label: "home",
    route: "/",
    submenu: [],
  },
  {
    id: "2",
    label: "who we are",
    route: "/who-we-are",
    submenu: [
      { label: "about us", route: "/who-we-are" },
      { label: "mission & vision", route: "/who-we-are/#mission-vision" },
      { label: "governing council", route: "/who-we-are/#governing-council" },
      { label: "our team", route: "/who-we-are/#our-team" },
    ],
  },
  {
    id: "3",
    label: "what we do",
    route: "/what-we-do",
    submenu: [
      { label: "Our Services", route: "/what-we-do#skill-yourself" },
      { label: "key Achievements", route: "/what-we-do#key-achievement" },
      { label: "government schemes", route: "/what-we-do#government-scheme" },
      {
        label: "skill first for industry",
        route: "/what-we-do#skill-first-for-industry",
      },
      {
        label: "skill infrastructure",
        route: "/what-we-do#skill-infrastructure",
      },
      {
        label: "international collaboration",
        route: "/what-we-do#international-collaboration",
      },
    ],
  },
  {
    id: "362vhyu",
    label: "Skilling Program",
    route: "/courses",
    submenu: [
      { label: "PMKVY", route: "/courses" },
      { label: "PM VISHWAKRMA", route: "/courses" },
      { label: "NAPS", route: "/courses" },
      {
        label: "TNSDM",
        route:
          "https://drive.google.com/file/d/1YOtMDec2HrzRBviUEC-SKDlQMSlHKSP2/view",
      },
      {
        label: "DDU-GKY",
        route:
          "https://drive.google.com/file/d/1YOtMDec2HrzRBviUEC-SKDlQMSlHKSP2/view",
      },
      { label: "PWD", route: "/courses/unlocking-potential" },
      { 
        label: "PM AJAY",
        route:
          "https://drive.google.com/file/d/1yryf4xW-6TQhb1hMOa9PLYCuGLm2ChvS/view",
      },
    ],
  },
  // {
  //   id: "4",
  //   label: "service",
  //   route: "/services",
  //   submenu: [
  //     { label: "industry", route: "/services/#industry" },
  //     { label: "candidate", route: "/services/#candidate" },
  //   ],
  // },
  {
    id: "5",
    label: "partner",
    route: "/partners",
    submenu: [
      {
        label: "Training Affiliation",
        route: "/partners#training",
      },
      {
        label: "Training",
        route: "/partners#training-partners",
      },
      {
        label: "Institution",
        route: "/partners#assessment",
      },
      {
        label: "Brand",
        route: "/partners#brand-partners",
      },
      {
        label: "Knowledge",
        route: "/partners#knowledge",
      },
      {
        label: "Media",
        route: "/partners#media",
      },
    ],
  },
  // {
  //   id: "52gdiiihudehde",
  //   label: "Training Map",
  //   route: "/training-map",
  //   submenu: [],
  // },
  {
    id: "112jkdbj5",
    label: "library",
    route: "/media",
    submenu: [
      {
        label: "Resource",
        route: "/media/library/news-letter",
      },
      {
        label: "Media",
        route: "/media/#media",
      },
      {
        label: "Blog",
        route: "/media/#blog",
      },
    ],
  },
  // {
  //   id: "5jguyg",
  //   label: "blog",
  //   route: "/blog",
  //   submenu: [],
  // },
];
