import { Project } from './Project';

const Projects = () => {
  const apps = [
    {
      title: 'Job Listings',
      imageUrl: '/img/portfolio-job-listings.png',
      skills: ['HTML', 'TailwindCSS', 'React'],
      id: 1,
    },
    {
      title: 'Typemaster Landing Page',
      imageUrl: '/img/portfolio-landing-page.png',
      skills: ['HTML', 'TailwindCSS', 'Responsive Design'],
      id: 2,
    },
    {
      title: 'Etch-a-Sketch',
      imageUrl: '/img/portfolio-etch-a-sketch.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      id: 3,
    },
    {
      title: 'Calculator',
      imageUrl: '/img/portfolio-calculator.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      id: 4,
    },
  ];

  return (
    <section className="mx-auto sm:max-w-lg xl:mx-0 xl:max-w-full">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl">Recent Works</h2>
      <div className="xl:grid xl:grid-cols-2 xl:gap-12 xl:items-center">
        {apps.map(app => (
          <Project
            key={app.id}
            id={app.id}
            title={app.title}
            imageUrl={app.imageUrl}
            skills={app.skills}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };
