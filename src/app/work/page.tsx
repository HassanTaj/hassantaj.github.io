import { Column, Heading, Meta, Schema, Row, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, about, person, profile, work, home } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: work.image || home.image,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={work.image || home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
      <Row fillWidth horizontal="center" paddingX="l" marginBottom="40">
        <Text variant="body-default-s" onBackground="neutral-weak">
          Want to explore more?{" "}
          <SmartLink href={profile.github_url} target="_blank" rel="noopener noreferrer">
            Check out more of my repositories on GitHub
          </SmartLink>
          .
        </Text>
      </Row>
    </Column>
  );
}
