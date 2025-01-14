import { Link } from "react-router-dom";

export default function Blogs() {
  const blogsData = [
    {
      title: "Maximizing Efficiency with Payroll Automation",
      description:
        "Learn how automating your payroll processes can save time, reduce errors, and enhance overall efficiency in your organization.",
      image: "https://mypihr.com/wp-content/uploads/2024/03/46-2-1.jpg.webp",
      link: "/blog/maximizing-efficiency-payroll-automation",
      date: "2024-10-15",
    },
    {
      title: "Enhancing Employee Engagement with Multilingual Payslips",
      description:
        "Explore the advantages of providing multilingual payslips to foster a sense of belonging among your diverse workforce.",
      image:
        "https://mypihr.com/wp-content/uploads/2022/09/HR-Software-is-important-for-business.jpg.webp",
      link: "/blog/multilingual-payslips-engagement",
      date: "2024-09-30",
    },
    {
      title: "The Role of Time Management in Business Success",
      description:
        "Discover effective time management strategies and how they can significantly boost productivity within your team.",
      image: "https://mypihr.com/wp-content/uploads/2022/11/saas.jpg.webp",
      link: "/blog/time-management-business-success",
      date: "2024-10-05",
    },
    {
      title: "Creating Custom Payslips to Reflect Your Brand",
      description:
        "Learn how to design payslips that comply with regulations while showcasing your company’s unique brand identity.",
      image: "https://mypihr.com/wp-content/uploads/2022/10/27.jpg.webp",
      link: "/blog/custom-payslip-design-brand",
      date: "2024-10-10",
    },
    {
      title: "Key Features of Effective Payroll Software",
      description:
        "Understand the essential features to consider when choosing payroll software to streamline your HR processes.",
      image:
        "https://mypihr.com/wp-content/uploads/2022/09/win-employees-trust.jpg.webp",
      link: "/blog/key-features-payroll-software",
      date: "2024-09-25",
    },
    {
      title: "Ensuring Data Privacy in Payroll Management",
      description:
        "With sensitive information at stake, learn how to protect employee data and maintain privacy in your payroll systems.",
      image:
        "https://mypihr.com/wp-content/uploads/2022/09/HR-Software-benefit-you-financially.jpg.webp",
      link: "/blog/data-privacy-payroll",
      date: "2024-09-20",
    },
  ];

  return (
    <section className="py-10 md:py-20 mx-5 md:container md:mx-auto">
      <h2 className="md:text-2xl text-primary font-semibold">
        Recent Blogs & Information
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((data, i) => (
          <div key={i} className="rounded border">
            <Link to="/">
              <img
                src={data.image}
                alt=""
                loading="lazy"
                className="rounded-t border-b"
              />
            </Link>
            <div className="px-4 py-6">
              <Link to="/" className="text-xl font-semibold">
                {data.title}
              </Link>
              <p className="mb-4 mt-1">{data.date}</p>
              <p className="">{data.description}</p>
              <Link
                to="/"
                className="mt-4 px-4 py-2 inline-block bg-primary text-white rounded"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
