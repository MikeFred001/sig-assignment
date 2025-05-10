import Event from "./Event";

export default function EventList() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Event
        location="Downtown SLC"
        date="Tuesday, October 3rd 2023"
        startTime="9:00am"
        endTime="2:00pm"
        notice="New Patients and Renewals"
      />
      <Event
        location="Price UT"
        date="Thursday, October 19th 2023"
        startTime="9:00am"
        endTime="4:00pm"
        notice="Renewals Only"
      />
      <Event
        location="Provo UT"
        date="Friday, November 10th 2023"
        startTime="10:00am"
        endTime="2:00pm"
        notice="Special Event for Veterans"
      />
    </div>
  );
}
