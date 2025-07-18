import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const contactInquiryData = [
  { date: "Jan", inquiries: 20 },
  { date: "Feb", inquiries: 45 },
  { date: "Mar", inquiries: 30 },
  { date: "Apr", inquiries: 60 },
  { date: "May", inquiries: 80 },
  { date: "Jun", inquiries: 50 },
];

const courseInquiryData = [
  { course: "Web Dev", inquiries: 80 },
  { course: "Data Sci", inquiries: 55 },
  { course: "AI/ML", inquiries: 100 },
  { course: "UI/UX", inquiries: 45 },
  { course: "DevOps", inquiries: 70 },
];

const ModernInquiriesDashboard = () => {
  return (
    <div className=" text-white p-8 font-sans">
      <h1 className="text-4xl font-bold mb-10 text-[#000] ">
        Inquiry Insights
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Inquiry Line Chart */}
        <div className="p-6 rounded-2xl ">
          <h2 className="text-xl font-semibold mb-4 text-black uppercase tracking-wide">
            Contact Inquiries Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={contactInquiryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#222",
                  borderColor: "#000",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="inquiries"
                stroke="#E81A02"
                strokeWidth={3}
                dot={{ r: 5, fill: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Course Inquiry Bar Chart */}
        <div className=" p-6 rounded-2xl ">
          <h2 className="text-xl font-semibold mb-4 text-black uppercase tracking-wide">
            Course Inquiries by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={courseInquiryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="course" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#222",
                  borderColor: "#E81A02",
                }}
              />
              <Legend />
              <Bar dataKey="inquiries" fill="#E81A02" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ModernInquiriesDashboard;
