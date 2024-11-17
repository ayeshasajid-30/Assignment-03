import Image from "next/image";
import ButtonArrow from "@/app/assets/button_Arrow.png";
import WorkTogetherImage from "@/app/assets/Work Together Image.png";
import Apple from "@/app/assets/Apple.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";
import Google from "@/app/assets/Google.png";

export default function HeroSection() {
  return (
    <div className="container font-inter">
      {/* section 1 starting here*/}
      <div className="section_1 w-[1920px] h-[829px] bg-[#043873] text-white flex justify-center items-center">
        {/* text area heading and peragraph*/}
        <div className="heading w-[656px] h-[361px] flex-col flex gap-[38px]">
          <h2 className=" font-bold text-[64px] leading-[77.45px] tracking-[-2%]">
            Get More Done with whitepace
          </h2>
          <p className="font-normal text-lg leading-[30px] tracking-[-2%]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          {/* -------------------------------------------------------*/}

          {/* Button Try Whitepace free */}
          <button className="button w-[219px] h-[63px] text-white  rounded-lg p-5 flex items-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
            <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
              Try Whitepace free
            </p>
            <Image
              src={ButtonArrow}
              alt=""
              className="w-[10px] h-[10px]"
            ></Image>
          </button>
          {/*-------------------------------------------------------*/}
        </div>

        {/* Box 1*/}
        <div className="box w-[824px] h-[549px] bg-[#C4DEFD]"></div>
        {/*-------------------------------------------------------*/}
      </div>
      {/* section 1 end here*/}

      {/* section 2 starting here*/}
      <div className="section_2 w-[1920px] h-[1588px] bg-white flex justify-center items-center flex-col">
        {/* holding content box Starting here*/}
        <div className="allContentbox1 w-[1480px] h-[547px] flex justify-center items-center mb-[100px]">
          {/* text area heading and peragraph*/}
          <div className="heading w-[656px] h-[361px] flex-col flex gap-[38px]">
            <h1 className=" font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-black">
              Project Management
            </h1>
            <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-black">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            {/* -------------------------------------------------------*/}

            {/* Button Get Started */}
            <button className="button w-[201px] h-[63px] text-white rounded-lg p-5 flex items-center justify-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
              <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
                Get Started
              </p>
              <Image
                src={ButtonArrow}
                alt=""
                className="w-[10px] h-[10px]"
              ></Image>
            </button>
            {/*-------------------------------------------------------*/}
          </div>

          {/* Box */}
          <div className="box w-[748px] h-[547px] bg-[#C4DEFD] ml-[60px]"></div>
          {/*-------------------------------------------------------*/}
        </div>
        {/* holding content box end here*/}

        {/* holding content box 2 Starting here*/}
        <div className="allContentbox2 w-[1480px] h-[661px] flex justify-center items-center">
          {/* Box */}
          <Image
            src={WorkTogetherImage}
            alt=""
            className="box w-[710px] h-[661px] mr-[100px]"
          ></Image>

          {/*-------------------------------------------------------*/}

          {/* text area heading and peragraph*/}
          <div className="heading w-[656px] h-[361px] flex-col flex gap-[38px]">
            <h1 className=" font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-black">
              Work together
            </h1>
            <p className="font-normal text-lg leading-[30px] tracking-[-2%] text-black">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            {/* -------------------------------------------------------*/}

            {/* Button Get Started */}
            <button className="button w-[186px] text-white h-[63px] rounded-lg p-5 flex items-center justify-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
              <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
                Try it now
              </p>
              <Image
                src={ButtonArrow}
                alt=""
                className="w-[10px] h-[10px]"
              ></Image>
            </button>
            {/*-------------------------------------------------------*/}
          </div>
        </div>
      </div>
      {/* section 2 end here*/}

      {/* section 3 starting here*/}
      <div className="section_3 w-[1920px] h-[759px] bg-[#043873] text-white flex justify-center items-center">
        {/* text area heading and peragraph*/}
        <div className="heading w-[697px] h-[294px] flex-col flex gap-[38px]">
          <h1 className=" font-bold text-[72px] leading-[87.14px] tracking-[-2%]">
            Use as Extension
          </h1>
          <p className="font-normal text-lg leading-[30px] tracking-[-2%] ">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          {/* -------------------------------------------------------*/}

          {/* Button Get Started */}
          <button className="button w-[171px] text-white h-[63px] rounded-lg p-5 flex items-center justify-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
            <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
              Let’s Go
            </p>
            <Image
              src={ButtonArrow}
              alt=""
              className="w-[10px] h-[10px]"
            ></Image>
          </button>
          {/*-------------------------------------------------------*/}
        </div>

        {/* Box */}
        <div className="box w-[686px] h-[479px] bg-[#C4DEFD] ml-[98px]"></div>
        {/*-------------------------------------------------------*/}
      </div>
      {/* section 3 end here*/}

      {/* section 4 starting here*/}
      <div className="section_4 w-[1920px] h-[812.09px] bg-white flex justify-center items-center">
        {/* Box */}
        <div className="box w-[714px] h-[532.09px] bg-[#C4DEFD] mr-[98px]"></div>
        {/*-------------------------------------------------------*/}

        {/* text area heading and peragraph*/}
        <div className="heading w-[669px] h-[411px] flex-col flex gap-[38px]">
          <h1 className=" font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-black">
            Customise it to your needs
          </h1>
          <p className="font-normal text-lg leading-[30px] tracking-[0.03em] text-black">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          {/* -------------------------------------------------------*/}

          {/* Button Get Started */}
          <button className="button w-[171px] h-[63px] text-white rounded-lg p-5 flex items-center justify-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
            <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
              Let’s Go
            </p>
            <Image
              src={ButtonArrow}
              alt=""
              className="w-[10px] h-[10px]"
            ></Image>
          </button>
          {/*-------------------------------------------------------*/}
        </div>
      </div>
      {/* section 4 end here*/}

      {/* section 5 starting here*/}
      <div className="section_5 w-[1920px] h-[574px] bg-[#043873] text-white flex justify-center items-center">
        <div className="textcontent w-[1481px] h-[294px] flex gap-[60px] justify-center items-center flex-col">
          <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">
            Your work, everywhere you are
          </h1>

          <p className="font-normal text-lg leading-[30px] tracking-[-2%] w-[1064px] text-center">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          {/* Button Get Started */}
          <button className="button w-[195px] h-[63px] text-white rounded-lg p-5 flex items-center justify-center gap-[10px] bg-[#4F9CF9] hover:bg-[#3d78c0]">
            <p className="font-medium text-lg leading-[30px] tracking-[-2%]">
              Try Taskey
            </p>
            <Image
              src={ButtonArrow}
              alt=""
              className="w-[10px] h-[10px]"
            ></Image>
          </button>
          {/*-------------------------------------------------------*/}
        </div>
      </div>
      {/* section 5 end here*/}

      {/* section 6 starting here*/}
      <div className="section_6 w-[1920px] h-[538px] bg-white flex justify-center items-center flex-col">
        <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-black mb-[100px]">
          Our sponsors
        </h1>
        <div className="LogosImages w-[1482px] h-[71px] flex justify-between">
          <Image src={Apple} alt="Apple Logo" className="w-[55.47px] h-[68px]"></Image>
          <Image src={Microsoft} alt="Apple Logo" className="w-[287px] h-[62px]"></Image>
          <Image src={Slack} alt="Apple Logo" className="w-[280px] h-[71px]"></Image>
          <Image src={Google} alt="Apple Logo" className="w-[211px] h-[69.81px]"></Image>
        </div>
      </div>
      {/* section 6 end here*/}
    </div>
  );
}