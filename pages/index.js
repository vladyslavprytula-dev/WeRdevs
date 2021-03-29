import Link from "next/link";
import { useState } from "react";
import MainLayout from "../components/Mainlayout/mainlayout";
import Calendar from "../components/Calendar/calendar";
import moment from "moment";

import Head from "next/head";

export default function Home() {
  // const [selectedDate, setSelectedDate] = useState(moment());

  // console.log(selectedDate.format("dddd"));

  return (
    <>
      <MainLayout title={"Home Page"}>
        <Calendar />
      </MainLayout>
    </>
  );
}
// value={selectedDate} onChange={setSelectedDate}
