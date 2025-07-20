import Container from "../../../shared/Container";
import dashboardImg from "../../../assets/home-3/demo.avif";

export default function Dashboard() {
  return (
    <Container>
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/30 bg-white/15 p-3 shadow-xl backdrop-blur-lg">
        <img src={dashboardImg} className="w-full rounded-3xl" />
      </div>
    </Container>
  );
}
