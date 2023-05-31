"use client";
import { ArrowIcon } from "@/icons";
import { ADMIN_ROOT } from "@/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function SideBarLink({ label, icon, onClickLabel = () => {}, links=[] }) {
  const router = useRouter();
  const [sideBarHandle, setSideBarHandle] = useState({
    rotateIcon: 270,
    heightItems: 0,
  });
  const componentRef = useRef(null);
  const itemsRef = useRef(null);

  const clickLabelHandle = () => {
    sideBarHandle.rotateIcon === 270
      ? setSideBarHandle({
          rotateIcon: 0,
          heightItems: itemsRef.current.scrollHeight,
        })
      : setSideBarHandle({ rotateIcon: 270, heightItems: 0 });

      if(typeof links === "string"){
        onClickLabel();
        router.push(links);
      }
  };

  const clickLinksHandle = () => {
    onClickLabel();
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
      <div className="sidebar-link-label" onClick={clickLabelHandle}>
        <div>{icon}</div>
        <div>{label}</div>
        <div>
          <ArrowIcon rotate={sideBarHandle.rotateIcon} />
        </div>
      </div>

      <div
        className="sidebar-link-items"
        style={{ height: sideBarHandle.heightItems }}
        ref={itemsRef}
      >
        {Array.isArray(links) && links?.map(({ label, route }) => (
          <Link href={route} key={route} onClick={clickLinksHandle}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
