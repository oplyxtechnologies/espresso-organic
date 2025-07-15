import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

export default function BaristaCourseCard({
  title,
  description,
  image,
  slug,
}: Props) {
  return (
    <div className="border border-[#E5E5E5] rounded-md p-4 bg-white hover:bg-[color:var(--color-muted-fill)] hover:shadow-md transition flex flex-col h-full">
      <div className="rounded overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={240}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <h3 className="text-lg font-semibold text-[color:var(--color-black)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[color:var(--color-text)] flex-grow mb-4">
        {description}
      </p>

      <Link
        href={slug}
        className="mt-auto text-sm text-black font-medium hover:underline flex items-center gap-1"
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}
