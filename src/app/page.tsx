import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { Summary } from "@/features/dashboard";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <MainContent>
        <Summary />
      </MainContent>
    </div>
  );
}
