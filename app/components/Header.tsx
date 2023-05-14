"use client";
import React, { FC, useState } from "react";
import Icons from "./Icons";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-black">
      <div>
        <nav className="gala-header">
          <div className="py-5 mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center justify-between gap-[30px]">
              <a href="/" data-v-0afaa9ba="" title="d">
                {Icons.Gala}
              </a>
              <div data-v-0afaa9ba="">
                <div
                  className="gala-nav md:block lg:block not-active"
                  data-v-0afaa9ba=""
                >
                  <ul className="gala-nav__list transition" data-v-0afaa9ba="">
                    <li className="gala-nav__list-item" data-v-0afaa9ba="">
                      <a
                        href="https://app.gala.games/"
                        className="mr-2"
                        data-v-0afaa9ba=""
                      >
                        Games
                      </a>
                      {Icons.linkArrow}
                    </li>
                    <li className="gala-nav__list-item" data-v-0afaa9ba="">
                      <a
                        href="https://music.gala.com/"
                        className="mr-2"
                        data-v-0afaa9ba=""
                      >
                        Music
                      </a>
                      {Icons.linkArrow}
                    </li>
                    <li className="gala-nav__list-item" data-v-0afaa9ba="">
                      <a
                        href="https://film.gala.com/"
                        className="mr-2"
                        data-v-0afaa9ba=""
                      >
                        Film
                      </a>
                      {Icons.linkArrow}
                    </li>
                    <li className="gala-nav__list-item" data-v-0afaa9ba="">
                      <a href="/galaverse" data-v-0afaa9ba="">
                        Galaverse
                      </a>
                    </li>
                    <li
                      className="gala-nav__list-cta md:hidden"
                      data-v-0afaa9ba=""
                    >
                      <a
                        className="text-black"
                        href="/sign-up"
                        data-v-0afaa9ba=""
                      >
                        <button data-v-0afaa9ba="">Sign Up</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="gala-menu" data-v-0afaa9ba="">
                <div
                  className="gala-menu__toggle relative z-50 sm:block md:hidden text-white focus:outline-none"
                  data-v-0afaa9ba=""
                >
                  {}
                </div>
              </div>
            </div>
            <div
              className="gala-nav__rightmenu hidden md:flex justify-center gap-2 items-center"
              data-v-0afaa9ba=""
            >
              <a
                href="https://galagames.chat/"
                className="md:inline-block transition duration-150 ease-in-out px-6"
                data-v-0afaa9ba=""
                title="j"
              >
                {Icons.Discord}
              </a>
              <a className="text-black" href="/sign-up" data-v-0afaa9ba="">
                <button data-v-0afaa9ba="">Sign Up</button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
