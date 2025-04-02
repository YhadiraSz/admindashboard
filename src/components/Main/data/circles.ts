import { BiBarChart } from "react-icons/bi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdStackedLineChart } from "react-icons/md";

export const circles = [
  {
    id: 1,
    topic: "sales",
    icon: IoAnalyticsOutline,
    title: "Total sales",
    cost: "$25,024",
    numberPercent: "81%",
  },
  {
    id: 2,
    topic: "expenses",
    icon: BiBarChart,
    title: "Total expenses",
    cost: "$14,160",
    numberPercent: "62%",
  },
  {
    id: 3,
    topic: "income",
    icon: MdStackedLineChart,
    title: "Total income",
    cost: "$10,864",
    numberPercent: "44%",
  },
];
