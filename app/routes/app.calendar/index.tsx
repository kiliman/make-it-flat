import {Outlet} from "@remix-run/react";

export default function CalendarLayout() {
  return (
    <div>
      <h1>Calendar Layout</h1>
      <Outlet />
    </div>
  )
}
