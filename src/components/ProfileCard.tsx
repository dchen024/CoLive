"use client";

interface Props {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  user_shower_value?: number;
  user_clean_value?: number;
  user_friend_score?: number;
  user_room_time_value?: number;
  user_sleep_time?: string;
  user_smoke?: boolean;
  user_temp_value?: number;
  user_overnight_guest_value?: string;
  boroughs: string[];
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import Like from "../../public/assets/like.svg";
import Back from "../../public/assets/back.svg";
import Reject from "../../public/assets/reject.svg";

import MessageIcon from "../../public/assets/messageIcon.svg";
import ProfileIcon from "../../public/assets/profileIcon.svg";
import HomeIcon from "../../public/assets/homeIcon.svg";
import Image from "next/image";
import Img1 from "../../public/assets/example-apt/img1.webp";
import Portrait from "../../public/assets/portrait.jpg";

import { Separator } from "@/components/ui/separator";

import { ScrollArea } from "@/components/ui/scroll-area";

const props: Props = {
  id: 12345,
  first_name: "John",
  last_name: "Blackwood",
  gender: "male",
  user_shower_value: 5,
  user_clean_value: 7,
  user_friend_score: 8,
  user_room_time_value: 6,
  user_sleep_time: "Midnight",
  user_smoke: false,
  user_temp_value: 20,
  user_overnight_guest_value: "rarely",
  boroughs: ["Manhattan", "Brooklyn"],
};

function ProfileCard() {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Top Nav Bar */}
        <div className="flex flex-row place-content-between w-[380px]">
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image
              src={MessageIcon}
              alt="Message Icon"
              width={48}
              height={48}
            />
          </div>
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image src={HomeIcon} alt="Tinder Icon" width={48} height={48} />
          </div>
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image
              src={ProfileIcon}
              alt="Profile Icon"
              width={48}
              height={48}
            />
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-auto rounded-xl">
                      <Image
                        src={Portrait}
                        alt="Image 1"
                        className="object-cover p-0 aspect-square"
                        width={400}
                        height={400}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>

        <div className="flex flex-col w-full p-4 text-wrap flex-grow overflow-auto">
          <div className="w-[348px] text-wrap">
            <h1 className="font-semibold text-4xl break-words">
              {props.first_name} {props.last_name}
            </h1>
          </div>
          <div className="">
            <Badge variant="outline" className="text-sm mt-2 py-1">
              {props.gender}
            </Badge>
          </div>

          <Separator className="my-2" />

          <div className="flex flex-col">
            <h2 className="text-lg">Preferred Boroughs:</h2>
            <div className="flex flex-wrap">
              {props.boroughs.map((borough, index) => (
                <div key={index} className="inline-block mr-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-sm text-white"
                    style={{
                      background: "linear-gradient(45deg, #FF7854, #FD267D)",
                    }}
                  >
                    {borough}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {props.user_shower_value && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Shower Frequency:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_shower_value}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_clean_value && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Room Cleanliness:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_clean_value}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_friend_score && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Friend Score:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_friend_score}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_room_time_value && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Room Time:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_room_time_value}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_sleep_time && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Sleep Time:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_sleep_time}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_smoke !== undefined && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Smoker:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_smoke ? "Yes" : "No"}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_temp_value && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Preferred Temperature:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_temp_value}
                  </Badge>
                </div>
              </div>
            )}

            {props.user_overnight_guest_value && (
              <div className="flex space-x-2">
                <h2 className="pt-2 text-lg">Overnight Guests:</h2>
                <div className="flex items-end">
                  <Badge
                    variant="outline"
                    className="text-sm flex items-center justify-center px-4"
                  >
                    {props.user_overnight_guest_value}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row place-content-evenly w-[380px]">
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image src={Reject} alt="Message Icon" width={64} height={64} />
          </div>
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image src={Back} alt="Tinder Icon" width={64} height={64} />
          </div>
          <div className="bg-white rounded-full p-2 inline-flex items-center justify-center">
            <Image src={Like} alt="Profile Icon" width={64} height={64} />
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileCard;
