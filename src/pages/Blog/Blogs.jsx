import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";

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

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true)
    fetch("https://api.blog.bfinit.com/api/v1/show_blog/31")
    .then(res => res.json())
    .then(data => {
      setData(data?.data?.data);
      setLoader(false)
    })
  },[])

  return (
    <section className="py-10 mx-5 md:container md:mx-auto">
      <h2 className="md:text-2xl text-primary font-semibold">
        Recent Blogs & Information
      </h2>
      {
        loader ?
        <Loader/>
        :
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((data, i) => (
          <div key={i} className="rounded border flex flex-col">
            <img
              src={data.thumbnail}
              alt=""
              loading="lazy"
              className="rounded-t w-full h-auto"
            />
          <div className="p-4">
            <h5 to="/" className="text-xl font-semibold">
              {data.title}
            </h5>
            <div dangerouslySetInnerHTML={{ __html: data?.content.slice(0, 200) }} className="text-justify mt-1.5 mb-5" />
            <Link
              to={`blog/${data.custom_url}`}
              className="px-4 py-2 inline-block bg-primary text-white rounded w-fit self-start"
            >
              Read More
            </Link>
          </div>
        </div>
        ))}
      </div>
      }
    </section>
  );
}
