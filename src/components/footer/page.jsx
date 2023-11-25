const Footer = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col ">
        <div className="flex lg:order-1 order-last  p-6 w-[100%]  lg:flex-row justify-between  ">
          <div className="">
            <p className="footer-text">Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
          </div>

          <div>
            <p className="footer-text">Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
          </div>
          <div>
            <p className="footer-text">Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
          </div>
          <div>
            <p className="footer-text">Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
            <p>Terms of use</p>
          </div>
        </div>

        <div className="w-[100%] lg:order-last p-3  lg:p-6 lg:border-l-2 border-black">
          <div>
            <p className="font-bold text-2xl">SIGN UP AND GET 10% OFF</p>
            <p className="py-4">
              stay connected on time, subscribe to our newsletter and receive
              q0% off on your next order
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <input className=" border-2 h-6 border-black" type="text" />
            <button className="subscribe"> SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="border-t-2  flex items-center justify-between  border-black px-6 py-3">
        <div className="">
          <p> @2023 ELLAMS GEORGE WORK</p>
        </div>

        <div className="flex gap-4 lg:w-[50%] justify-center lg:pl-6">
          <button className="footer-button w-[60%]">UNITED STATES</button>
          <button className="footer-button w-[40%]  ">ENGLISH</button>
        </div>
      </div>

      <div className="border-t-2 font-bold border-black px-6 py-3">
        @2023 ELLAMS GEORGE WORK
      </div>
    </div>
  );
};

export default Footer;
