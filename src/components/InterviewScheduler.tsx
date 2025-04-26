
import { useState } from "react";
import { Card } from "@/components/ui/card";
import ServiceInfo from "./ServiceInfo";
import SchedulingCalendar from "./SchedulingCalendar";

const InterviewScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [step, setStep] = useState<"calendar" | "timeSlots" | "form" | "confirmation">("calendar");

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setStep("timeSlots");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep("form");
  };

  const handleBackToCalendar = () => {
    setSelectedTime(undefined);
    setStep("calendar");
  };

  const handleBackToTimeSlots = () => {
    setStep("timeSlots");
  };

  const handleFormSubmit = () => {
    // In a real application, we would send the email and create calendar event here
    setStep("confirmation");
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Interview Scheduler</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ServiceInfo />
        <Card className="p-6 shadow-lg rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            <SchedulingCalendar 
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              step={step}
              onDateSelect={handleDateSelect}
              onTimeSelect={handleTimeSelect}
              onBackToCalendar={handleBackToCalendar}
              onBackToTimeSlots={handleBackToTimeSlots}
              onFormSubmit={handleFormSubmit}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InterviewScheduler;
