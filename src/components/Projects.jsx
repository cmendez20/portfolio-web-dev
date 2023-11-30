import { Project } from './Project';

const Projects = () => {
  // project title, project imgUrl, skills

  return (
    <section className="mx-auto sm:max-w-lg xl:mx-0">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl">Recent Works</h2>
      <Project />
      <Project />
    </section>
  );
};

export { Projects };
