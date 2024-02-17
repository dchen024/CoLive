import React, {useState, useEffect, useRef} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import { ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon} from "@radix-ui/react-icons"
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button, buttonVariants  } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Question, questions } from './questions';
import { lowercaseAndRemoveSpaces } from '@/lib/utils';



export default function Typeform() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const [currentQuestions, setQuestions] = useState<Question[]>(questions)

  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  })
 
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  // use ref to get the current question answere

  function setQuestion(question: Question) {
    setQuestions(currentQuestions.map((q) => q.question == question.question ? question : q))
  }

  function handleSubmit() {
    form.handleSubmit((data: z.infer<typeof FormSchema>) => {})
    // check if all questions are answered, if not, give default answer
    for (let question of currentQuestions) {
      if (question.answer === null) question.answer = question.defaultAnswer
      if (question.roomateAnswer === null) question.roomateAnswer = question.defaultAnswer
    }

    console.log(currentQuestions)
  }

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
          {currentQuestions.map((question, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col mt-4 mb-4">
                  <h1 className="text-md font-bold">{question.question}</h1>
                  {question.type === "slider" && (
                    <div className="flex flex-col">
                      <Slider className='mb-2 mt-2' step={1} min={1} max={question.options.length} steps={question.options} isRoommate={false} currentQuestion={question} setQuestionHandle={setQuestion}/>
                      <h1 className="text-md font-bold">{question.roomate}</h1>
                      <Slider className='mb-2 mt-2' step={1} min={1} max={question.options.length} steps={question.options} isRoommate={true} currentQuestion={question} setQuestionHandle={setQuestion}/>
                    </div>
                  )}
                  {question.type === "select" && (
                    <div key={index} className="flex flex-col">
                      <Select onValueChange={(val) => setQuestion({...question, answer: val})} defaultValue={question.options[(question.options.length - 1) / 2]?.toString()}>
                        <SelectTrigger className='mt-4 mb-4'>
                        <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent className='mt-4 mb-4'>
                          {question.options.map((option, index) => (
                            <SelectItem value={option.toString()} key={index}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <h1 className="text-md font-bold">{question.roomate}</h1>
                      <Select onValueChange={(val) => setQuestion({...question, roomateAnswer: val})} defaultValue={question.options[(question.options.length - 1) / 2]?.toString()}>
                        <SelectTrigger className='mt-4'>
                          <SelectValue placeholder="Choose an option"  />
                        </SelectTrigger>
                        <SelectContent>
                          {question.options.map((option, index) => (
                            <SelectItem value={option.toString()} key={index}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {question.type === "checkbox" && (
                      <Form {...form}>
                      <form className="space-y-8">
                        <FormField
                          control={form.control}
                          name="items"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormDescription>
                                  Select the items you want to display in the sidebar.
                                </FormDescription>
                              </div>
                              {question.options.map((item) => (
                                <FormField
                                  key={(item as string)}
                                  control={form.control}
                                  name="items"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={(item as string)}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes((item as string))}
                                            onCheckedChange={(checked) => {
                                              if (checked) field.onChange([...field?.value ?? [], (item as string)])
                                              else field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== (item as string)
                                                )
                                              )
                                             // todo: fix this, when unchecking, it should remove the item from the array.
                                              setQuestion({...question, answer: [...new Set([...field?.value ?? [], checked ? (item as string) : ""])].filter((item) => item !== "")})
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* <CarouselPrevious />
      <CarouselNext /> */}

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
      <div className="flex justify-between mt-4">
        {/** Small Skinles prev button, and show the number of questions on the next button */}
        <Button 
        className="bg-white text-black flex items-center"
        disabled={current === 1} 
        onClick={() => api?.scrollPrev()}>
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        {
          current === currentQuestions.length ? 
          <Button className="bg-black text-white" onClick={() => handleSubmit()}>Submit</Button> 
          : <Button onClick={() => api?.scrollNext()} className="bg-black text-white">
            Question {current + 1} 
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        }

      </div>
    </div>
  )
}