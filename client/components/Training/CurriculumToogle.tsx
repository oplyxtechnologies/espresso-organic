"use client";

import { useState } from "react";

export default function CurriculumToggle({
  curriculum,
}: {
  curriculum: { title: string; lectures: string[] }[];
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleSections = expanded ? curriculum : curriculum.slice(0, 3);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-reporter text-[#2B1E17] mb-4">Curriculum</h2>

      <div className="rounded-xl overflow-hidden divide-y divide-[#FFE0C8] border border-[#FFD6C2] bg-[#FFF3E8]">
        {visibleSections.map((section, idx) => (
          <div key={idx} className="p-5">
            <h4 className="text-[#2B1E17] font-semibold mb-2">
              {section.title}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-[#6F5A48] text-sm">
              {section.lectures.map((lec, i) => (
                <li key={i}>{lec}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {curriculum.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 px-4 py-2 border border-[#FFD6C2] text-[#CB5B2C] rounded-full text-sm hover:bg-[#FFECE2] transition"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}
