import Image from "next/image";
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-12 bg-black items-center py-20 justify-items-center md:justify-items-start"
      data-v-5c809264=""
    >
      <div
        className="md:col-start-2 md:col-end-4 pl-8 md:pl-0"
        data-v-5c809264=""
      >
        <Image
          src="/gala.svg"
          className="mb-8"
          data-v-5c809264=""
          alt="d"
          height={100}
          width={100}
        />
        <p className="text-xs" data-v-5c809264="">
          {" "}
          © Gala Games. All rights reserveds.
        </p>
        <p className="text-xs" data-v-5c809264="">
          <a href="/terms-and-conditions" target="_blank" data-v-5c809264="">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="/privacy-policy" target="_blank" data-v-5c809264="">
            Privacy Policy
          </a>
        </p>
      </div>
      <div
        className="md:col-start-5 md:col-end-10 hidden md:block"
        data-v-5c809264=""
      >
        <label className="title" data-v-5c809264="">
          Be the first to know about Gala.{" "}
        </label>
        <div
          className="flex items-center mb-5"
          data-v-12f4f1d4=""
          data-v-5c809264=""
        >
          <form
            className="form-signup grid grid-cols-1 gap-y-6"
            data-v-12f4f1d4=""
          >
            <div className="form-signup__email" data-v-12f4f1d4="">
              <div className="w-full" data-v-12f4f1d4="">
                <label htmlFor="email" className="sr-only" data-v-12f4f1d4="">
                  email
                </label>

                <div
                  className="relative rounded-md shadow-sm"
                  data-v-12f4f1d4=""
                >
                  <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    className="bg-dark px-6 py-2.5 font-normal"
                    placeholder="Enter your Email here..."
                    data-v-12f4f1d4=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-sign mx-3.5 py-2.5 font-medium text-sm hidden md:block"
                data-v-12f4f1d4=""
              >
                Submit
              </button>
            </div>
            <div
              className="form-signup__terms flex items-start mb-2.5"
              data-v-12f4f1d4=""
            >
              <input
                required
                title="f"
                type="checkbox"
                name="accept"
                value="true"
                data-v-12f4f1d4=""
              />
              <label
                htmlFor="accept"
                className="text-sm font-normal ml-2.5"
                data-v-12f4f1d4=""
              >
                I accept and agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="underline"
                  target="_blank"
                  data-v-12f4f1d4=""
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms-and-conditions"
                  className="underline"
                  target="_blank"
                  data-v-12f4f1d4=""
                >
                  Terms and Conditions
                </a>
                .
              </label>
            </div>
            <div
              className="form-signup__terms flex items-start"
              data-v-12f4f1d4=""
            >
              <input
                title="f"
                type="checkbox"
                name="agree"
                value="true"
                data-v-12f4f1d4=""
              />
              <label
                htmlFor="agree"
                className="text-sm font-normal ml-2.5"
                data-v-12f4f1d4=""
              >
                I agree to receive promotional materials from Gala.{" "}
                <br data-v-12f4f1d4="" /> I understand that I can withdraw my
                consent at any time.
              </label>
            </div>
            <div
              className="form-signup__mobile block md:hidden"
              data-v-12f4f1d4=""
            >
              <button
                type="submit"
                className="btn-sign py-2.5 font-medium text-sm"
                data-v-12f4f1d4=""
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:col-start-10 mt-16 md:mt-0" data-v-5c809264="">
        <div className="flex" data-v-5c809264="">
          <Image
            className="w-6"
            src="/instagram.svg"
            data-v-5c809264=""
            alt="r"
            height={100}
            width={100}
          />
          <a
            href="https://www.instagram.com/gogalagames/"
            target="_blank"
            className="text-sm link-text pl-2.5"
            data-v-5c809264=""
            rel="noopener"
          >
            Instagram
          </a>
        </div>
        <div className="flex" data-v-5c809264="">
          <Image
            className="w-6 twit-logo"
            src="/twitter.svg"
            data-v-5c809264=""
            alt="f"
            height={100}
            width={100}
          />

          <a
            href="https://twitter.com/GoGalaGames"
            target="_blank"
            className="text-sm pl-2.5"
            data-v-5c809264=""
            rel="noopener"
          >
            Twitter
          </a>
        </div>
        <div className="flex" data-v-5c809264="">
          <Image
            className="w-6"
            src="/discord-square.svg"
            data-v-5c809264=""
            alt="d"
            height={100}
            width={100}
          />

          <a
            href="https://galagames.chat/"
            target="_blank"
            className="text-sm link-text pl-2.5"
            data-v-5c809264=""
            rel="noopener"
          >
            Discord
          </a>
        </div>
        <div className="flex" data-v-5c809264="">
          <Image
            className="w-6 medium-logo"
            src="/medium.svg"
            data-v-5c809264=""
            alt=""
            height={100}
            width={100}
          />
          <a
            href="https://gogalagames.medium.com/"
            target="_blank"
            className="text-sm link-text pl-2.5"
            data-v-5c809264=""
            rel="noopener"
          >
            Medium
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
