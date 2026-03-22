"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  topComponent,
  titleComponent,
  children,
}: {
  topComponent?: string | React.ReactNode;
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.92, 1] : [1.05, 1];
  };

  const rotateValues = isMobile ? [10, 0] : [20, 0];
  const translateValues = isMobile ? [0, -40] : [0, -100];

  const rotate = useTransform(scrollYProgress, [0, 1], rotateValues);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], translateValues);

  return (
    <div
      className="h-auto min-h-0 md:min-h-[80rem] flex items-start justify-center relative px-4 pt-6 pb-4 md:px-20 md:pt-10 md:pb-20"
      ref={containerRef}
    >
      <div
        className="pt-2 pb-6 md:pt-10 md:pb-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {topComponent && (
          <Header translate={translate} titleComponent={topComponent} />
        )}
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        {titleComponent && (
          <motion.div
            style={{ translateY: translate }}
            className="max-w-5xl mx-auto text-center mt-6 md:mt-16 relative z-10"
          >
            {titleComponent}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mt-6 md:mt-8 mx-auto h-[16rem] sm:h-[20rem] md:h-[40rem] w-full border-2 md:border-4 border-primary-foreground/20 p-1.5 md:p-6 bg-primary rounded-2xl md:rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-background md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
