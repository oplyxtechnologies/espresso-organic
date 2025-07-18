import { notFound } from "next/navigation";
import { Metadata } from "next";
import courses from "@/lib/data/course.json";
import Image from "next/image";
import CurriculumToggle from "@/components/Training/CurriculumToogle";
import Link from "next/link";
import { Book, Timer, Gauge, Star, User, Globe, UserPen } from "lucide-react";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Espresso Organic Courses",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Espresso Organic Courses`,
    description: course.description,
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return notFound();

  return (
    <main className="bg-[#FFF8F2] mt-16 py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-2">
            {course.title}
          </h1>
          <p className="text-[#6F5A48] mb-4">{course.description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-[#CB5B2C] mb-6 font-medium">
            <span className="flex items-center gap-2">
              <Star size={16} /> {course.instructor.rating}/5.0
            </span>
            <span className="flex items-center gap-2">
              <Book size={16} /> {course.level}
            </span>
            <span className="flex items-center gap-2">
              <Timer size={16} /> {course.duration}
            </span>
          </div>

          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-[#5B463A] leading-relaxed mb-10">
            {course.longDescription}
          </p>

          {/* Curriculum */}
          <CurriculumToggle curriculum={course.curriculum} />

          {/* FAQs */}
          <div className="mt-12">
            <h2 className="text-2xl font-reporter text-[#2B1E17] mb-4">FAQs</h2>
            <div className="space-y-4">
              {course.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-[#FFD6C2] rounded-lg bg-[#FFF3E8] px-4 py-3"
                >
                  <summary className="font-medium cursor-pointer text-[#2B1E17]">
                    {faq.q}
                  </summary>
                  <p className="text-[#6F5A48] mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="relative">
          <div className="md:sticky  md:top-24 border border-white/20 p-6 rounded-lg  bg-[#FFF3E8] backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Rs. {course.price}</h3>
            <Link href="/courses/courseenquiry">
              <button className="w-full py-3 cursor-pointer hover:bg-[#2B1E17] text-white    font-semibold rounded bg-[#4d362a] hover:text-white transition mb-6">
                Enroll Now
              </button>
            </Link>
            <h4 className="font-semibold mb-4 ">This course includes:</h4>
            <ul className="text-sm text-[#6F5A48] space-y-3 mb-6">
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Book size={20} /> Lectures
                </div>
                {course.lectures || "TBD"}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Timer size={20} /> Duration
                </div>
                {course.duration}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Gauge size={20} /> Level:
                </div>
                {course.level}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <UserPen size={20} /> Instructor:
                </div>
                {course.instructor?.name || "TBD"}
              </li>
              <li className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Globe size={20} /> Language:
                </div>
                English, Nepali
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
