import Link from "next/link";
import React from "react";

const Index: React.FC = () => {
  return (
    <div className="w-full h-full  py-10">
      <div
        className={`w-full h-full max-w-[1380px] m-auto sm:px-10 px-5 flex-col justify-center items-center md:flex-row`}
      >
        {/* Heading */}
        <h6 className="md:text-[26px] text-[20px] text-[black] font-medium font-inter">
          REGISTER
        </h6>
        {/* end of Heading */}

        {/* Details */}
        <div className="flex-col justify-center items-center">
          {/* Sub Heading */}
          <h6 className="mt-4 font-semibold font-inter text-[18px] md:text-[24px] ml-3">
            DISCLAIMER
          </h6>
          {/* end of Sub Heading */}
          <p className="text-[#ff7b00] text-[14px] md:text-[14px] my-4 font-semibold font-inter">
            PLEASE READ & AGREE WITH THIS VERY IMPORTANT INFORMATION BEFORE
            REGISTERING FOR OUR TRAINING
          </p>
          <p className="my-4 font-normal text-[14px] md:text-[14px] ">
            To become <span className="font-bold">DevOps Engineer</span> (USA
            classes only), it is recommended that you complete all 5 courses
            Linux, AWS, IaC, DevOps Tools, DevOps Projects & Kubernetes.
          </p>
          <p className="my-4 text-[14px] md:text-[14px] ">
            <span className="font-bold">theITern</span> has NOT promised
            automatic employment after training. However, we give trainees who
            complete our USA training necessary{" "}
            <span className="font-bold">SUPPORT</span> within our power, to land
            a 6-figure job after training.
          </p>

          {/* Box */}
          <div className=" flex flex-col items-start md:flex-row justify-between md:items-center  py-4 px-6 bg-[#f5f5f5] mt-3">
            {/* left */}
            <div className="flex-col justify-center items-center">
              <h6 className="text-[#ff7b00] md:mb-2 mb-1 font-bold text-[15px] ">
                TO PAY IN NAIRA at $1=N720{" "}
              </h6>
              <p className="italic font-semibold text-[14px] ">
                Pay to Stanbic IBTC Bank
              </p>
              <p className="mt-1 font-semibold text-[14px] ">
                Account Number: 9201087008
              </p>
              <p className="mt-1 font-semibold text-[14px] ">
                Name: Akin Aregbesola
              </p>
            </div>
            {/* end of left */}

            {/* Middle */}
            <div className="flex-col justify-center self-start items-center md:mt-0 mt-4">
              <h6 className="md:mb-2 mb-1 text-[15px] font-bold italic">
                Pay Online:
              </h6>
              <p className="text-[14px]">Click SELECT in the table below</p>
            </div>
            {/* end of Middle */}

            {/* right */}
            <div className="flex-col justify-center self-start items-center md:mt-0 mt-4">
              <p className="md:mb-2 mb-1 text-[15px] italic">
                Pay by CashApp:
                <span className="font-bold"> theITern MrAkin</span>
              </p>
              <p className="text-[15px] italic">
                Pay by Zelle:
                <span className="font-bold"> 2144389105</span>
              </p>
            </div>
            {/* end of right */}
          </div>
          {/* end of Box */}

          {/* Table  */}
          <div className="w-full flex justify-center items-center mt-4 mb-8 ">
            <table className="w-full">
              <tr>
                <th className="py-2 font-inter">Level</th>
                <th className="py-3 font-inter">Price</th>
                <th className="py-3 font-inter"></th>
              </tr>
              {/* Single Row */}
              {PremiumCourses?.map((item: any, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2 md:w-[950px]">
                      <span className="font-bold font-inter">{item.Title}</span>{" "}
                      – {item.RefundPolicy}
                    </td>
                    <td className="md:px-4 px-2 font-inter">
                      <span className="font-bold">${item.Price}</span> now.
                    </td>
                    <td className="h-full py-2 md:px-0 px-2 flex justify-center items-center font-inter">
                      <button className="md:py-3 py-2 md:px-8 px-2 bg-[#efefef] rounded-[4px] font-semibold font-inter">
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* end of Single Row */}
            </table>
          </div>
          {/* end of Table  */}
          <Link href={"/"} className="text-[blue] font-medium ">
            Return to Home
          </Link>
        </div>
        {/* end of Details */}
      </div>
    </div>
  );
};

export default Index;

const PremiumCourses: object[] = [
  {
    Title: "Cloud Servers Administration with Linux",
    RefundPolicy: "No-Refund Policy applies",
    Price: "600.00",
  },
  {
    Title: "Cloud Solution Architecting with AWS",
    RefundPolicy: "No-Refund Policy applies",
    Price: "600.00",
  },
  {
    Title: "Infra as Code: Terraform & CloudFormation",
    RefundPolicy: "No-Refund Policy applies",
    Price: "600.00",
  },
  {
    Title: "DevOps Tools & CI/CD Engineering",
    RefundPolicy: "No-Refund Policy applies",
    Price: "1,500.00",
  },
  {
    Title: "Full DevOps Project with Kubernetes",
    RefundPolicy: "No-Refund Policy applies",
    Price: "1,000.00",
  },
  {
    Title: "Microsoft Azure DevOps Administrator",
    RefundPolicy: "No-Refund Policy applies",
    Price: "1,000.00",
  },
  {
    Title: "Certified Scrum Product Owner",
    RefundPolicy: "No-Refund Policy applies",
    Price: "1,500.00",
  },
];
