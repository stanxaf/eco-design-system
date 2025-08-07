import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const carousel = {
  name: "carousel",
  components: {
    Demo: (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[400px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex h-32 items-center justify-center bg-muted">
                Slide 1
              </CarouselItem>
              <CarouselItem className="flex h-32 items-center justify-center bg-muted">
                Slide 2
              </CarouselItem>
              <CarouselItem className="flex h-32 items-center justify-center bg-muted">
                Slide 3
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    ),
    Default: (
      <div className="w-[400px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex h-32 items-center justify-center bg-muted">
              Slide 1
            </CarouselItem>
            <CarouselItem className="flex h-32 items-center justify-center bg-muted">
              Slide 2
            </CarouselItem>
            <CarouselItem className="flex h-32 items-center justify-center bg-muted">
              Slide 3
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    ),
  },
};
