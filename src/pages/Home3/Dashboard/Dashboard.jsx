import Container from "../../../shared/Container";
import dashboardImg from "../../../assets/home-3/dashboard.png";

export default function Dashboard() {
  return (
    <section className="relative w-full">
      <Container>
        <div className="mx-auto -mt-10 w-full max-w-5xl overflow-hidden rounded-3xl">
          <div className="w-full rounded-3xl border border-dark/10 bg-white/15 p-3 shadow backdrop-blur-lg">
            <img
              src={dashboardImg}
              className="w-full rounded-3xl border border-dark/5"
            />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-b from-white/75 to-[#F1F7FA]"></div>
    </section>
  );
}
