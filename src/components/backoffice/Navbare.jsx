"use client";
import React from "react";
import { AlignJustify, Bell, Sun, User, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import UserAvater from "@/components/backoffice/UserAvater";
import { useSession } from "next-auth/react";

function Navbare({ showSideBar, setshowSideBar }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return (
    <div
      className={`h-20 py-6 fixed top-0 w-full bg-card border-b border-border z-40 ${showSideBar ? "" : "sm:left-64"}`}
    >
      <div
        className={`${showSideBar ? "w-full" : "lg:w-9/12 sm:w-8/12 w-11/12 2xl:w-10/12"} h-9 flex items-center justify-between`}
      >
        {/* Icon */}
        <button
          onClick={() => {
            setshowSideBar(!showSideBar);
          }}
          className="hover:bg-muted/50 rounded-md p-2 transition-colors"
        >
          <AlignJustify
            className={`text-foreground w-6 h-6 ${showSideBar ? "sm:ml-4 ml-64" : "ml-4"}`}
          />
        </button>

        {/* 3 Icons */}

        {/*Change Background Colour dark an white mode Page*/}
        <div className="flex items-center space-x-4 sm:mr-4">
          <button>
            <ThemeToggle />
          </button>

          <Dropdown>
            <DropdownTrigger>
              <button
                type="button"
                className="relative inline-flex items-center p-2 text-sm font-medium text-center text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-lime-600 rounded-full -top-0.5 -right-0.5 border-2 border-background shadow-sm">
                  20
                </div>
              </button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Notifications"
              className="w-96 max-h-[500px] overflow-y-auto"
              classNames={{
                base: "border border-border rounded-lg bg-card shadow-lg dark:shadow-xl overflow-hidden",
                content: "p-0",
              }}
            >
              <DropdownItem
                key="header"
                className="p-0 data-[hover=true]:bg-transparent"
              >
                <div className="px-4 py-3 border-b border-border bg-muted/30 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-foreground">
                      Notifications
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">
                      20 new
                    </span>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem
                key="notif1"
                className="p-0 data-[hover=true]:bg-transparent"
              >
                <div className="flex gap-3 px-4 py-3 bg-card hover:bg-muted/50 transition-colors border-b border-border group w-full">
                  <div className="relative flex-shrink-0">
                    <Image
                      className="w-12 h-12 rounded-full object-cover border-2 border-border shadow-sm"
                      width={48}
                      height={48}
                      src="/profile.jpg"
                      alt="notification"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-lime-500 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <p className="text-sm text-foreground font-medium leading-snug">
                      Yellow Sweet corn out of Stock
                    </p>
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold text-white bg-destructive shadow-sm border border-destructive/20">
                        Stock Out
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        12-10-2004 12:26 pm
                      </span>
                    </div>
                  </div>
                  <button
                    className="flex-shrink-0 hover:bg-destructive/10 rounded-md p-1.5 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Dismiss notification"
                  >
                    <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              </DropdownItem>
              <DropdownItem
                key="notif2"
                className="p-0 data-[hover=true]:bg-transparent"
              >
                <div className="flex gap-3 px-4 py-3 bg-card hover:bg-muted/50 transition-colors border-b border-border group w-full">
                  <div className="relative flex-shrink-0">
                    <Image
                      className="w-12 h-12 rounded-full object-cover border-2 border-border shadow-sm"
                      width={48}
                      height={48}
                      src="/profile.jpg"
                      alt="notification"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-lime-500 border-2 border-background rounded-full"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 min-w-0">
                    <p className="text-sm text-foreground font-medium leading-snug">
                      Yellow Sweet corn out of Stock
                    </p>
                    <div className="flex flex-row gap-2 items-center flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold text-white bg-destructive shadow-sm border border-destructive/20">
                        Stock Out
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        12-10-2004 12:26 pm
                      </span>
                    </div>
                  </div>
                  <button
                    className="flex-shrink-0 hover:bg-destructive/10 rounded-md p-1.5 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Dismiss notification"
                  >
                    <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              </DropdownItem>
              <DropdownItem
                key="footer"
                className="p-0 data-[hover=true]:bg-transparent"
              >
                <div className="px-4 py-3 border-t border-border bg-muted/30 w-full">
                  <button className="w-full text-center text-sm font-medium text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 transition-colors">
                    View all notifications
                  </button>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {status === "authenticated" && <UserAvater user={session?.user} />}
        </div>
      </div>
    </div>
  );
}

export default Navbare;
