import { ChevronLeftIcon, XIcon } from "lucide-react";

import { a11yClickProps } from "@/utils";
import { useMiniApp } from "./useMiniApp";

function Header({ title, Icon, noBack }) {
  const { goHome, onCloseButtonClick } = useMiniApp();

  return (
    <header className="w-full h-12 flex flex-row items-center">
      {noBack ? (
        <div className="w-14" />
      ) : (
        <div
          {...a11yClickProps(goHome)}
          className="h-full px-4 flex flex-row items-center cursor-pointer hover:bg-gray-200 transition duration-200"
        >
          <ChevronLeftIcon />
        </div>
      )}

      <div className="flex grow justify-center items-center gap-2 py-3 text-gray-800">
        {Icon && <Icon />}
        <p className="font-semibold">{title}</p>
      </div>

      {onCloseButtonClick && (
        <div
          {...a11yClickProps(onCloseButtonClick)}
          className="h-full px-4 flex flex-row items-center cursor-pointer hover:bg-gray-200 transition duration-200"
        >
          <XIcon />
        </div>
      )}
    </header>
  );
}

export default Header;
