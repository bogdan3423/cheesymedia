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
    return isMobile ? [0.95, 1] : [1.02, 1];
  };

  const rotateValues = isMobile ? [5, 0] : [8, 0];
  const translateValues = isMobile ? [0, -20] : [0, -60];

  const rotate = useTransform(scrollYProgress, [0, 1], rotateValues);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], translateValues);

  return (
    <div
      className="h-auto min-h-0 md:min-h-[60rem] flex items-start justify-center relative px-4 pt-6 pb-4 md:px-20 md:pt-10 md:pb-16"
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
          "0 0 #0000001a, 0 4px 12px #00000015, 0 16px 24px #00000010, 0 40px 32px #0000000a",
      }}
      className="max-w-4xl mt-6 md:mt-8 mx-auto h-[14rem] sm:h-[18rem] md:h-[32rem] w-full border border-primary-foreground/10 p-1.5 md:p-5 bg-primary rounded-2xl md:rounded-[24px] shadow-lg"
    >
      <div className="h-full w-full overflow-hidden rounded-xl md:rounded-2xl bg-background md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
