import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";
import { useAccount } from "~/store/auth/hooks";

export default function Menu() {

  const account = useAccount()

  return (
    <nav className="mt-0.5 mb-1" key={account}>
      {mainMenu.map((menu, index) => (
        <NavLink key={index} to={typeof menu.path === 'function' ? menu.path() : menu.path} className="py-[3px] block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 inline-flex items-center rounded-full gap-5 transition-colors group-hover:bg-[#eff3f41a]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notitication && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] ">
                    {menu?.notitication}
                  </span>
                )}

                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl">{menu.tittle}</div>
            </div>
          )}
        </NavLink>
      ))}

      <More />

      <New />


    
    </nav>
  );
}
