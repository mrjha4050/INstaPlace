import Image from "next/image";
export default function StoreBanner({store}) {
  return (
    <div className="py-9 item-left">
      <Image
        src ={store?.attributes?.Banner?.data.attributes?.url}
        alt="banner"
        height={450}
        width={450}
        className="rounded-lg text-center sm:float-right pr-10  object-cover"
      />
    </div>
  );
}
