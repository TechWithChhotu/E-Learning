import Lo_White from "../../assets/LO-White.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const login = useSelector((state) => state.userSlice.login);
  return (
    <div className="flex justify-around items-center h-16  px-16">
      <div className="flex items-center gap-x-2">
        <img src={Lo_White} alt="Lo_White_Logo" className="w-12 rounded-full" />
        <h1 className="text-[22px]">Learn Online</h1>
      </div>

      <div className="flex items-center  outline-1  outline outline-gray-700 bg-slate-50 rounded-md">
        <input
          type="text"
          className="w-[600px] h-8 rounded-md outline-none px-2 bg-transparent"
          placeholder="Search by course title"
        />
        <MagnifyingGlassIcon className="h-6 pr-2" />
      </div>
      <div>
        {login ? (
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="mx-5 border-b border-gray-400">
                  <p className="text-orange-600 font-bold ">Hello</p>
                  <p className="text-lg font-bold text-gray-500">Chhotu</p>
                </div>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Courses
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        ) : (
          <button className=" bg-orange-600 px-5 py-2 rounded-md text-white font-semibold">
            {/* bg-indigo-600 */}
            <Link to="sign-in">Login / Register</Link>
          </button>
        )}

        {/* Profile dropdown */}
        {/* Open this if user login */}
      </div>
    </div>
  );
}

export default Header;
