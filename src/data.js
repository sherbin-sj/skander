import {
  FaTools,
  FaCrown,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  blog3,
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  user1,
  user2,
  user3,
  user4,
} from "./assets";


export const navigations = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

export const keypoints = [
  {
    icon: <FaCrown />,
    title: "Premium Quality",
  },
  {
    icon: <FaRegClock />,
    title: "On-Time, Within Budget",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
  },
  {
    icon: <FaHandsHelping />,
    title: "Client-Centered Approach",
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule",
  },
  {
    title: "Innovative Designs",
    icon: <FaDraftingCompass />,
    description: "Creative and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
];

export const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    description: `Building modern, high-quality homes tailored to your vision.`,
  },
  {
    title: "Commercial Projects",
    icon: <FaBuilding />,
    description: `Developing functional, innovative commercial spaces for businesses.`,
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces with expert renovation and design.`,
  },
];

export const portfolio = [
  {
    title: "Plan Approvals",
    image: portfolio1,
    date: "March 15, 2024",
    category: "Plan Approvals",
    description: `Efficient assistance in obtaining all required permits and approvals with full regulatory compliance.`,
  },
  {
    title: "Civil Works",
    image: portfolio2,
    date: "November 30, 2023",
    category: "Civil Works",
    description: `Comprehensive construction services including site preparation, foundations, and structural development.`,
  },
  {
    title: "Residential & Commercial Projects ",
    image: portfolio3,
    date: "August 12, 2024",
    category: "Residential Commercial Project",
    description: `End-to-end construction solutions for homes and commercial spaces from design to delivery.`,
  },
  {
    title: "MEP",
    image: portfolio4,
    date: "May 1, 2023",
    category: "MEP",
    description: `Expert mechanical, electrical, and plumbing installations ensuring safe and efficient building systems.`,
  },
  {
    title: "Renovations",
    image: portfolio5,
    date: "January 18, 2024",
    category: "Renovations",
    description: `High-quality renovation solutions to upgrade, modernize, and transform existing spaces.`,
  },
  {
    title: "Painting",
    image: portfolio6,
    date: "September 5, 2023",
    category: "Painting",
    description: `Professional interior and exterior painting services using durable, premium-grade materials.`,
  },
  {
    title: "Landscaping",
    image: portfolio7,
    date: "June 22, 2024",
    category: "Landscaping",
    description: `Custom-designed outdoor spaces that enhance property aesthetics and functional appeal.`,
  },
  {
    title: "Restaurants & Hotels ",
    image: portfolio8,
    date: "April 10, 2023",
    category: "Restaurants & Hotels",
    description: `Specialized construction and fit-out services tailored for hospitality environments.`,
  },
  {
    title: "Bars & Lounges",
    image: portfolio9,
    date: "December 3, 2023",
    category: "Bars Lounges",
    description: `Creative and functional interior build-outs designed for modern bar and lounge experiences.`,
  },
];

export const teamMembers = [
  {
    fullName: "Chinedu Okafor",
    image: member1,
    title: "Lead Architect",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Aisha Ibrahim",
    image: member2,
    title: "Senior Project Manager",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Emmanuel Adeoye",
    image: member3,
    title: "Chief Engineer",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Ngozi Eze",
    image: member4,
    title: "Construction Planner",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Tunde Afolabi",
    image: member5,
    title: "Site Supervisor",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
  {
    fullName: "Sonia Olufemi",
    image: member6,
    title: "Design Coordinator",
    socialMedias:[
      {name:"Facebook",icon:<FaFacebook/>,href:"http://facebook.com"},
      {name:"LinkedIn",icon:<FaLinkedin/>,href:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,href:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,href:"http://instagram.com"},
    ]
  },
];

export const testimonials = [
  {
    name: "Folake Adekunle",
    image: user1,
    review: `The team at Confix exceeded our expectations. Their attention to detail and professionalism made our home renovation a smooth and enjoyable process.`,
  },
  {
    name: "Jide Akinwale",
    image: user2,
    review: `From start to finish, the project was handled with incredible skill and efficiency. I highly recommend Confix for any construction needs.`,
  },
  {
    name: "Chiamaka Nwachukwu",
    image: user3,
    review: `Working with Confix was a fantastic experience. Their team was professional, creative, and committed to delivering exactly what we envisioned.`,
  },
  {
    name: "Tunde Balogun",
    image: user4,
    review: `Exceptional service and quality workmanship! Confix transformed our industrial space efficiently and effectively. They are true professionals.`,
  },
];

export const blogs = [
  {
    title: "Innovative Construction Trends for 2024",
    content: `Discover the latest trends in construction for 2024, from sustainable building practices to cutting-edge technologies transforming the industry.`,
    image: blog1,
  },
  {
    title: "The Importance of Sustainable Building Materials",
    content: `Learn why using sustainable building materials is crucial for environmental protection and how it benefits both the project and the community.`,
    image: blog2,
  },
  {
    title: "Top Tips for Effective Project Management",
    content: `Explore essential tips for managing construction projects efficiently, including scheduling, budgeting, and communication strategies.`,
    image: blog3,
  },
];

export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Our Team",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Residential Construction",
        href: "#",
      },
      {
        name: "Commercial Projects",
        href: "#",
      },
      {
        name: "Renovation & Remodeling",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/skandar_constructions/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];