import { social } from "@/types/main";
import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer({
  socials,
  name,
}: {
  socials: social[];
  name: string;
}) {
  return (
    <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
      <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">
        <p className="text-sm mt-2 md:mt-0">
          Feito com
          <span className="animate-pulse"> ❤️ </span>
          por
          <span className="text-violet-600"> {name}</span>
        </p>

        <div className="flex xl:hidden items-center gap-2">
          {socials.map((s: social) => (
            <Link
              href={s.link}
              target="_blank"
              rel="noreferrer"
              key={s.icon}
              className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors"
            >
              {React.createElement(Fa[s.icon as keyof typeof Fa])}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
