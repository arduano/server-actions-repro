import { ButtonClicker } from "../../components/ButtonClicker";

export default function Page() {
  return <ButtonClicker />;
}

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ path: ["asdf"] }];
}
