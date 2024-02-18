"use client";

import React, { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createClient } from "@/utils/supabase/client";
import { Question, questions } from "./questions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

function Typeform({ id, firstName, lastName }) {
  const supabase = createClient();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const router = useRouter();

  const [currentQuestions, setQuestions] = useState<Question[]>(questions);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["Brooklyn"],
    },
  });

  const form2 = useForm();

  // use ref to get the current question answere

  function setQuestion(question: Question) {
    setQuestions(
      currentQuestions.map((q) =>
        q.question == question.question ? question : q
      )
    );
  }

  async function handleSubmit() {
    setIsButtonDisabled(true);

    // check if all questions are answered, if not, give default answer
    for (let question of currentQuestions) {
      if (question.answer === null) question.answer = question.defaultAnswer;
      if (question.roommateAnswer === null && question.type !== "checkbox")
        question.roommateAnswer = question.defaultAnswer;
    }

    // insert all the questions into the user_responses table

    const { data, error } = await supabase
      .from("user_responses")
      .upsert([
        {
          first_name: firstName,
          last_name: lastName,
          clerk_id: id,
          gender: currentQuestions[0].answer,
          user_preferred_gender: currentQuestions[0].roommateAnswer,
          user_smoke: currentQuestions[1].answer === "Yes" ? true : false,
          user_preferred_smoke:
            currentQuestions[1].roommateAnswer === "Yes" ? true : false,
          user_clean_value:
            currentQuestions[2].options.findIndex(
              (option) => option === currentQuestions[2].answer
            ) + 1, // +1 because the index starts at 0
          user_preferred_clean_value:
            currentQuestions[2].options.findIndex(
              (option) => option === currentQuestions[2].roommateAnswer
            ) + 1,
          user_shower_value:
            currentQuestions[3].options.findIndex(
              (option) => option === currentQuestions[3].answer
            ) + 1,
          user_preferred_shower_value:
            currentQuestions[3].options.findIndex(
              (option) => option === currentQuestions[3].roommateAnswer
            ) + 1,
          user_room_time_value:
            currentQuestions[4].options.findIndex(
              (option) => option === currentQuestions[4].answer
            ) + 1,
          user_preferred_room_time_value:
            currentQuestions[4].options.findIndex(
              (option) => option === currentQuestions[4].roommateAnswer
            ) + 1,
          user_overnight_guest_value:
            currentQuestions[5].options.findIndex(
              (option) => option === currentQuestions[5].answer
            ) + 1,
          user_preferred_overnight_guest_value:
            currentQuestions[5].options.findIndex(
              (option) => option === currentQuestions[5].roommateAnswer
            ) + 1,
          user_temp_value: currentQuestions[6].answer,
          user_preferred_temp_value: currentQuestions[6].roommateAnswer,
          sexuality: currentQuestions[7].answer,
          user_sleep_time: currentQuestions[8].answer,
          user_preferred_sleep_time: currentQuestions[8].roommateAnswer,
          user_friend_score:
            currentQuestions[9].options.findIndex(
              (option) => option === currentQuestions[9].answer
            ) + 1,
          user_preferred_friend_score:
            currentQuestions[9].options.findIndex(
              (option) => option === currentQuestions[9].roommateAnswer
            ) + 1,
        },
      ])
      .select();

    await supabase
      .from("user_responses")
      .update([{ boroughs: currentQuestions[10].answer }])
      .eq("clerk_id", id);

    setIsButtonDisabled(false);

    router.push("/uploadthing");
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  /**
   * Return a typeform with a carousel of questions, that has a next and previous button, and dots to indicate the current question.
   * the question has 2 of the same type of input, and a label. one for the user and one for the preffered roommate.
   * Each question can be a different type of input, such a slider, or select.
   */
  return (
    <div className="flex-col items-center max-w-xs mx-auto mt-10">
      <Carousel setApi={setApi} className="w-full max-w-xs mx-auto">
        <CarouselContent>
          {currentQuestions.map((question, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col mt-4 mb-4">
                  <h1 className="text-md font-bold">{question.question}</h1>
                  {question.type === "slider" && (
                    <div className="flex flex-col">
                      <Slider
                        className="mb-2 mt-2"
                        step={1}
                        min={1}
                        max={question.options.length}
                        steps={question.options}
                        isRoommate={false}
                        currentQuestion={question}
                        setQuestionHandle={setQuestion}
                      />
                      <h1 className="text-md font-bold">{question.roommate}</h1>
                      <Slider
                        className="mb-2 mt-2"
                        step={1}
                        min={1}
                        max={question.options.length}
                        steps={question.options}
                        isRoommate={true}
                        currentQuestion={question}
                        setQuestionHandle={setQuestion}
                      />
                    </div>
                  )}
                  {question.type === "select" && (
                    <div key={index} className="flex flex-col">
                      <Select
                        onValueChange={(val) =>
                          setQuestion({ ...question, answer: val })
                        }
                        defaultValue={question.options[
                          (question.options.length - 1) / 2
                        ]?.toString()}
                      >
                        <SelectTrigger className="mt-4 mb-4">
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent className="mt-4 mb-4">
                          {question.options.map((option, index) => (
                            <SelectItem value={option.toString()} key={index}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <h1 className="text-md font-bold">{question.roommate}</h1>
                      <Select
                        onValueChange={(val) =>
                          setQuestion({ ...question, roommateAnswer: val })
                        }
                        defaultValue={question.options[
                          (question.options.length - 1) / 2
                        ]?.toString()}
                      >
                        <SelectTrigger className="mt-4">
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          {question.options.map((option, index) => (
                            <SelectItem value={option.toString()} key={index}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {question.type === "input" && (
                    <Form {...form2}>
                      <form className="space-y-8">
                        <FormField
                          name="inputtext"
                          render={() => (
                            <FormItem>
                              <div className="mb-4">
                                <FormDescription>
                                  Please enter your preferred temperature.
                                </FormDescription>
                              </div>
                              <FormControl>
                                <input
                                  type="text"
                                  className="w-full border border-gray-300 rounded-md p-2"
                                  placeholder="Enter your preferred temperature"
                                  onChange={(e) =>
                                    setQuestion({
                                      ...question,
                                      answer: e.target.value,
                                    })
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                              <h1 className="text-md font-bold">
                                {question.roommate}
                              </h1>
                              <FormControl>
                                <input
                                  type="text"
                                  className="w-full border border-gray-300 rounded-md p-2"
                                  placeholder="Enter your preferred temperature"
                                  onChange={(e) =>
                                    setQuestion({
                                      ...question,
                                      roommateAnswer: e.target.value,
                                    })
                                  }
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
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
                                  Select the items you want to display in the
                                  sidebar.
                                </FormDescription>
                              </div>
                              {question.options.map((item) => (
                                <FormField
                                  key={item as string}
                                  control={form.control}
                                  name="items"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item as string}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              item as string
                                            )}
                                            onCheckedChange={(checked) => {
                                              if (checked)
                                                field.onChange([
                                                  ...(field?.value ?? []),
                                                  item as string,
                                                ]);
                                              else
                                                field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== (item as string)
                                                  )
                                                );

                                              if (checked)
                                                setQuestion({
                                                  ...question,
                                                  answer: [
                                                    ...((question?.answer as string[]) ??
                                                      []),
                                                    item as string,
                                                  ],
                                                });
                                              else
                                                setQuestion({
                                                  ...question,
                                                  answer: (
                                                    question.answer as string[]
                                                  ).filter(
                                                    (value) =>
                                                      value != (item as string)
                                                  ),
                                                });
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {item}
                                        </FormLabel>
                                      </FormItem>
                                    );
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
          onClick={() => api?.scrollPrev()}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        {current === currentQuestions.length ? (
          isButtonDisabled ? (
            <Button
              onClick={handleSubmit}
              className="bg-black text-white"
              disabled={isButtonDisabled}
            >
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Submit
            </Button>
          ) : (
            <Button
              className="bg-black text-white"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          )
        ) : (
          <Button
            onClick={() => api?.scrollNext()}
            className="bg-black text-white"
          >
            Question {current + 1}
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Typeform;
