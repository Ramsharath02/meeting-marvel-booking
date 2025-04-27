import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-full p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full justify-center",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-base font-medium dark:text-gray-200",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 dark:border-gray-600 dark:hover:bg-gray-700"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex w-full",
        head_cell: "text-muted-foreground rounded-md w-full font-normal text-[0.9rem] dark:text-gray-400",
        row: "flex w-full mt-2",
        cell: "h-10 w-full text-center text-sm relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-full p-0 font-normal aria-selected:opacity-100 relative dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100",
          "after:absolute after:content-['-'] after:bottom-0.5 after:left-1/2 after:transform after:-translate-x-1/2 after:text-primary after:opacity-0 [&[data-scheduled='true']]:after:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground dark:bg-primary dark:text-gray-900",
        day_today: "bg-accent text-accent-foreground dark:bg-gray-700 dark:text-white font-semibold",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30 dark:text-gray-500",
        day_disabled: "text-muted-foreground opacity-50 dark:text-gray-600",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground dark:aria-selected:bg-gray-700 dark:aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-5 w-5" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-5 w-5" />,
      }}
      modifiers={{
        scheduled: props.selected || [],
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
