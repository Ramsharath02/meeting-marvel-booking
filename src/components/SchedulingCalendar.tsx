
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import TimeSlotSelector from "./TimeSlotSelector";
import InterviewForm from "./InterviewForm";
import ConfirmationScreen from "./ConfirmationScreen";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface SchedulingCalendarProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
  step: "calendar" | "timeSlots" | "form" | "confirmation";
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
  onBackToCalendar: () => void;
  onBackToTimeSlots: () => void;
  onFormSubmit: () => void;
}

const SchedulingCalendar = ({
  selectedDate,
  selectedTime,
  step,
  onDateSelect,
  onTimeSelect,
  onBackToCalendar,
  onBackToTimeSlots,
  onFormSubmit,
}: SchedulingCalendarProps) => {
  // Generate some mock available time slots
  const generateTimeSlots = (date: Date) => {
    // In a real app, this would come from an API based on the selected date
    const slots = [
      "9:00 AM", "10:00 AM", "11:00 AM", 
      "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
    ];
    
    // Make some dates have fewer slots to simulate availability
    const day = date.getDate();
    if (day % 3 === 0) {
      return slots.slice(0, 4);
    } else if (day % 2 === 0) {
      return slots.slice(1, 6);
    }
    return slots;
  };

  const renderCurrentStep = () => {
    switch (step) {
      case "calendar":
        return (
          <div className="space-y-6 animate-fade-in">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-2xl">Select a Date</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={onDateSelect}
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                className="rounded-md border p-3 w-full pointer-events-auto"
              />
            </CardContent>
          </div>
        );
      case "timeSlots":
        return (
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" onClick={onBackToCalendar} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <h3 className="text-xl font-semibold ml-2">
                {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
              </h3>
            </div>
            <TimeSlotSelector 
              date={selectedDate!} 
              availableSlots={selectedDate ? generateTimeSlots(selectedDate) : []}
              onSelectTime={onTimeSelect}
            />
          </div>
        );
      case "form":
        return (
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Button variant="ghost" size="sm" onClick={onBackToTimeSlots} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <div className="ml-2">
                <h3 className="text-xl font-semibold">
                  {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                </h3>
                <p className="text-gray-600">{selectedTime}</p>
              </div>
            </div>
            <InterviewForm 
              selectedDate={selectedDate!}
              selectedTime={selectedTime!}
              onSubmit={() => {
                toast({
                  title: "Interview Scheduled!",
                  description: "Check your email for confirmation details.",
                });
                onFormSubmit();
              }}
            />
          </div>
        );
      case "confirmation":
        return (
          <ConfirmationScreen
            date={selectedDate!}
            time={selectedTime!}
          />
        );
    }
  };

  return (
    <div className="w-full">
      {renderCurrentStep()}
    </div>
  );
};

export default SchedulingCalendar;
