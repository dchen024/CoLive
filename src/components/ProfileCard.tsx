"use client";

interface Props {
  // Define your component props here
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Like from "../../public/assets/like.svg";
import Back from "../../public/assets/back.svg";
import Reject from "../../public/assets/reject.svg";

import MessageIcon from "../../public/assets/messageIcon.svg";
import ProfileIcon from "../../public/assets/profileIcon.svg";
import HomeIcon from "../../public/assets/homeIcon.svg";
import Image from "next/image";
import TestImage1 from "../../public/assets/image1.jpg";

import { ScrollArea } from "@/components/ui/scroll-area";

const ProfileCard = () => {
  return (
    <>
      {/* Top Nav Bar */}
      <div className='flex flex-row place-content-between w-[380px]'>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={MessageIcon} alt='Message Icon' width={48} height={48} />
        </div>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={HomeIcon} alt='Tinder Icon' width={48} height={48} />
        </div>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={ProfileIcon} alt='Profile Icon' width={48} height={48} />
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className='w-full max-w-sm'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className=''>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>
                      Card {index + 1}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      <ScrollArea className='flex flex-col mt-2 w-full p-4 max-h-[250px]'>
        <h1>$2,900</h1>
        <h2>Three Bedroom / Two Bath</h2>
        <h2>Shore View Apartments</h2>
        <h3>9222 Holland Ave, Rockaway Beach, NY 11693</h3>
        <h1>$2,900</h1>
        <h2>Three Bedroom / Two Bath</h2>
        <h2>Shore View Apartments</h2>
        <h3>9222 Holland Ave, Rockaway Beach, NY 11693</h3>
        <h1>$2,900</h1>
        <h2>Three Bedroom / Two Bath</h2>
        <h2>Shore View Apartments</h2>
        <h3>9222 Holland Ave, Rockaway Beach, NY 11693</h3>
        <h1>$2,900</h1>
        <h2>Three Bedroom / Two Bath</h2>
        <h2>Shore View Apartments</h2>
        <h3>9222 Holland Ave, Rockaway Beach, NY 11693</h3>
        <h1>$2,900</h1>
        <h2>Three Bedroom / Two Bath</h2>
        <h2>Shore View Apartments</h2>
        <h3>9222 Holland Ave, Rockaway Beach, NY 11693</h3>
      </ScrollArea>

      <div className='flex flex-row place-content-evenly w-[380px]'>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={Reject} alt='Message Icon' width={64} height={64} />
        </div>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={Back} alt='Tinder Icon' width={64} height={64} />
        </div>
        <div className='bg-white rounded-full p-2 inline-flex items-center justify-center'>
          <Image src={Like} alt='Profile Icon' width={64} height={64} />
        </div>
      </div>
    </>
  );
};
export default ProfileCard;
