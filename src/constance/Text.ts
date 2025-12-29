import {
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footer6,
  footer7,
  engineer1,
  engineer2,
  engineer3,
  pro1,
  pro2,
  pro3,
  research1,
  research2,
  research3,
  research4,
} from "../assets/images";
import {
  call,
  fb,
  linkedin,
  locationwhite,
  logowhite,
  payment,
  skype,
  youtube,
} from "../assets/svgs";
export const HeroText = {
  para: " Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  headings: {
    head1: "100% Satifaction",
    head2: "Annual Pass Programs",
    head3: "Flexible and Cost Effective",
    head4: " Trained emploies",
  },
};

export const ResearchText = [
  {
    number: "01",
    title: "Product Research",
    description:
      "Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor",
    icon: research1,
  },
  {
    number: "02",
    title: "Design Idea",
    description:
      "Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor",
    icon: research2,
  },
  {
    number: "03",
    title: "Advice & guides",
    description:
      "Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor",
    icon: research3,
  },
  {
    number: "04",
    title: "Great Solutions",
    description:
      "Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor",
    icon: research4,
  },
];

export const projectText = [
  {
    image: pro1,
    icon: locationwhite,
    location: " 100 Sunrise Ct Hamel, Minnesota(MN)",
    title: "Trusted By Thousand",
  },
  {
    image: pro2,
    icon: locationwhite,
    location: " 100 Sunrise Ct Hamel, Minnesota(MN)",
    title: "Food Factory Design",
  },
  {
    image: pro3,
    icon: locationwhite,
    location: " 100 Sunrise Ct Hamel, Minnesota(MN)",
    title: "Food Factory Design",
  },
];

export const EnginnerText = [
  {
    image: engineer1,
    name: "Marc Chiasson",
  },
  {
    image: engineer2,
    name: "Qalim Thams",
  },
  {
    image: engineer3,
    name: "Millar Chiasson",
  },
];

export const Card1Text = [
  {
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the",
    number: "9625",
    text: "Started journey",
    points: [
      {
        point1: " Early Engagement",
        point2: " Affordable Price upto 2 years",
      },
    ],
  },
];

export const FooterText = [
  {
    images: [footer1, footer2, footer3, footer4, footer5, footer6, footer7],
    call: call,
    callText: "Give us a call",
    callNumber: "+123-456-7890",
    icons: [fb, youtube, linkedin, skype],
    letter: "Join Newsletter",
    weblogo: logowhite,
    description:
      "Improve efficiency, provide a better Customer experience with modern Technolo services available",
    payment: payment,
    resources: {
      title: "Resources",
      links: [
        { title: "About", to: "/about" },
        { title: "Career", to: "/career" },
        { title: "Contact", to: "/contact" },
        { title: "FAQ", to: "/faq" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { title: "Home", to: "/" },
        { title: "Contact", to: "/contact" },
        { title: "Portfolio", to: "/portfolio" },
        { title: "Services", to: "/services" },
      ],
    },
    helpPage: {
      title: "Help Page",
      links: [
        { title: "About", to: "/about" },
        { title: "Career", to: "/career" },
        { title: "Contact", to: "/contact" },
        { title: "FAQ", to: "/faq" },
      ],
    },
  },
];

export const AboutCompanyText = {
  title: "About Our Company",
  heading: "A team of reliable and experienced Contractors",
  description:
    "Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia sit consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. am Neque porro dolor set quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam",
  tabs: [
    {
      title: "Our Mission",
      description:
        "An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised",
    },
    {
      title: "Our Vision",
      description:
        "An IT my vision firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised",
    },
    {
      title: "Our Values",
      description:
        "An IT my value firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that’s what they are supposed to do. Many IT firms struggle to keep themselves and their IT from falling apart. We’ve raised",
    },
  ],
  mobileTitle: "Want to Discuss:",
  mobileNumber: "+91(123)56789",
};
