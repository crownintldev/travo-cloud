// @ts-nocheck
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import Container from "@/utils/Container/Container";
import amazon from "../../../public/images/amazon.svg"

export const Brandimg = [
    { id: "1", image:amazon },
    { id: "2", image:amazon },
    { id: "3", image:amazon },
    { id: "4", image:amazon},
    { id: "5", image:amazon},
    { id: "6", image:amazon},
    { id: "7", image:amazon},
    { id: "9", image:amazon},
  ];

// Function to duplicate the array for a seamless loop
const createLoopedArray = (arr, count) => {
  const loopedArray = [];
  for (let i = 0; i < count; i++) {
    loopedArray.push(...arr);
  }
  return loopedArray;
};

const loopedBrandimg = createLoopedArray(Brandimg, 5); // Adjust the count based on your needs

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {loopedBrandimg.map((array, index) => (
          <div
            key={index}
            className="grid place-items-center min-w-[10rem] w-[1rem] md:w-[40vmin] max-w-[30rem]"
          >
            <Image
              src={array.image}
              alt={array.image}
              height={150}
              width={150}
              className="w-[100px] h-[80px] aspect-3/2"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollAnimation() {
  return (
    <Container>
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </Container>
  );
}