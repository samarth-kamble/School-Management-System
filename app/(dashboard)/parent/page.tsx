import React from 'react'
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalender";
import Announcements from "@/components/Announcement";

const ParentPage = () => {
    return (
        <div className={'p-4 flex gap-4 flex-col xl:flex-row'}>
            {/*    Left     */}
            <div className={'w-full xl:w-2/3'}>
                <div className={'h-full bg-white p-4 rounded-md'}>
                    <h1 className={'text-xl font-semibold'}>Schedule (Samarth Kamble)</h1>
                    <BigCalendar/>
                </div>
            </div>
            {/*    Right    */}
            <div className={'w-full xl:w-1/3 flex flex-col gap- '}>
                <EventCalendar/>
                <Announcements/>
            </div>
        </div>
    )
}
export default ParentPage
