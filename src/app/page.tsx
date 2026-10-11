import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Carousel,
  Grid,
  Row,
  Schema,
  Meta,
  Line,
  SmartLink,
} from "@once-ui-system/core";
import { home, about, person, profile, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { TypedHeadline } from "@/components/TypedHeadline";

const engineeringFocus = [
  {
    title: "Application & Solution Architecture",
    description:
      "I combine hands-on .NET, Angular, and React delivery with application boundaries, integration flows, API and data design, and pragmatic architecture decisions.",
  },
  {
    title: "Cloud Modernization",
    description:
      "I modernize legacy applications and delivery workflows across Azure and AWS through .NET migrations, frontend upgrades, container deployments, automation, and cloud integration.",
  },
  {
    title: "Identity & Integration",
    description:
      "I work on Single Sign-On, authentication, API gateways, multi-application identity, and service integrations using REST, GraphQL, gRPC, and modern security standards.",
  },
  {
    title: "Developer Experience",
    description:
      "I improve engineering feedback loops through reusable libraries, code reviews, documentation, architecture decisions, CI/CD, specification-driven development, and responsible AI use.",
  },
];

const recommendations = [
  {
    name: "Madeeha Khalid Khan",
    role: "Director Human Resources, DCC Consultants",
    context: "July 31, 2024 · Worked with Hassan across companies",
    quote:
      "Briefly and specifically, the professionalism, dedication, smart work, quick learning, prompt understanding, following deadlines and courtesy are the traits that can be rarely seen in one single person and Hassan Taj is one of those rare people. Best of luck.",
  },
  {
    name: "Muhammad Aqib Khan",
    role: "Acting Tech Lead & Senior Backend Engineer 1, Snoonu",
    context: "July 16, 2024 · Managed Hassan directly",
    quote:
      "It's always fun working with Hassan. We were seated together in a big team and we enjoyed working together, shared countless technical stuff and insights with each other. Hassan is a must-have resource in a team and is a very good developer. You have to keep him challenging always to get most of him. He is one of the resources that I know are good sound developers. I would fully recommend him for any role in .Net C# and Angular. Wish you all the best Hassan!",
  },
  {
    name: "Asif Khokhar",
    role: "Senior Software Engineer",
    context: "December 21, 2023 · Worked with Hassan on the same team",
    quote:
      "I am pleased to highly recommend Hassan as an exceptional Developer. I had the privilege of working closely with him on a challenging project in SSI, and he consistently demonstrated outstanding skills and dedication. Hassan is a highly proficient developer with deep expertise in .NET, Angular, and Azure to name a few. His ability to translate complex requirements into efficient solutions greatly contributed to the success of our project. He is not only a quick learner but also stays current with the latest industry trends. Throughout our collaboration, he exhibited excellent communication skills, provided clear updates on project progress, actively contributed to collaborative discussions, fostered a positive work environment, and consistently met project deadlines. I am confident that Hassan would be a valuable asset to any organization seeking a skilled .NET/Angular/Azure Developer.",
  },
  {
    name: "Muhammad Kashif Javed",
    role: "Lead .NET Engineer",
    context: "July 2, 2023 · Worked with Hassan across companies",
    quote:
      "I had the privilege of working with Hassan Taj on a US client project, and it was an incredible experience. I learned a great deal from his exceptional architectural skills, which greatly improved my work on other projects. Hassan's outstanding work attitude and ethics are truly inspiring. He approaches every task with energy and motivation, never seeing challenges as obstacles. I highly recommend him as a mentor.",
  },
  {
    name: "Usman Javed",
    role: "Azure Certified DevOps & .NET Engineer",
    context: "March 9, 2021 · Senior colleague",
    quote:
      "Hassan did an exceptional job on projects with me. As I remember, Hassan was a very productive and multi-skilled person with sound knowledge and good understanding of concepts. Hassan is careful, proactive, self motivated and intelligent team player. It was a pleasure working with Hassan as Hassan is a result oriented colleague.",
  },
  {
    name: "Abdul Wasey",
    role: "Senior Cross-Platform Developer",
    context: "November 11, 2020 · Worked with Hassan on the same team",
    quote: "Great researcher and developer.",
  },
  {
    name: "Ahmer Khan",
    role: "DevOps | MLOps Expert",
    context: "Peer recommendation",
    quote:
      "I've worked with Hassan and can highly recommend them as a top-notch full-stack developer. Their skills in front and back-end tech, plus their azure cloud expertise, make them a valuable asset on any project. They're detail-oriented, great at communicating and solving problems, making them a reliable team player. Any organization would be lucky to have him as their full-stack developer with Azure expertise.",
  },
  {
    name: "Shakir Idrees",
    role: "Principal SQA Engineer / QA Lead",
    context: "November 6, 2022 · Managed Hassan directly",
    quote:
      "I have worked with Hassan Taj on a project and found him a dedicated resource who keeps on trying to deliver best as he can. He writes the code and reviews it himself to improve its logic and performance. His attitude is positive and his tendency towards continuous growth.",
  },
  {
    name: "Muhammad Ahmed",
    role: "Senior Full Stack .NET Developer",
    context: "June 24, 2022 · Worked with Hassan on the same team",
    quote:
      "I have worked with Hassan in a same team for 1+ year at SSI. He is remarkable in the abilities and the skill set he has and master in .NET Core and Angular technology stack. He is very intelligent, quick learner and has positive attitude. The one of the best thing I like in his personality is his jolly and enthusiastic nature. I like to do work with him because his mind is flooded with optimal ideas. So his company is always beneficial and learningful. I would recommend Hassan for every technology platform because he is born with all-rounder mindset.",
  },
  {
    name: "Syed Rizwan Ali",
    role: "Software Engineer, Beyond ONE",
    context: "February 1, 2022 · Worked with Hassan",
    quote:
      "I have been working with Hassan since May 2021. I have found him as a person filled with knowledge and hunger for more, with hands-on experience in multiple technologies and domains, I have found him remarkable in .Net Core and Angular. He is a valuable member of our team, and it is due to his extra-ordinary efforts that we have been able to achieve our goals within due time. He also has a very good work ethic, and is always open to help and guide others in the team. I will recommend Hassan on every platform.",
  },
  {
    name: "Hammad Ahad Razi",
    role: "Project Management & Software Design Consultant",
    context: "July 8, 2024 · Managed Hassan directly",
    quote:
      "Hassan worked as a software engineer in my team. Hassan is a highly organized goal-oriented independent and hardworking resource, always ready to put all his energy to get the job done. He is able to work in a fast-paced environment, always ready to adopt new tools and technologies. He respects everyone and is an honest person.",
  },
  {
    name: "Haroon Mubarik",
    role: "Principal Software Engineer, Ascertia",
    context: "April 1, 2021 · Managed Hassan directly",
    quote:
      "Work with Hassan. He is very hardworking and skillful. He knows his task and understands the requirements very well and finds smart solutions. He is very intelligent and smart.",
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              <TypedHeadline phrases={profile.subtitles} />
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <Column fillWidth gap="m" paddingX="l">
        <Column gap="8">
          <Heading as="h2" variant="display-strong-xs">
            Engineering Focus
          </Heading>
          <Text onBackground="neutral-weak">From implementation to architecture</Text>
        </Column>
        <Grid columns={2} s={{ columns: 1 }} gap="m">
          {engineeringFocus.map((item) => (
            <Column
              key={item.title}
              fillWidth
              gap="m"
              padding="l"
              background="surface"
              border="neutral-alpha-weak"
              radius="l"
            >
              <Heading as="h3" variant="heading-strong-m">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.description}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>
      <Column fillWidth gap="m" paddingX="l">
        <Column gap="8">
          <Heading as="h2" variant="display-strong-xs">
            Featured Work
          </Heading>
          <Text onBackground="neutral-weak">
            Secure infrastructure, reliable delivery, and human-reviewed automation
          </Text>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects
          include={[
            "ai-native-platform-ops",
            "production-platform-reference",
            "zero-trust-homelab",
          ]}
        />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Column fillWidth gap="m" paddingX="l">
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="m"
          s={{ direction: "column", horizontal: "start", vertical: "start" }}
        >
          <Column gap="8">
            <Heading as="h2" variant="display-strong-xs">
              LinkedIn Recommendations
            </Heading>
            <Text onBackground="neutral-weak">What managers, peers, and collaborators say</Text>
          </Column>
          <SmartLink href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
            View LinkedIn
          </SmartLink>
        </Row>
        <Carousel
          aspectRatio="auto"
          items={recommendations.map((recommendation) => ({
            slide: (
              <Column
                fillWidth
                gap="m"
                padding="l"
                background="surface"
                border="neutral-alpha-weak"
                radius="l"
              >
                <Column gap="4">
                  <Heading as="h3" variant="heading-strong-s">
                    {recommendation.name}
                  </Heading>
                  <Text variant="body-default-s">{recommendation.role}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {recommendation.context}
                  </Text>
                </Column>
                <Text as="p" variant="body-default-m" onBackground="neutral-weak">
                  “{recommendation.quote}”
                </Text>
              </Column>
            ),
          }))}
        />
      </Column>
    </Column>
  );
}
