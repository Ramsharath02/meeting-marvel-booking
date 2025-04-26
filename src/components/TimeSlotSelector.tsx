
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";

interface TimeSlotSelectorProps {
  date: Date;
  availableSlots: string[];
  onSelectTime: (time: string) => void;
}

const TimeSlotSelector = ({ date, availableSlots, onSelectTime }: TimeSlotSelectorProps) => {
  const [showTimezoneSelector, setShowTimezoneSelector] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("UTC-5 (Eastern Time)");
  
  // Sample timezones - in a real app, you would have a more comprehensive list
  const timezones = [
    { value: "UTC-8", label: "UTC-8 (Pacific Time)" },
    { value: "UTC-7", label: "UTC-7 (Mountain Time)" },
    { value: "UTC-6", label: "UTC-6 (Central Time)" },
    { value: "UTC-5", label: "UTC-5 (Eastern Time)" },
    { value: "UTC", label: "UTC (Coordinated Universal Time)" },
    { value: "UTC+1", label: "UTC+1 (Central European Time)" },
    { value: "UTC+2", label: "UTC+2 (Eastern European Time)" },
    { value: "UTC+5:30", label: "UTC+5:30 (Indian Standard Time)" },
    { value: "UTC+8", label: "UTC+8 (China Standard Time)" },
    { value: "UTC+9", label: "UTC+9 (Japan Standard Time)" },
    { value: "UTC+10", label: "UTC+10 (Australian Eastern Time)" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Available Time Slots</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableSlots.map((slot) => (
          <Button
            key={slot}
            variant="outline"
            className="hover:border-primary hover:bg-primary/5 transition-colors"
            onClick={() => onSelectTime(slot)}
          >
            {slot}
          </Button>
        ))}
      </div>
      
      <div className="pt-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 gap-2"
          onClick={() => setShowTimezoneSelector(!showTimezoneSelector)}
        >
          <Globe className="h-4 w-4" />
          <span>Time zone: {selectedTimezone}</span>
          {showTimezoneSelector ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        
        {showTimezoneSelector && (
          <Card className="mt-2 animate-scale-in">
            <CardContent className="p-2">
              <div className="max-h-48 overflow-y-auto">
                {timezones.map((timezone) => (
                  <Button
                    key={timezone.value}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      setSelectedTimezone(timezone.label);
                      setShowTimezoneSelector(false);
                    }}
                  >
                    {timezone.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
