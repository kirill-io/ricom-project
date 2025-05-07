import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "./roboto/roboto-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./roboto/roboto-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./roboto/roboto-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./roboto/roboto-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});
