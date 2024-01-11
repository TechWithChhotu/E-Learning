import { Link } from "react-router-dom";

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-10 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-extrabold text-indigo-600">404</p>
          <h1 className="font-bold tracking-tight text-gray-900 ">
            Page not found
          </h1>

          <p className="mt-2 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <button
              onClick={goBack}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
            <Link
              to="/contact-us"
              className="text-sm font-semibold text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
