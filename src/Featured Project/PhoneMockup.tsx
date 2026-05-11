import { forwardRef } from "react";

interface PhoneMockupProps {
  videoSrc?: string;
  posterSrc?: string;
}

const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ videoSrc, posterSrc }, ref) => (
    <div ref={ref} className="relative mx-auto" style={{ width: 280 }}>
      <div className="relative rounded-[2.5rem] border-[6px] border-muted bg-background overflow-hidden shadow-2xl animate-pulse-glow" style={{ borderColor: "hsl(215deg 4.42% 25.78%)"}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-muted rounded-b-2xl z-10" style={{ backgroundColor: "hsl(215deg 4.42% 25.78%)"}}/>
        <div className="aspect-[9/19.5] bg-secondary overflow-hidden rounded-[2rem]">
          {videoSrc ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster={posterSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono text-sm text-muted-foreground">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-primary text-lg">▶</span>
                </div>
                <p>App Preview</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-muted-foreground/30 rounded-full" /> */}
    </div>
  )
);

PhoneMockup.displayName = "PhoneMockup";

export default PhoneMockup;
