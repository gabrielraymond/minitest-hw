"use client";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Autocomplete = ({ option }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const titleFilter = searchParams.get("title");

  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState<string>();

  const filteredItems = option.filter((item: any) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (val: any) => {
    setSearch(val);
    setValue(val);
    setIsShow(false);
    router.push(pathname + "?" + createQueryString("title", val));
  };

  const handleReset = () => {
    setValue("");
    setSearch("");
    router.push(pathname);
  };

  useEffect(() => {
    if (titleFilter) {
      setValue(titleFilter);
      setSearch(titleFilter);
    }
  }, [titleFilter]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="relative">
      <div
        className={`bg-white px-4 py-2 flex items-center justify-between gap-2 rounded-lg w-[400px] cursor-pointer`}
      >
        <input
          type="text"
          placeholder="search"
          className="w-full focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          onFocus={() => setIsShow(true)}
          //   onBlur={() => setIsShow(false)}
        />
        <div>
          {value ? (
            <FontAwesomeIcon
              icon={faTimes}
              className=" "
              onClick={handleReset}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className=" "
              onClick={() => setIsShow(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`${
          isShow ? "block" : "hidden"
        } absolute bg-white top-full z-30 5 w-full rounded-lg`}
      >
        {filteredItems.slice(0, 10).map((item: any, idx:number) => (
          <div
            className="w-full px-4 py-2 hover:bg-sky-600 hover:text-white rounded-lg cursor-pointer"
            onClick={() => handleClick(item.title)}
            key={idx}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
