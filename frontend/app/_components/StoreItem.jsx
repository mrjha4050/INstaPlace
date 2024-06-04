import Image from "next/image";
import Link from "next/link";

export default function StoreItem({store}) {
  return (
    <Link href={'/store_details/'+store.id}>
      <div className="hover:border p-1 rounded-lg ">
        <Image
          src={store?.attributes?.Banner?.data.attributes?.url}
          alt="banner"
          width={350}
          height={300}
          className="rounded-t-lg md:h-[300px] object-cover"
        />
        <div className="flex justify-between items-center p-2 m-auto">
          <div>
            <h2 className="text-[14px] md:text-[20px] text-center font-bold hover:underline transition">
              {store.attributes.Title}
            </h2>
            <h2 className="line-clamp-3 text-[13px] md:text-[13px] ">
              {store.attributes?.Descriptions?.[0].children?.[0].text}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
