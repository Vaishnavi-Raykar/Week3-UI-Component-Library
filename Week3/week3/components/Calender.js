"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {

  return (
    <>
    <div className="font-bold text-4xl ">Calender</div>
    <Calendar
      mode="single"
      className="rounded-md border shadow"
    />
    </>
  )
}

