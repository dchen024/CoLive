import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import { Question } from "@/app/typeform/questions";

// Make steps array that gets passed to the slider, and then map over it to render the steps
type SliderProps = {
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  steps?: number[] | string[];
  setQuestionHandle: (value: Question) => void;
  isRoommate: boolean;
  currentQuestion: Question;
};


const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className, setQuestionHandle, isRoommate, currentQuestion, min = 0, max = 100, step = 1, steps = 1, ...props }, ref) => {
    const [sliderValue, setSliderValue] = React.useState([min + (max - min) / 2]);

    const handleChange = (value: [number]) => {
      setSliderValue(value);
      console.log(isRoommate, typeof steps === "object" ? steps[value[0] - 1] : currentQuestion.defaultAnswer)
      if (isRoommate) setQuestionHandle({...currentQuestion, roomateAnswer: typeof steps === "object" ? steps[value[0] - 1] : currentQuestion.defaultAnswer}) 
      else setQuestionHandle({...currentQuestion, answer: typeof steps === "object" ? steps[value[0] - 1] : currentQuestion.defaultAnswer})
    };

    const numSteps = (max - min) / step + 1;
    const stepValues = (typeof steps === "object") ? steps : Array.from({ length: numSteps }, (_, i) => min + i * step);

    return (
      <div className={className}>
        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          min={min}
          max={max}
          step={step}
          // get middle value of the array
          value={sliderValue}
          onValueChange={handleChange}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-900/20 dark:bg-neutral-50/20">
            <SliderPrimitive.Range className="absolute h-full bg-neutral-900 dark:bg-neutral-50" />
            {stepValues.map((value, index) => (
              <div
                key={index}
                className="absolute h-1 w-px bg-gray-300"
                style={{
                  left: typeof steps === "object" ? `${(index / (numSteps - 1)) * 100}%` : `${(index / (numSteps - 1)) * 100}%`,
                }}
              />
            ))}
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            className="block h-4 w-4 rounded-full border border-neutral-200 border-neutral-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-50/50 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300"
          />
        </SliderPrimitive.Root>
        <div className="flex justify-between mt-2">
          {stepValues.map((value, index) => (
            <div key={index} className="flex items-center">
              <span className="ml-1 text-xs text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };