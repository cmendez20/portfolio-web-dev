import { Link } from 'react-router-dom';

const Project = ({ id, title, imageUrl, skills }) => {
  return (
    <div className="mb-9 p-6 rounded-md bg-slate-100">
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
        <div className="flex gap-8 mb-6">
          <a
            href=""
            className="bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-500 transition-colors"
          >
            Demo
          </a>
          <a
            href=""
            className="bg-slate-700 text-white px-3 py-1 rounded-md hover:bg-slate-500 transition-colors"
          >
            Code
          </a>
        </div>
        <Link
          to="calculator"
          className="hover:underline max-w-max absolute right-[24px] bottom-[-24px]"
        >
          Read more &#8594;
        </Link>
      </div>
    </div>
  );
};

export { Project };
