import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Text } from "@once-ui-system/core";
import profile from "../../data/profile.json";

const person: Person = {
  firstName: profile.firstName,
  lastName: profile.lastName,
  name: profile.name,
  role: profile.subname,
  avatar: "/images/new_profile.png",
  email: profile.email,
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu", "Punjabi"],
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: profile.github_url,
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: profile.linkedin_url,
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/hassantaj01/",
    essential: true,
  },
  {
    name: "Discord",
    icon: "discord",
    link: "",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: profile.overview,
  headline: <>{person.role}</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Reusable .NET Application Platform</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          GitHub Repository
        </Text>
      </Row>
    ),
    href: "https://github.com/perspective-v/application-foundation",
  },
  subline: <>{profile.overview}</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: profile.overview,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/hassan-taj",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <Column gap="m">
        <Text>{profile.about_intro}</Text>
        <Text>{profile.about_tech}</Text>
        <Text>{profile.about_desc}</Text>
      </Column>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: profile.experiences.map((experience) => ({
      company: experience.company,
      timeframe: experience.date,
      role: experience.title,
      achievements: [experience.description],
    })),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & certifications",
    institutions: [
      {
        name: "Virtual University, Pakistan",
        description: <>2014-2018</>,
      },
      {
        name: "Azure Solutions Architect Expert",
        description: (
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/hassantaj/E459B9F7D7A826D4?sharingId=F236A6E17FDA877C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft · See credential
          </a>
        ),
      },
      {
        name: "Azure Administrator Associate",
        description: (
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/hassantaj/E5F989A52719D58A?sharingId=F236A6E17FDA877C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft · See credential
          </a>
        ),
      },
      {
        name: "Developing Secure Software (LFD121)",
        description: (
          <a
            href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/9f38bed3-526c-474c-9125-9f1e0bba5a6a-hassan-taj-afaf7626-3f2a-4593-86cc-30be3897ca32-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Linux Foundation · See credential
          </a>
        ),
      },
      {
        name: "Azure Developer Associate",
        description: (
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/hassantaj/22A4B41F6BC2A675?sharingId=F236A6E17FDA877C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft · See credential
          </a>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: profile.skills.map((skill) => ({
      title: skill.title,
      description: skill.description,
    })),
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Engineering Work",
  description: "Personal projects and technical exploration",
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { profile, person, social, newsletter, home, about, blog, work, gallery };
