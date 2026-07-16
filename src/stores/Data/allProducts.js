import { phonesData } from "./phones";
import { laptopsData } from "./laptops";
import { watchesData } from "./watches";
import { camerasData } from "./cameras";
import { headphonesData } from "./headphones";

export const allProducts = [
  ...phonesData.map((item) => ({ ...item, route: "/phones" })),
  ...laptopsData.map((item) => ({ ...item, route: "/laptops" })),
  ...watchesData.map((item) => ({ ...item, route: "/watches" })),
  ...camerasData.map((item) => ({ ...item, route: "/cameras" })),
  ...headphonesData.map((item) => ({ ...item, route: "/headphones" })),
];