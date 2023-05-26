"use client";
import { ArrowIcon } from "@/icons";
import { useState, useEffect, useRef } from "react";

export function SideBarLink({ label, icon }) {
  const [sideBarHandle, setSideBarHandle] = useState({
    rotateIcon: 270,
    heightItems: 0,
  });
  const componentRef = useRef(null);
  const itemsRef = useRef(null);

  const rotateClickHandle = () => {
    sideBarHandle.rotateIcon === 270
      ? setSideBarHandle({ rotateIcon: 0, heightItems: itemsRef.current.scrollHeight })
      : setSideBarHandle({ rotateIcon: 270, heightItems: 0 });
  };

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setSideBarHandle({ rotateIcon: 270, heightItems: 0 });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar-link" ref={componentRef}>
      <div className="sidebar-link-label" onClick={rotateClickHandle}>
        <div>{icon}</div>
        <div>{label}</div>
        <div>
          <ArrowIcon rotate={sideBarHandle.rotateIcon} />
        </div>
      </div>

      <div className="sidebar-link-items" style={{ height: sideBarHandle.heightItems }} ref={itemsRef}>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
        <a href="#">link 4</a>
      </div>
    </div>
  );
}
