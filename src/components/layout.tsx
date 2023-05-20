import React from "react";
import { Outlet } from "react-router-dom";
import {
  EntryProps,
} from "../typescript/layout";

export default function Layout({ entry }: { entry: EntryProps }) {

  return (
    <div className='layout'>
      <Outlet />
    </div>
  );
}
