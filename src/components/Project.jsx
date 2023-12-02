import { Link } from 'react-router-dom';

const Project = ({ id, title, imageUrl, skills }) => {
  return (
    <div className="mb-9 bg-slate-100 p-4 rounded-md">
      <img src={imageUrl} alt={title} className="mb-4 rounded-md" />
      <h3 className="mb-4 font-medium">{title}</h3>
      <div className="flex gap-8 mb-4">
        {skills.map(skill => (
          <p key={id} className="text-slate-600 text-sm">
            {skill}
          </p>
        ))}
      </div>

      <div className="flex gap-8 mb-3">
        <a href="" className="bg-slate-700 text-white px-3 py-1 rounded-md">
          Demo
        </a>
        <a href="" className="bg-slate-700 text-white px-3 py-1 rounded-md">
          Demo
        </a>
      </div>
      <Link
        to="calculator"
        className="text-end w-full inline-block hover:underline"
      >
        Read more &#8594;
      </Link>
    </div>
  );
};

export { Project };
