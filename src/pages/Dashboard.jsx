import React from "react";

const Dashboard = () => {
  const dashboardStats = [
    {
      id: 1,
      title: "Total Programs",
      value: 25,
      growth: "+12%",
      description: "from last month",
    },
    {
      id: 2,
      title: "Total Events",
      value: 12,
      growth: "+8%",
      description: "from last month",
    },
    {
      id: 3,
      title: "Total Students",
      value: 150,
      growth: "+15%",
      description: "from last month",
    },
    {
      id: 4,
      title: "Total Volunteers",
      value: 35,
      growth: "+10%",
      description: "from last month",
    },
    {
      id: 5,
      title: "Total Certificates",
      value: 75,
      growth: "+20%",
      description: "from last month",
    },
    {
      id: 6,
      title: "Active Users",
      value: 18,
      growth: "+5%",
      description: "from last month",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      date: "25",
      month: "JUN",
      title: "Science Workshop",
      location: "Science Lab, Block A",
      time: "10:00 AM",
    },
    {
      id: 2,
      date: "28",
      month: "JUN",
      title: "SST Program",
      location: "Auditorium, Main Block",
      time: "11:00 AM",
    },
    {
      id: 3,
      date: "30",
      month: "JUN",
      title: "Career Seminar",
      location: "Seminar Hall, Block B",
      time: "02:00 PM",
    },
  ];

  const programOverview = [
    { title: "Completed", count: 10, color: "bg-green-500" },
    { title: "Ongoing", count: 8, color: "bg-blue-500" },
    { title: "Upcoming", count: 7, color: "bg-orange-500" },
  ];

  return (
    <div className="font-serif">
      <div className="flex  justify-evenly pt-6">
        {dashboardStats.map((stats) => (
          <div
            key={stats.id}
            className="h-30 shadow-blue-100 shadow-xl w-40 p-3 flex flex-col justify-between rounded-2xl
            bg-gradient-to-r from-white to-gray-200"
          >
            <h2 className="text-sm text-cente font-medium font-serif  rounded-2xl">
              {stats.title} :{"  "}
              <span className="text-sm rounded-2xl ">{stats.value}</span>
            </h2>
            <h2 className="text-sm">Growth Rate : {stats.growth}</h2>
            <p className="text-sm">{stats.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 items-center m-11 rounded-xl flex justify-evenly">
        <div className="space-y-3 shadow-blue-100 shadow-xl p-10 rounded-2xl">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex w-100 items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
                  <span className="text-sm font-bold">{event.date}</span>
                  <span className="text-[10px]">{event.month}</span>
                </div>

                <div>
                  <h3 className="text-sm font-medium">{event.title}</h3>
                  <p className="text-xs text-gray-500">{event.location}</p>
                </div>
              </div>

              <span className="text-xs font-medium text-green-600">
                {event.time}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center rounded-full bg-blue-100 shadow-2xl p-3 h-60 w-60 ">
          <h2 className="text-lg font-semibold mb-4">Program Overview</h2>

          <div className="space-y-4">
            {programOverview.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-gray-700">{item.title}</span>
                </div>

                <span className="font-semibold text-gray-900">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
