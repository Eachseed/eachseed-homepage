import EarlySignUp from "@/components/early-sign-up";
import { headingFont } from "@/lib/constants/fonts";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="container mx-auto px-5">
      <section id="hero" className="py-14 text-center">
        <h1 className={clsx(headingFont.className, 'text-4xl md:text-7xl')}>Fuel your <span className="text-primary">sustainable</span> vision with crowdfunding</h1>
        <p className="text-lg max-w-4xl mx-auto mt-3">Join a community that believes in funding a better future. Launch your sustainable project and connect with mission-driven backers.</p>
        <div className="grid grid-cols-1 gap-4 mt-10 text-start lg:grid-cols-2">

          <div className="border border-slate-500 rounded-md p-8 space-y-3">
            <h2 className={clsx(headingFont.className, 'text-4xl')}>🌱About us</h2>
            <p className="text-lg">
              We empower entrepreneurs to raise funds for their sustainable businesses while equipping them with essential knowledge and skills. With South Africa’s unemployment rate at 33%, starting a business isn’t just an opportunity—it’s a necessity. Why not build a business that also helps the planet?
            </p>
            <ul className="list-none italic">
              <li>✅<span className="font-bold">Raise Funds</span> – Get the capital you need to bring your sustainable idea to life.</li>
              <li>✅<span className="font-bold">Expert Training</span> – Learn about sustainability, the SDGs, and business fundamentals.</li>
              <li>✅<span className="font-bold">Company Registration</span> – Guidance on legal setup to make your business official.</li>
              <li>✅<span className="font-bold">Make an Impact</span> – Build a business that benefits both people and the planet.</li>
            </ul>
          </div>

          <div className="border border-slate-500 rounded-md p-8 space-y-3">
          <h2 className={clsx(headingFont.className, 'text-4xl')}>🚀How it works</h2>
          <p className="text-lg">
            Create your campaign, market it to backers, and get the funding you need to make an impact. We connect you with individual supporters, corporate investors, and sustainability-focused funds to maximize your reach.
          </p>
          <ul className="list-none italic">
            <li>1️⃣<span className="font-bold">Sign Up & Create Your Campaign</span> – Tell your story and set funding goals.</li>
            <li>2️⃣<span className="font-bold">Market & Get Exposure</span> – Promote your campaign while we help attract corporate investors.</li>
            <li>3️⃣<span className="font-bold">Hit Your Goal & Deliver</span> – Provide updates on your milestones to keep backers engaged.</li>
            <li>4️⃣<span className="font-bold">Choose Your Plan:</span>
              <ul className="list-none pl-3 text-md">
                <li>🔹<span className="font-bold">Standard:</span> 5% fee on successful campaigns, risk-free.</li>
                <li>🔹<span className="font-bold">Pro:</span> $30 upfront + 7% success fee, includes SEO & extra training.</li>
                <li>🔹<span className="font-bold">Premium:</span> $50 upfront + 7.5% success fee, with premium support.</li>
              </ul>
            </li>
            <li>💡<span className="font-bold">Risk-Free for Backers & Founders</span> – Unsuccessful campaigns are fully refunded to backers.</li>
          </ul>
          </div>
        </div>

        <div id="earlyaccess" className="my-14 py-4 max-w-2xl mx-auto p-8 border border-slate-500 rounded-md">
            <h2 className={clsx(headingFont.className, 'text-4xl')}>Get early access</h2>
            <p className="text-lg mt-3">Become one of the first startups to be featured on our platform.</p>
            <EarlySignUp />
        </div>
      </section>
    </main>
  );
}
