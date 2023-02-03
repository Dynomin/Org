import React from "react";

import { Text, Button, Line, Img, Input } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[249px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] pb-[76px] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-gray_200 flex flex-1 flex-col items-center justify-center p-[25px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-center mt-[26px] md:w-[100%] sm:w-[100%] w-[82%]">
              <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <ul className="flex flex-row gap-[41px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Pages
                    </a>
                  </li>
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 text-left hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row gap-[39px] items-center justify-between w-[auto]">
                  <Text
                    className="not-italic text-indigo_A400 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Sign in
                  </Text>
                  <Button
                    className="cursor-pointer font-normal leading-[normal] min-w-[90px] not-italic text-[12px] text-center text-red_50 w-[auto]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineIndigoA400_1"
                  >
                    Register
                  </Button>
                </div>
              </div>
              <Line className="bg-indigo_A400 h-[3px] md:ml-[0] sm:ml-[0] ml-[1047px] mr-[136px] w-[2%]" />
            </div>
          </div>
        </header>
        <div className="h-[642px] md:h-[auto] sm:h-[auto] max-w-[1205px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <Img
            src="images/img_rectangle7.png"
            className="absolute h-[642px] inset-y-[0] left-[3%] my-[auto] object-cover w-[80%]"
            alt="RectangleSeven"
          />
          <Text
            className="absolute left-[0] text-black_900 text-left top-[9%]"
            as="h1"
            variant="h1"
          >
            <span className="sm:text-[36px] md:text-[38px] text-black_900 text-[40px] font-inter font-bold">
              We help you organiz
            </span>
            <span className="sm:tracking-ls1 sm:text-[36px] md:tracking-ls1 md:text-[38px] text-black_900 text-[40px] tracking-ls2 font-inter font-bold">
              e<br />
            </span>
            <span className="sm:text-[36px] md:text-[38px] text-black_900 text-[40px] font-inter font-bold">
              Hackathons :)
            </span>
          </Text>
          <Text
            className="absolute left-[0] not-italic text-black_900 text-left top-[35%]"
            as="h2"
            variant="h2"
          >
            <span className="text-black_900 text-[18px] font-inter font-normal">
              If you don’t have an account
              <br />
              you can{" "}
            </span>
            <span className="text-indigo_A400 text-[18px] font-inter font-bold">
              Register here!
            </span>
          </Text>
          <Button className="absolute cursor-pointer font-normal leading-[normal] min-w-[317px] not-italic right-[0] text-[16px] text-center text-white_A700 top-[35%] w-[auto]">
            Sign in
          </Button>
          <Input
            className="absolute font-normal leading-[normal] not-italic p-[0] right-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left top-[0] w-[100%]"
            wrapClassName="absolute mt-[132px] sm:w-[100%] top-[21%] w-[27%]"
            name="GroupThree"
            placeholder="Enter OTP"
          ></Input>
          <Input
            className="absolute font-normal leading-[normal] not-italic p-[0] right-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left top-[0] w-[100%]"
            wrapClassName="absolute mt-[44px] sm:w-[100%] top-[7%] w-[27%]"
            type="number"
            name="GroupTwo"
            placeholder="Enter Contact Number"
          ></Input>
          <Text
            className="absolute not-italic right-[0] text-black_900 text-left top-[15%] w-[auto]"
            as="h3"
            variant="h3"
          >
            Send OTP
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
