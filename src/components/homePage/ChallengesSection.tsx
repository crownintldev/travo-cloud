import Container from "@/utils/Container/Container";
import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const ChallengesSection = () => {
  return (
    <Container className="py-8 md:py-16 lg:py-20">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <Image
            height={200}
            width={200}
            className="rounded-xl h-full w-full"
            src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
            alt="Image Description"
          />
        </div>
        {/* End Col */}
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                We tackle the challenges start-ups face
              </h2>
              <p className="text-gray-500">
                Besides working with start-up enterprises as a partner for
                digitalization, we have built enterprise products for common
                pain points that we have encountered in various products and
                projects.
              </p>
            </div>

            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <IoMdCheckmark size={15} />
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  <span className="font-bold">Easy fast</span> designing
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <IoMdCheckmark size={15} />
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  Powerful <span className="font-bold">features</span>
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 ">
                  <IoMdCheckmark size={15} />
                </span>
                <span className="text-sm sm:text-base text-gray-500">
                  User Experience Design
                </span>
              </li>
            </ul>
            {/* End List */}
          </div>
        </div>
        {/* End Col */}
      </div>
    </Container>
  );
};

export default ChallengesSection;
