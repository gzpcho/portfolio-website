import data from '../data.json';
import ProjectCard from '../components/ProjectCard';
import { SimpleGrid } from '@chakra-ui/react';

const Projects = () => {
  const projectList = data.projects;
  console.log(projectList);
  return (
    <SimpleGrid autoColumns>
      {projectList.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          subtitle={project.subtitle}
          tags={project.tags}
          description={project.description}
          url={project.url}
          sourceCodeUrl={project.sourceCodeUrl}
          imageUrl={project.imageUrl}
        />
      ))}
    </SimpleGrid>
  );
};

export default Projects;
