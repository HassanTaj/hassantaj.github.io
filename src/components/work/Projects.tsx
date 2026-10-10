import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  include?: string[];
}

export function Projects({ range, exclude, include }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  if (include) {
    allProjects = include.flatMap((slug) => {
      const project = allProjects.find((post) => post.slug === slug);
      return project ? [project] : [];
    });
  }

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const orderedProjects = include
    ? allProjects
    : allProjects.sort((a, b) => {
        return (
          new Date(b.metadata.publishedAt || 0).getTime() -
          new Date(a.metadata.publishedAt || 0).getTime()
        );
      });

  const displayedProjects = range
    ? orderedProjects.slice(range[0] - 1, range[1] ?? orderedProjects.length)
    : orderedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
