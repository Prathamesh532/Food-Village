import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[50%] mx-[10%] my-[50px] flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <span className=" text-orange-500 font-bold">Food Village</span>
        <p className="text-[12px]">ds of high-quality footer images on Dribbble. <br/>connect with designers worldwide</p>
        <div className="flex gap-4">
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Linkedlin</Link>
        </div>
      </div>

      <div className="flex items-start">
        <div className="m-[20px] px-[10px]">
          <h1 className="text-orange-500 font-bold mb-2">About</h1>
          <div className="flex flex-col gap-2">
            <Link>About</Link>
            <Link>Service</Link>
            <Link>Contact</Link>
            <Link>Company</Link>
          </div>
        </div>

        <div className="m-[20px] px-[10px]">
          <h1 className="text-orange-500 font-bold mb-2">Comapay</h1>
          <div className="flex flex-col gap-2">
            <Link>Partnership</Link>
            <Link>Term and policy</Link>
            <Link>Privacy</Link>
            <Link>Sitemap</Link>
          </div>
        </div>

        <div className="m-[20px] px-[10px]">
          <h1 className="text-orange-500 font-bold mb-2">Get in Touch</h1>
          <p>lorem</p>
          <input className="border border-gray-500 rounded-2xl p-2 mr-2 mt-3"  type="email" placeholder="Enter your email" />
          <button className="rounded-2xl bg-orange-500 text-black text-[14px] p-2">Subscribe</button>
        </div>
      </div>

    </div>
  );
};

export default Footer;
