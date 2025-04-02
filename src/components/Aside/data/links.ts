import { MdSpaceDashboard, MdOutlineEmail } from "react-icons/md";
import {
  IoPersonOutline,
  IoAnalyticsOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
// Definimos los enlaces con los íconos
export const links = [
  { id: 1, linkName: "Dashboard", icon: MdSpaceDashboard },
  { id: 2, linkName: "Customers", icon: IoPersonOutline, active: true },
  { id: 3, linkName: "Orders", icon: RiFileList3Line },
  { id: 4, linkName: "Analytics", icon: IoAnalyticsOutline },
  { id: 6, linkName: "Messages", icon: MdOutlineEmail, message: 26 },
  { id: 7, linkName: "Products", icon: GoChecklist },
  { id: 8, linkName: "Reports", icon: TbMessageReport },
  { id: 9, linkName: "Settings", icon: IoSettingsSharp },
  { id: 10, linkName: "Add Product", icon: IoMdAdd },
  { id: 11, linkName: "Logout", icon: BiLogOut },
];
