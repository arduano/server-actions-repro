import { PropsWithChildren } from "react";

export default async function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>{props.children}</body>
    </html>
  );
}
