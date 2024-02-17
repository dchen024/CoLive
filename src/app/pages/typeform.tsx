"use client";

import React, {useState, useEffect} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Typeform() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const questions = [
    {
      question: "How clean are you?",
      type: "slider",
      options: [
        "Very messy",
        "Messy",
        "Average",
        "Clean",
        "Very clean"
      ],
      roomate: "How clean would you like your roomate to be?"
    },
    {
      question: "What time do you go to bed?",
      type: "select",
      options: [
        "Before 10pm",
        "Before 12pm",
        "Before 2am",
        "Before 4am",
        "Before 6am"
      ],
      roomate: "What time would you like your roomate to go to bed?"
    }
  ]

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

  }, [api])

    /**
   * Return a typeform with a carousel of questions, that has a next and previous button, and dots to indicate the current question.
   * the question has 2 of the same type of input, and a label. one for the user and one for the preffered roommate.
   * Each question can be a different type of input, such a slider, or select.
   */
  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {questions.map((question, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col mt-4 mb-4">
                  <h1 className="text-md font-bold">{question.question}</h1>
                  {question.type === "slider" && (
                    <div className="flex flex-col">
                      <Slider className='mb-2 mt-2' step={2} min={1} max={5} steps={["no", "neutral", "yes"]}/>
                      <h1 className="text-md font-bold">{question.roomate}</h1>
                      <Slider className='mb-2 mt-2' step={1} min={1} max={5} />
                    </div>
                  )}
                  {question.type === "select" && (
                    <div>
                      <Select>
                        <SelectTrigger className='mt-4 mb-4'>
                        <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent className='mt-4 mb-4'>
                          {question.options.map((option, index) => (
                            <SelectItem value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <h1 className="text-md font-bold">{question.roomate}</h1>
                      <Select>
                        <SelectTrigger className='mt-4'>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {question.options.map((option, index) => (
                            <SelectItem value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* TODO: move these to the bottom of the carousel ONLY ON MOBILE */}
        <CarouselPrevious />
        <CarouselNext />
        
      </Carousel>
      <div className="flex-wrap flex justify-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`${
              current === index + 1 ? "bg-black" : "bg-gray-300"
            } w-2 h-2 rounded-full m-1`}
          />
        ))}
      </div>
    </div>
  )
}