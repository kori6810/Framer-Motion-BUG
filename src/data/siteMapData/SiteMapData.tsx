const NaviagtionData = [
  {
    navItem: "About Us",
    subNavItems: [
      {
        name: "History",
        linkTo: "/about",
        query: "history",
      },
      { name: "Vision", linkTo: "/about", query: "vision" },
      { name: "Business", linkTo: "/about", query: "business" },
      { name: "Location", linkTo: "/about", query: "location" },
    ],
  },
  {
    navItem: "EV Service",
    subNavItems: [
      {
        name: "충전 서비스",
        linkTo: "/service",
        query: "ev",
      },
      { name: "문의신청", linkTo: "/service", query: "inquiry" },
      { name: "A/S 접수", linkTo: "/service", query: "as" },
    ],
  },
  {
    navItem: "Business Partner",
    subNavItems: [
      {
        name: "EVFLEX",
        linkTo: "/partner",
        query: "evflex",
      },
      { name: "영업 파트너", linkTo: "/partner", query: "sales" },
      { name: "설치ㆍ시공 파트너", linkTo: "/partner", query: "install" },
    ],
  },
  {
    navItem: "DR(Demand Response)",
    subNavItems: [
      {
        name: "DR 이란",
        linkTo: "/dr",
        query: "whatIsDR",
      },
      { name: "Why 매니지온", linkTo: "/dr", query: "whyUs" },
      { name: "DR 문의신청", linkTo: "/dr", query: "inquiryDr" },
    ],
  },
  {
    navItem: "Contact",
    subNavItems: [
      {
        name: "공지사항",
        linkTo: "/contact",
        query: "notice",
      },
      { name: "보도자료", linkTo: "/contact", query: "board" },
      { name: "블로그", linkTo: "https://blog.naver.com/manageon_dr" },
    ],
  },
];

const NaviagtionDataEng = [
  {
    navItem: "About Us",
    subNavItems: [
      {
        name: "History",
        linkTo: "/about",
        query: "history",
      },
      { name: "Vision", linkTo: "/about", query: "vision" },
      { name: "Business", linkTo: "/about", query: "business" },
      { name: "Location", linkTo: "/about", query: "location" },
    ],
  },
  {
    navItem: "EV Service",
    subNavItems: [
      {
        name: "EV Service",
        linkTo: "/service",
        query: "ev",
      },
      { name: "Inquiry", linkTo: "/service", query: "inquiry" },
      { name: "A/S Request", linkTo: "/service", query: "as" },
    ],
  },
  {
    navItem: "Business Partner",
    subNavItems: [
      {
        name: "EVFLEX",
        linkTo: "/partner",
        query: "evflex",
      },
      { name: "Sales Partner", linkTo: "/partner", query: "sales" },
      { name: "Instalation Partner", linkTo: "/partner", query: "install" },
    ],
  },
  {
    navItem: "DR(Demand Response)",
    subNavItems: [
      {
        name: "What is DR",
        linkTo: "/dr",
        query: "whatIsDR",
      },
      { name: "Why Manageon", linkTo: "/dr", query: "whyUs" },
      { name: "DR Inquiry", linkTo: "/dr", query: "inquiryDr" },
    ],
  },
  {
    navItem: "Contact",
    subNavItems: [
      {
        name: "Notice",
        linkTo: "/contact",
        query: "notice",
      },
      { name: "Press Release", linkTo: "/contact", query: "board" },
      { name: "Blog", linkTo: "https://blog.naver.com/manageon_dr" },
    ],
  },
];

export { NaviagtionData, NaviagtionDataEng };
