import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export const items = [
  {
    id: 1,
    itemName: "online orders",
    itemTime: "Last 24 hours",
    itemProgress: "+39%",
    itemMount: "3849",
    itemSection: "online",
    icon: FaCartShopping,
  },
  {
    id: 2,
    itemName: "offline orders",
    itemTime: "Last 24 hours",
    itemProgress: "-17%",
    itemMount: "1100",
    itemSection: "offline",
    icon: FaShoppingBag,
  },
  {
    id: 3,
    itemName: "customers orders",
    itemTime: "Last 24 hours",
    itemProgress: "+39%",
    itemMount: "674",
    itemSection: "customers",
    icon: IoPerson,
  },
];
