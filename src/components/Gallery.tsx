import CardImage from "./CardImage";

export default function Gallery() {
  return (
    <section className="flex gap-2">
      <div className="flex flex-col items-center justify-center gap-5">
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
        <CardImage
          src="/gallery-05.jpg"
          alt=""
          height={1920}
          width={2880}
          className="md:w-[920px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <CardImage
          src="/gallery-05.jpg"
          alt=""
          height={1920}
          width={2880}
          className="md:w-[920px]"
        />
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
        <CardImage
          src="/gallery-05.jpg"
          alt=""
          height={1920}
          width={2880}
          className="md:w-[920px]"
        />
      </div>
    </section>
  );
}
