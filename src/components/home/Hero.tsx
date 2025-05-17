import PageDetail from "../common/PageDetail";
import PageHeader from "../common/PageHeader";
import PageSubtitle from "../common/PageSubtitle";
import PageTitle from "../common/PageTitle";
import Search from "./Search";

export default function Hero() {
  return (
    <PageHeader>
      <PageSubtitle>Pitch, Vote, and Grow</PageSubtitle>
      <PageTitle>
        Pitch Your Startup, <br /> Connect with Entrepreneurs
      </PageTitle>
      <PageDetail>
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </PageDetail>
      <Search />
    </PageHeader>
  );
}
