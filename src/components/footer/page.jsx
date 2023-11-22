const Footer = () => {
  return (
    <div>
       
    <div className="flex ">
      <div className="flex p-6 w-[100%] lg:flex-row justify-between flex-col ">
        <div className="">
          <p className="footer-text" >Terms of use</p>
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


      <div className="w-[100%] p-6 lg:border-l-2 border-black">
        <div>
        <p className="font-bold">SIGN UP AND GET 10% OFF</p>
    <p className="py-4">stay connected on time, subscribe to our newsletter and receive q0% off on your next order</p>

        </div>
<div className="flex flex-col gap-3">
    <input className=" border-2 h-6 border-black"     type="text"/>
    <button className="subscribe"> SUBSCRIBE</button>
</div>
      </div>
    </div>

    <div className="border-t-2 flex items-center justify-between  border-black px-6 py-3">
        @2023 ELLAMS GEORGE WORK
    
    <div className="flex gap-4">
        <button className="footer-button">UNITED STATES</button>
        <button className="footer-button">ENGLISH</button>

    </div>
    
    </div>

    <div className="border-t-2 font-bold border-black px-6 py-3">
        @2023 ELLAMS GEORGE WORK
    </div>
    </div>
  );
};

export default Footer;
