import Link from "next/link";
import { useState } from "react";
import MainLayout from "../components/Mainlayout/mainLayout";
import Calendar from "../components/Calendar/calendar";

export default function Home() {


  return (
    <>
      <MainLayout title={"Home Page"}>
        <Calendar />
      </MainLayout>
    </>
  );
}

