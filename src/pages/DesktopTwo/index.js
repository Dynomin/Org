import React from "react";

import { Text, Button, Line, Img, Input } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[293px] md:gap-[40px] sm:gap-[40px] items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-gray_200 flex flex-1 flex-col items-center justify-center p-[25px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col items-center justify-center mt-[26px] md:w-[100%] sm:w-[100%] w-[81%]">
              <ul className="flex sm:flex-col flex-row md:hidden sm:hidden items-center justify-start w-[100%] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[30%] my-[9px]">
                  <div className="flex flex-row gap-[41px] items-start justify-start">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 hover:text-indigo_A400 text-left w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 hover:text-indigo_A400 text-left w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      About
                    </a>
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 hover:text-indigo_A400 text-left w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 hover:text-indigo_A400 text-left w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Pages
                    </a>
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-black_900 hover:text-indigo_A400 text-left w-[auto] hover:w-[undefinedpx]"
                      rel="noreferrer"
                    >
                      Contact
                    </a>
                  </div>
                </li>
                <li className="ml-[665px] sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="cursor-pointer font-normal leading-[normal] not-italic text-[12px] text-center text-white_A700"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineIndigoA400"
                  >
                    Sign in
                  </Button>
                </li>
                <li className="ml-[32px] sm:w-[100%] sm:my-[10px] w-[auto] my-[9px]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-normal hover:h-[undefinedpx] not-italic text-[12px] text-indigo_A400 text-left hover:w-[undefinedpx]"
                    rel="noreferrer"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <Line className="bg-indigo_A400 h-[3px] md:ml-[0] sm:ml-[0] ml-[1149px] mr-[11px] w-[2%]" />
            </div>
          </div>
        </header>
        <div className="md:h-[645px] sm:h-[645px] h-[674px] max-w-[1205px] mx-[auto] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <Img
            src="images/img_rectangle6.png"
            className="absolute bottom-[0] h-[645px] object-cover right-[8%] w-[77%]"
            alt="RectangleSix"
          />
          <Text
            className="absolute left-[0] text-black_900 text-left top-[2%]"
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
          <div className="absolute flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[27%] w-[100%]">
            <Text
              className="not-italic text-black_900 text-left"
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
            <Button className="cursor-pointer font-normal leading-[normal] min-w-[317px] sm:mt-[0] mt-[22px] not-italic text-[16px] text-center text-white_A700 w-[auto]">
              Register
            </Button>
          </div>
          <div className="absolute flex flex-col gap-[12px] items-center justify-start right-[0] top-[0] sm:w-[100%] w-[auto]">
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
              wrapClassName="w-[100%]"
              type="text"
              name="GroupTwo"
              placeholder="Name"
            ></Input>
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
              wrapClassName="w-[100%]"
              type="email"
              name="GroupThree"
              placeholder="Email ID"
            ></Input>
            <Input
              className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 text-left w-[100%]"
              wrapClassName="w-[100%]"
              type="number"
              name="GroupFive"
              placeholder="Phone Number"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
