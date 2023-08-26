import Image from "next/image";
import Link from "next/link";
import React from "react";
const Detail: React.FC = () => {
  return (
    <div className="w-full  h-full ">
      <div
        className={`w-full h-full max-w-[1380px] m-auto px-8 pt-4 pb-10 flex-col justify-center items-center `}
      >
        {/* Image */}
        <Image
          src={"/Home/codding.jpeg"}
          alt="laptop"
          width={100}
          height={100}
          className="w-full h-[30vh] object-cover mb-12"
        />
        {/* end of Image */}

        {/* Network */}
        <div className="flex justify-between items-center py-6">
          {/* Left */}
          <div className="flex-col justify-center items-center ">
            <h6 className="text-[black] font-medium text-[30px] mb-2">
              Network Administrator
            </h6>
            <h6 className="text-[20px]">
              Fee: <span className="text-[green] font-semibold">$ 600</span>
            </h6>
          </div>

          {/* Right */}
          <div>
            <Link
              href={"/registerfortraining"}
              className="flex justify-center items-center bg-[#04a473] text-[white] max-w-[250px]  px-4 py-3 rounded-lg font-medium"
            >
              Register for this course
            </Link>
          </div>
        </div>
        {/* end of Network */}

        {/* Text */}
        <div className="my-4 flex justify-end items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          animi vel dolorem beatae est consectetur porro perspiciatis dolorum
          saepe ad expedita culpa iste impedit modi quaerat? Debitis sint
          itaque, nesciunt totam quos cupiditate distinctio vel optio
          consectetur voluptas dicta mollitia nostrum blanditiis autem natus
          esse vitae. Quibusdam sint architecto nostrum possimus mollitia
          aliquid provident ratione exercitationem modi harum qui, fugiat, et
          ex! Velit commodi facilis eveniet quaerat, reprehenderit quia
          distinctio dolor modi placeat dolorum sapiente, architecto laudantium
          explicabo quam? Ipsum, alias. Sed pariatur adipisci quisquam incidunt
          enim velit nostrum temporibus fuga. Cumque numquam quaerat velit quasi
          quo totam asperiores adipisci natus incidunt, minus eos, beatae
          veritatis dolores non quas sequi deleniti obcaecati mollitia ad
          laudantium? In, voluptatum. Quis dignissimos, quaerat laborum
          architecto quisquam soluta hic. Molestiae, ratione quidem aspernatur
          numquam necessitatibus optio nulla exercitationem a voluptatem culpa
          fuga minima sunt deserunt accusantium odio deleniti, laudantium
          laborum commodi? Repellendus, iusto esse! Aspernatur, sit accusantium!
          Necessitatibus eveniet alias error ab beatae odio consequatur
          inventore commodi suscipit, at eligendi, eaque ut distinctio adipisci
          sequi nam quia sit enim officiis optio. Quis aspernatur perferendis
          optio totam culpa sequi at error, cum quibusdam facilis vero molestiae
          commodi earum ducimus excepturi modi iste voluptas veniam sapiente
          ratione. Officia repellendus dicta minima nesciunt nemo alias,
          perferendis eum eligendi? Exercitationem deserunt eligendi expedita
          aliquid voluptatem suscipit laboriosam id officiis quis sint placeat
          ex, aliquam adipisci maiores saepe, voluptatibus distinctio eveniet
          perspiciatis tempore porro, ipsa minima culpa? Voluptatem quaerat
          deserunt laborum quidem tempora sequi asperiores cumque mollitia saepe
          dolores?
        </div>
        {/* end of Text */}

        {/* Time */}
        <div className="flex justify-start items-center mb-8">
          {/* Left */}
          <div className="flex-col justify-center items-center">
            <h6 className="text-[black] font-semibold text-[30px]">
              Training Start Date
            </h6>
            <h6 className="text-[22px] font-normal">December 22, 2022</h6>
          </div>

          {/* Right */}
          <div className="flex-col justify-center items-center ml-[130px]">
            <h6 className="text-[black] font-semibold text-[30px]">
              Training Start Time
            </h6>
            <h6 className="text-[22px] font-normal">6pm CST</h6>
          </div>
        </div>
        {/* end of Time */}

        {/* Zoom */}
        <div className="flex-col justify-center items-center">
          <h6 className="text-[black] font-semibold text-[30px]">
            Attend 1st call for free
          </h6>
          <Link href={"#"} className="text-[22px] font-normal">
            {" "}
            Link to Zoom
          </Link>
        </div>
        {/* end ofZoom */}
      </div>
    </div>
  );
};

export default Detail;
