import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

interface DatePickerProps {
  onDayClick: (date: Date) => void;
  label: string;
  className?: string;
}

export function DatePicker({ onDayClick, label, className }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const handleDayClick = (selectedDate: Date) => {
    setDate(selectedDate);
    onDayClick(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start rounded-none text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onDayClick={handleDayClick}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
