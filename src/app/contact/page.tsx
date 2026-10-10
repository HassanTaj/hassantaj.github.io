import {
  Button,
  Column,
  Heading,
  Icon,
  Input,
  Media,
  Meta,
  Row,
  Schema,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { about, baseURL, home, person, profile, social } from "@/resources";

const contactDescription =
  "Let's talk about application modernization, architecture, cloud, and platform engineering.";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact",
    description: contactDescription,
    baseURL,
    image: home.image,
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" gap="l" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Contact"
        description={contactDescription}
        path="/contact"
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth gap="l" vertical="start" s={{ direction: "column" }}>
        <Column flex={3} fillWidth gap="m">
          <Heading variant="display-strong-m">Contact</Heading>
          <Text variant="heading-default-m">Let's talk about what you're building.</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I'm {profile.name}, a Senior Software Engineer and Microsoft Certified Azure Solutions
            Architect Expert. I build and modernize enterprise applications across .NET, cloud,
            identity, and platform engineering.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Have a system design question, a platform to modernize, or an idea you'd like to
            explore? Send a message below or book a time in the Connect panel. A short note is
            enough to start.
          </Text>
          <Button href={`mailto:${person.email}`} prefixIcon="mail" variant="secondary" size="s">
            Email me
          </Button>
        </Column>
        <Column flex={2} fillWidth>
          <Media
            src="/images/contact-banner.png"
            alt="A smartphone profile connected to chat, phone, and email symbols by a glowing network"
            fillWidth
            aspectRatio="16 / 9"
            sizes="(max-width: 768px) 100vw, 40vw"
            radius="l"
            style={{ width: "100%", boxSizing: "border-box", marginTop: "8px" }}
          />
        </Column>
      </Row>
      <Row fillWidth gap="l" vertical="start" s={{ direction: "column" }}>
        <Column flex={3} fillWidth>
          <form action="https://formspree.io/f/xpzeekaq" method="POST">
            <Column fillWidth gap="m">
              <Input
                id="name"
                name="name"
                label="Full name"
                placeholder="eg.: Your Name"
                required
                focusRing
              />
              <Input
                id="email"
                name="email"
                label="Email address"
                type="email"
                placeholder="example@domain.com"
                required
                focusRing
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                placeholder="To Write"
                required
                lines={6}
                focusRing
              />
              <Button type="submit" variant="primary" arrowIcon>
                Send Message
              </Button>
            </Column>
          </form>
        </Column>
        <Column flex={2} fillWidth>
          <Column
            fillWidth
            gap="m"
            padding="l"
            border="neutral-alpha-medium"
            background="surface"
            radius="l"
            style={{ boxSizing: "border-box", width: "100%" }}
          >
            <Column gap="8">
              <Heading as="h2" variant="heading-strong-m">
                Connect
              </Heading>
              <Text onBackground="neutral-weak">
                Find me on GitHub, LinkedIn, or Instagram, or schedule a time to talk.
              </Text>
            </Column>
            <Column gap="8">
              {social
                .filter(
                  (item) => ["GitHub", "LinkedIn", "Instagram"].includes(item.name) && item.link,
                )
                .map((item) => (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="secondary"
                  />
                ))}
              <Row
                fitWidth
                gap="4"
                vertical="center"
                paddingX="8"
                paddingY="4"
                minHeight="32"
                border="neutral-alpha-weak"
                radius="m"
              >
                <Icon name="discord" size="xs" onBackground="neutral-weak" />
                <Text variant="body-strong-s">hassantaj</Text>
              </Row>
            </Column>
            {about.calendar.display && (
              <Button href={about.calendar.link} prefixIcon="calendar" variant="primary">
                Schedule a call
              </Button>
            )}
          </Column>
        </Column>
      </Row>
    </Column>
  );
}
