import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import Divider from "@/components/ui/Divider";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20">
        <Container>
          <FadeUp>
            <SectionLabel>Resource Hub</SectionLabel>
            <SectionTitle as="h1">Client Resources</SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
              Whether you&apos;re buying your first home or getting ready to
              sell, these guides and checklists will walk you through the
              process step by step. Bookmark this page and come back whenever
              you need it.
            </p>
          </FadeUp>
        </Container>
      </section>

      <Container>
        <Divider />
      </Container>

      {/* ─── Buying 101 ─── */}
      <section id="buying-101" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Buyer&rsquo;s Guide</SectionLabel>
            <SectionTitle as="h2" className="mb-16">
              Home Buying 101
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-16 md:grid-cols-2">
            {/* Understanding Your Budget */}
            <FadeUp delay={0.05}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Understanding Your Budget
              </h3>
              <p className="leading-relaxed text-stone">
                Before you start scrolling through listings, take a real look at
                your finances. Think about your monthly income, any debts you
                carry, what you&apos;ve saved for a down payment, and what
                closing costs will look like. A good rule of thumb is to keep
                your total housing payment below 28 to 30% of your gross monthly
                income. Sitting down with a lender early gives you a clear
                number to work with and avoids surprises later.
              </p>
            </FadeUp>

            {/* Getting Pre-Approved */}
            <FadeUp delay={0.1}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Getting Pre-Approved
              </h3>
              <p className="leading-relaxed text-stone">
                A pre-approval letter tells sellers you&apos;re serious and
                ready to go. A lender will review your credit, income, and
                employment to figure out how much they&apos;ll lend you. In
                Houston&apos;s market, where good homes can get multiple offers
                within days, having this in hand makes a real difference.
              </p>
            </FadeUp>

            {/* The Home Search */}
            <FadeUp delay={0.15}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                The Home Search
              </h3>
              <p className="leading-relaxed text-stone">
                Once you know your budget, it&apos;s time to figure out your
                must-haves and nice-to-haves. Think about commute times, school
                zones, lot size, and neighborhood vibes. I&apos;ll set up MLS
                alerts so new listings that fit what you&apos;re looking for
                hit your inbox right away. We&apos;ll tour homes together, and
                I&apos;ll point out things photos don&apos;t show you: foundation
                concerns, drainage issues, and what&apos;s being developed nearby.
              </p>
            </FadeUp>

            {/* Making an Offer */}
            <FadeUp delay={0.2}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Making an Offer
              </h3>
              <p className="leading-relaxed text-stone">
                When you find the right home, we put together a competitive
                offer based on comparable sales, current market conditions, and
                what we know about the seller&apos;s situation. Your offer
                includes the purchase price, earnest money deposit, proposed
                closing date, and any contingencies like financing or
                inspection. I&apos;ll negotiate on your behalf to get you the
                best terms while keeping things moving.
              </p>
            </FadeUp>

            {/* Inspections */}
            <FadeUp delay={0.25}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Inspections
              </h3>
              <p className="leading-relaxed text-stone">
                Once your offer is accepted, a professional home inspection is
                your chance to catch any hidden problems. The inspector checks
                the roof, foundation, electrical, plumbing, HVAC, and more. In
                Houston, I also recommend a termite inspection and a separate
                foundation evaluation because of our clay soils. If anything
                significant comes up, we can renegotiate repairs or credits
                before you commit.
              </p>
            </FadeUp>

            {/* Closing Process */}
            <FadeUp delay={0.3}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Closing Process
              </h3>
              <p className="leading-relaxed text-stone">
                Closing day is the finish line. You&apos;ll review and sign
                your final loan documents, pay closing costs, and get the keys
                to your new home. In Texas, closing costs typically run 2 to 5%
                of the purchase price and cover title insurance, escrow fees,
                and lender charges. I&apos;ll coordinate with the title company,
                your lender, and the seller&apos;s agent to make sure every
                document is in order so everything goes smoothly.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Container>
        <Divider />
      </Container>

      {/* ─── Selling 101 ─── */}
      <section id="selling-101" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Seller&rsquo;s Guide</SectionLabel>
            <SectionTitle as="h2" className="mb-16">
              Home Selling 101
            </SectionTitle>
          </FadeUp>

          <div className="grid gap-16 md:grid-cols-2">
            {/* Preparing Your Home */}
            <FadeUp delay={0.05}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Preparing Your Home
              </h3>
              <p className="leading-relaxed text-stone">
                Buyers make snap judgments, so first impressions matter. Start
                by decluttering and depersonalizing every room so people can
                picture themselves living there. Take care of small fixes like
                leaky faucets, chipped paint, and squeaky doors. Those little
                things can make buyers nervous. Professional staging and a
                landscaping refresh can also go a long way toward getting more
                eyes on your listing and better offers.
              </p>
            </FadeUp>

            {/* Pricing Strategy */}
            <FadeUp delay={0.1}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Pricing Strategy
              </h3>
              <p className="leading-relaxed text-stone">
                Getting the price right from day one is the single biggest
                factor in a successful sale. I put together a detailed
                comparative market analysis (CMA) that looks at recent sales
                of similar homes in your area, current inventory, and market
                trends. Price too high and your home sits. Price it right and
                you create urgency, get more showings, and attract stronger
                offers.
              </p>
            </FadeUp>

            {/* Marketing Your Home */}
            <FadeUp delay={0.15}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Marketing Your Home
              </h3>
              <p className="leading-relaxed text-stone">
                Every listing I represent gets professional photography, a
                video walkthrough, and digital ads across social media. Your
                home will be on the MLS, Zillow, Realtor.com, and my own
                website. I also tap into my network of local agents and past
                clients to build interest before the listing even goes live.
              </p>
            </FadeUp>

            {/* Negotiating Offers */}
            <FadeUp delay={0.2}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Negotiating Offers
              </h3>
              <p className="leading-relaxed text-stone">
                When offers come in, I look at the full picture. Not just the
                price, but the buyer&apos;s financing, contingencies, and
                proposed timeline. If you&apos;re in a multiple-offer situation,
                I&apos;ll walk you through each one and help you put together a
                counter that gets you the most money while keeping the deal on
                track.
              </p>
            </FadeUp>

            {/* The Closing Process */}
            <FadeUp delay={0.25}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                The Closing Process
              </h3>
              <p className="leading-relaxed text-stone">
                After accepting an offer, the transaction enters the escrow
                period. The buyer will conduct inspections and finalize their
                financing. I manage the timeline, coordinate repair
                negotiations, and ensure all contractual deadlines are met.
                On closing day, you sign the deed transfer, the title company
                disburses your proceeds, and the sale is complete. I stay
                available for any questions that arise even after the keys
                change hands.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Container>
        <Divider />
      </Container>

      {/* ─── Schools ─── */}
      <section id="schools" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Education</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              Public Schools &amp; Zoning
            </SectionTitle>
            <p className="mb-16 max-w-2xl leading-relaxed text-stone">
              The Greater Houston area is served by dozens of independent school
              districts. Below is a brief overview of the four most popular
              districts my clients consider when choosing a neighborhood. School
              zoning boundaries can shift, so always verify current assignments
              before making a purchase decision.
            </p>
          </FadeUp>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Houston ISD */}
            <FadeUp delay={0.05}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Houston ISD
              </h3>
              <p className="leading-relaxed text-stone">
                As the largest district in Texas, Houston ISD serves over
                194,000 students across nearly 280 schools. The district is
                home to nationally recognized magnet programs in STEM, fine
                arts, and international studies. Key neighborhoods zoned to
                top-rated HISD campuses include the Heights, Bellaire, and
                Meyerland. Ratings vary widely by campus, so researching
                individual school performance data is essential.
              </p>
            </FadeUp>

            {/* Fort Bend ISD */}
            <FadeUp delay={0.1}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Fort Bend ISD
              </h3>
              <p className="leading-relaxed text-stone">
                Fort Bend ISD consistently ranks among the top large districts
                in the Houston metro. Serving communities like Sugar Land,
                Missouri City, and Richmond, the district is known for strong
                academics, diverse student populations, and well-funded
                extracurricular programs. Many Fort Bend campuses earn &ldquo;A&rdquo;
                ratings from the Texas Education Agency, making it a top choice
                for families prioritizing education.
              </p>
            </FadeUp>

            {/* Katy ISD */}
            <FadeUp delay={0.15}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Katy ISD
              </h3>
              <p className="leading-relaxed text-stone">
                Katy ISD is one of the fastest-growing districts in the state,
                covering a large swath of west Houston and unincorporated Harris
                and Fort Bend counties. The district is renowned for its
                athletics programs, high graduation rates, and strong
                community involvement. Master-planned communities like Cinco
                Ranch, Cross Creek Ranch, and Elyson are all zoned to
                highly-rated Katy ISD schools.
              </p>
            </FadeUp>

            {/* Cy-Fair ISD */}
            <FadeUp delay={0.2}>
              <h3 className="mb-3 font-serif text-2xl font-light tracking-tight text-ink">
                Cy-Fair ISD
              </h3>
              <p className="leading-relaxed text-stone">
                Cypress-Fairbanks ISD is the third-largest district in Texas and
                serves the rapidly expanding northwest Houston corridor.
                Neighborhoods in Cypress, Jersey Village, and Copperfield fall
                within Cy-Fair boundaries. The district offers career and
                technical education pathways, strong special education services,
                and numerous campuses that consistently meet or exceed state
                performance standards.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      <Container>
        <Divider />
      </Container>

      {/* ─── Utilities ─── */}
      <section id="utilities" className="scroll-mt-24 py-24">
        <Container>
          <FadeUp>
            <SectionLabel>Moving In</SectionLabel>
            <SectionTitle as="h2" className="mb-6">
              Utilities Checklist
            </SectionTitle>
            <p className="mb-16 max-w-2xl leading-relaxed text-stone">
              Moving into a new home means setting up a handful of essential
              services. Use this checklist to make sure nothing falls through
              the cracks. I recommend starting the transfer or sign-up process
              at least two weeks before your move-in date.
            </p>
          </FadeUp>

          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {/* Electricity */}
            <FadeUp delay={0.05}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  1
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Electricity
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    Choose via Power to Choose (powertochoose.org).
                    Texas has a deregulated electricity market, so you can
                    compare rates from dozens of providers. I recommend locking
                    in a fixed-rate plan so your monthly bill stays predictable.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Water */}
            <FadeUp delay={0.1}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  2
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Water
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    City of Houston Public Works or your local MUD (Municipal
                    Utility District). Service is typically set up through
                    your municipality&apos;s website. You&apos;ll usually pay
                    a deposit that gets refunded after 12 months of on-time
                    payments.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Gas */}
            <FadeUp delay={0.15}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  3
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Gas
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    CenterPoint Energy handles natural gas delivery in the
                    Houston area. You can start service online or by phone.
                    Gas is commonly used for water heaters, stoves, and
                    furnaces in Houston homes.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Sewer */}
            <FadeUp delay={0.2}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  4
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Sewer
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    Typically bundled with your water service through the city
                    or MUD. If your property uses a septic system instead of
                    municipal sewer, schedule an inspection and pumping within
                    the first year of ownership.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Internet & Cable */}
            <FadeUp delay={0.25}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  5
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Internet &amp; Cable
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    Xfinity, AT&amp;T Fiber, or Tachus depending on your
                    address. Availability varies by neighborhood. Check
                    coverage maps before closing to confirm the speeds you
                    need are available at your new address.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Security System */}
            <FadeUp delay={0.3}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  6
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Security System
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    ADT, Ring, Vivint, or SimpliSafe are popular options.
                    If the previous owner had a monitored system, you may be
                    able to transfer service. Smart doorbells and cameras are
                    a great starting point if a full system isn&apos;t in the
                    budget right now.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Homeowners Insurance */}
            <FadeUp delay={0.35}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  7
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Homeowners Insurance
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    Shop quotes from at least three carriers. In the Houston
                    area, flood insurance through FEMA&rsquo;s NFIP or a
                    private insurer is strongly recommended even if your
                    property is not in a designated flood zone. Your lender
                    may require it depending on the FEMA map.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Mail Forwarding */}
            <FadeUp delay={0.4}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-silver text-xs text-stone">
                  8
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-lg font-light tracking-tight text-ink">
                    Mail Forwarding
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    <span className="font-medium text-ink">Provider:</span>{" "}
                    USPS Change of Address (moversguide.usps.com). Submit
                    your forwarding request at least one week before moving.
                    USPS will redirect first-class mail for up to 12 months,
                    giving you time to update your address with banks,
                    subscriptions, and government agencies.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
