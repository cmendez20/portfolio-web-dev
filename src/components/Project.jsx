import { Link } from 'react-router-dom';

const Project = ({ id, title, imageUrl, skills, demo, code }) => {
  return (
    <div className="mb-9 p-6 rounded-md bg-slate-100 shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 w-full object-cover aspect-square "
      />

      <div className="relative">
        <h3 className="mb-4 font-medium">{title}</h3>
        <div className="flex gap-8 mb-4">
          {skills.map(skill => (
            <p key={id} className="text-slate-600 text-sm">
              {skill}
            </p>
          ))}
        </div>
        <div className="flex gap-8 mb-6 pb-2">
          <a
            href={demo}
            target="_blank"
            className="bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            Demo
          </a>
          <a
            href={code}
            target="_blank"
            className="bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            Code
          </a>
        </div>
        <Link
          to="calculator"
          className="hover:underline max-w-max absolute right-[12px] bottom-[-24px]"
        >
          Read more &#8594;
        </Link>
      </div>
    </div>
  );
};

export { Project };
