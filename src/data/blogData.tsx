import React from "react";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  content: React.ReactNode;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "book-an-sti-test-in-europe",
    title: "Book an STI Test in Europe — Compare Prices & Availability Easily",
    date: "Sep 16, 2025",
    image: "/images/Blog/EN/intimka.png",
    content: (
      <>
        <h2>Why Regular STI Testing Matters</h2>
        <p>
          Getting tested for sexually transmitted infections (STIs) is one of
          the most important steps in maintaining peace of mind and protecting
          long-term health. Many STIs, including <strong>chlamydia</strong> and{" "}
          <strong>gonorrhea</strong>, often show no symptoms — meaning regular
          screening is essential (<span style={{ color: "#ed327e" }}>WHO</span>
          ).
        </p>
        <p>
          If you want to learn more about the medical side of testing, see our
          guide: <i>Types of STI Tests: Blood vs Swab vs Urine</i> (internal
          link).
        </p>

        <h2>Challenges People Face Across Europe</h2>
        <p>
          Many individuals experience two major obstacles when trying to book an
          STI test:
        </p>
        <ol>
          <li>
            <strong>Insurance Limitations</strong> — Public health insurance
            often covers tests only if you already have symptoms or a doctor's
            referral. Appointments may also be limited.
          </li>
          <li>
            <strong>Price Differences</strong> — Private testing can be
            expensive and varies widely. Without one place to compare, you might
            overpay or miss faster, more convenient options.
          </li>
        </ol>

        <h2>How Intimka Makes STI Testing Easier</h2>
        <p>
          Our platform was built to reduce these barriers and put users in
          control:
        </p>
        <ul>
          <li>
            <strong>No referral needed</strong> — book an STI test directly, at
            a time that suits you.
          </li>
          <li>
            <strong>Compare options in one place</strong> — instead of
            contacting each clinic separately.
          </li>
          <li>
            <strong>Choose what matters most to you:</strong>
            <ul>
              <li>Fastest results (for urgent peace of mind).</li>
              <li>
                Best value through <strong>bundled test packages</strong>{" "}
                (multiple infections tested at once).
              </li>
              <li>
                Convenience (familiar doctor, preferred location, or flexible
                timing).
              </li>
            </ul>
          </li>
          <li>
            <strong>Filter by urgency, price, and availability</strong> —
            everything organized in one platform.
          </li>
        </ul>
        <p>
          According to the <span style={{ color: "#ed327e" }}>ECDC</span>,
          millions of STI cases are reported in Europe every year, yet
          under-diagnosis remains a problem because testing is not always easy
          to access.
        </p>

        <h2>Why This Matters</h2>
        <p>
          Delaying a test can increase both health risks and anxiety. With
          Intimka, you don't need to compromise between affordability and speed.
          You simply choose the option that matches your needs today.
        </p>
        <p>
          For more background on why regular check-ups are critical, read our
          article: <i>Why Regular STI Testing Protects You and Your Partner</i>{" "}
          (internal link).
        </p>

        <h2>Take Control of Your Sexual Health</h2>
        <p>
          STI testing across Europe can feel complicated, but it doesn't have to
          be. Intimka makes it transparent, convenient, and accessible:
        </p>
        <ul>
          <li>book tests without a doctor's referral,</li>
          <li>find the best package prices,</li>
          <li>and secure appointments that fit your schedule.</li>
        </ul>

        <p className="cta">
          👉{" "}
          <strong>
            Take control today:{" "}
            <span style={{ color: "#ed327e" }}>
              Book your STI test with Intimka now
            </span>
          </strong>
        </p>
      </>
    ),
  },
];
