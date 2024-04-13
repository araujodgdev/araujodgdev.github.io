import CardImage from "./CardImage";

export default function Gallery() {
  return (
    <section className="flex gap-2">
      <div className="flex flex-col items-center justify-center gap-3">
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
        <CardImage
          src="/us-cesar-01.png"
          alt=""
          height={1319}
          width={742}
          className="md:w-[920px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <CardImage
          src="/us-cesar-01.png"
          alt=""
          height={1319}
          width={742}
          className="md:w-[920px]"
        />
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <CardImage src="/gallery-01.jpg" alt="" height={1920} width={1440} />
        <CardImage
          src="/us-cesar-01.png"
          alt=""
          height={1319}
          width={742}
          className="md:w-[920px]"
        />
      </div>
    </section>
  );
}
