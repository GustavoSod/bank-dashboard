import Presentation from "@/components/presentation";
import Questions from "@/components/questions";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Presentation/>
      <Steps title ={"Receive from"} subTitle={"Another country"}/>
      <Steps title ={"Send from"} subTitle={"Another country"}/>
      <Steps title ={"Business"} subTitle={"Global account"}/>
      <Questions/>
    </main>
  );
}