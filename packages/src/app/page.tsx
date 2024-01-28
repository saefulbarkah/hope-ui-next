import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { SalesStatistic, Summary } from "@/features/dashboard";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <MainContent>
        <Summary />
        <SalesStatistic />
      </MainContent>
    </div>
  );
}
