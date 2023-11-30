import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className="mb-9 bg-slate-100 p-4 rounded-md">
      <img
        src="/img/portfolio-calculator.png"
        alt="calcultor"
        className="mb-4 rounded-md"
      />
      <h3 className="mb-4 font-medium">Minimalistic Calculator</h3>
      <div className="flex gap-8 mb-4">
        <p className="text-slate-600 text-sm">HTML</p>
        <p className="text-slate-600 text-sm">CSS</p>
        <p className="text-slate-600 text-sm">JavaScript</p>
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
