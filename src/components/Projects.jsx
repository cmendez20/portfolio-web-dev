import { Project } from './Project';

const Projects = () => {
  const apps = [
    {
      title: 'Job Listings',
      imageUrl: '/img/portfolio-job-listings.png',
      skills: ['HTML', 'TailwindCSS', 'React'],
      demoUrl: 'https://job-listings-cjmendez.netlify.app',
      codeUrl: 'https://github.com/cmendez20/job-listings',
      id: 1,
    },
    {
      title: 'Typemaster Landing Page',
      imageUrl: '/img/portfolio-landing-page.png',
      skills: ['HTML', 'TailwindCSS', 'Responsive Design'],
      demoUrl: 'https://typemaster-keyboards-cjmendez.netlify.app/',
      codeUrl: 'https://github.com/cmendez20/typemaster-landing-page',
      id: 2,
    },
    {
      title: 'Etch-a-Sketch',
      imageUrl: '/img/portfolio-etch-a-sketch.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://cmendez20.github.io/etch_a_sketch/',
      codeUrl: 'https://github.com/cmendez20/etch_a_sketch',
      id: 3,
    },
    {
      title: 'Cocktail App',
      imageUrl: '/img/portfolio-cocktail-app.png',
      skills: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://cmendez20.github.io/cocktail-app/',
      codeUrl: 'https://github.com/cmendez20/cocktail-app',
      id: 4,
    },
  ];

  return (
    <section className="mx-auto sm:max-w-lg xl:mx-0 xl:max-w-full">
      <h2 className="text-2xl font-bold mb-6 md:text-3xl text-center xl:text-start">
        Recent Works
      </h2>
      <div className="xl:grid xl:grid-cols-2 xl:gap-12 xl:items-center xl:">
        {apps.map(app => (
          <Project
            key={app.id}
            id={app.id}
            title={app.title}
            imageUrl={app.imageUrl}
            skills={app.skills}
            demo={app.demoUrl}
            code={app.codeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };
