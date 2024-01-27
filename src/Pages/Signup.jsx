import Shape from "../assets/comman/shape.svg";
import Logo from "../assets/logo/logo.svg";
import GoogleLogo from "../assets/comman/google.svg";
import AppleLogo from "../assets/comman/apple.svg";
import GithubLogo from "../assets/comman/github.svg";
import LinkedInLogo from "../assets/comman/linkedin.svg"
import TwitterLogo from "../assets/comman/twitter.svg"
import DiscordLogo from "../assets/comman/discord.svg"
import GithubWhiteLogo from "../assets/comman/social-white/github.svg";
import LinkedInWhiteLogo from "../assets/comman/social-white/linkedin.svg";
import TwitterWhiteLogo from "../assets/comman/social-white/twitter.svg";
import DiscordWhiteLogo from "../assets/comman/social-white/discord.svg";
import { NavLink } from "react-router-dom";


const Signup = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <img src={Shape} className="fixed -z-10" />
      </div>
      <div className="p-6 flex items-center gap-4 bg-[#605BFF] lg:bg-inherit">
        <img src={Logo} className="w-[60px]" />
        <h1 className="text-white font-semibold text-3xl lg:hidden">Base</h1>
      </div>

      <div className="flex justify-around items-center mx-4">
        <div className="lg:block hidden">
          <h1 className="text-white font-semibold text-6xl uppercase">Base</h1>
        </div>
        <div className="w-[450px] lg:mt-0 mt-4">
          <div>
            <h2 className=" text-4xl font-bold">Sign In</h2>
            <p className="mt-2 text-base font-normal">
              Sign in to your account
            </p>

            <div className="flex justify-between mt-4 cursor-pointer">
              <div className="bg-white flex gap-4 px-6 py-2 rounded-xl">
                <img src={GoogleLogo} className="w-4" />
                <p className="text-sm lg:text-base">Sign in with Google</p>
              </div>
              <div className="bg-white flex gap-4 px-6 py-2 rounded-xl">
                <img src={AppleLogo} className="w-4" />
                <p className="text-sm lg:text-base" >Sign in with Apple</p>
              </div>
            </div>

            <div className="bg-white rounded-xl mt-8">
              <div className="flex flex-col mx-8 pt-8">
                <label className=" text-base mb-2">Email Address</label>
                <input type="email" className="bg-[#F5F5F5] rounded-xl p-2" />
              </div>
              <div className="flex flex-col mx-8 pt-8">
                <label className=" text-base mb-2">Password</label>
                <input
                  type="password"
                  className="bg-[#F5F5F5] rounded-xl p-2"
                />
              </div>
              <p className="text-[#346BD4] mx-8 mt-4 cursor-pointer">
                Forgot password?
              </p>
              <div className="mx-8">
              <NavLink to={"/dashboard"}>
              <button className="bg-[#346BD4] rounded-xl font-bold p-2 text-center text-white w-full my-4">
                  Sign In
                </button>
              </NavLink>
                
              </div>
            </div>
            <p className="text-center mt-8 mx-8">Don’t have an account? <span className=" cursor-pointer text-[#346BD4]">Register here</span> </p>
          </div>
        </div>
      </div>
      <div className="gap-6 ml-20 lg:flex hidden">
        <img src={GithubLogo} className="w-11"/>
        <img src={TwitterLogo} className=" w-11"/>
        <img src={LinkedInLogo} className=" w-14"/>
        <img src={DiscordLogo} className=" w-14"/>
      </div>
      <div className="gap-6 mt-8 lg:hidden flex justify-center">
        <img src={GithubWhiteLogo} className="w-11"/>
        <img src={TwitterWhiteLogo} className=" w-11"/>
        <img src={LinkedInWhiteLogo} className=" w-14"/>
        <img src={DiscordWhiteLogo} className=" w-14"/>
      </div>
    </div>
  );
};

export default Signup;
