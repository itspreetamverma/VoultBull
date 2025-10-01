import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="">
      {/* Header */}
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-2 py-2 text-left text-sm lg:text-base font-bold uppercase transition-colors duration-300 ${
          isOpen ? "text-[#FF0000]" : "text-[#4F4F4F]"
        }`}
      >
        <FaCaretDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#FF0000]" : "text-[#4F4F4F]"
          }`}
        />
        <span>{title}</span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-[#575656] space-y-5">
          {content.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[13px] font-semibold">{section.heading}</h4>
              {section.items ? (
                <ul className="text-[13px] list-disc pl-8">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[13px]">{section.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "ADVERTISING MATERIALS PROVIDED BY THE COMPANY",
      content: [
        {
          heading: "Overview:",
          text: "To support product promotion efforts, the company will provide distributors with a comprehensive range of advertising materials designed to enhance market visibility and drive local engagement.",
        },
        {
          heading: "Materials Included:",
          items: [
            "Printed marketing collateral such as eye-catching posters, banners and flyers.",
            "Digital assets including engaging social media creatives, promotional videos, and graphics.",
            "Product catalogs, brochures, and other professionally designed branded literature.",
          ],
        },
        {
          heading: "Key Benefits:",
          items: [
            "Increases brand visibility and recall in the local market.",
            "Reduces the distributor's investment in marketing resources.",
            "Maintains consistent and professional branding across all locations.",
          ],
        },
      ],
    },
    {
      title: "TRANSPORTATION CHARGES COVERED BY THE COMPANY",
      content: [
        {
          heading: "Overview:",
          text: "The company will bear the transportation costs for delivering goods from our warehouse to the designated transporter location in the distributor’s city.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Significantly reduces the overall logistical burden on the distributor’s operations.",
            "Ensures prompt and reliable delivery of goods to the distributor’s location.",
            "Minimizes operational and transportation expenses for the distributor’s business growth.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Transportation support is applicable for bulk orders, as per mutually agreed terms.",
            "Delivery schedules and timelines will be shared in advance for better coordination.",
          ],
        },
      ],
    },
    {
      title: "BRANDED T-SHIRT WITH EACH CARTON",
      content: [
        {
          heading: "Overview:",
          text: "For every carton ordered (defined as a set quantity of products, e.g., 10 units), the distributor will receive one branded T-shirt customized with the Distributor's Shop Name and the Arrowatt company logo.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Serves as an effective promotional item or staff uniform for daily use.",
            "Enhances brand visibility and adds perceived value to the distributor's order.",
            "Strengthens brand association at the customer's point of sale.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "T-shirts will be issued based on the total number of cartons ordered.",
            "Design and size availability may vary based on stock and printing schedule.",
          ],
        },
      ],
    },
    {
      title: "SPECIAL DISCOUNT FOR DISTRIBUTORS",
      content: [
        {
          heading: "Overview:",
          text: "Distributors will be entitled to exclusive discounts on bulk purchases, designed to maximize profitability and promote higher order volumes.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Increases overall profit margins for the distributor’s growing business.",
            "Encourages larger and more frequent bulkorder quantities.",
            "Strengthens long-term business collaboration and sustainable mutual growth.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Discount rates will be determined based on the volume of each order.",
            "Detailed discount slabs and eligibility criteria will be outlined in the distributor agreement.",
          ],
        },
      ],
    },
    {
      title: "BRANDING STICKERS FOR RETAIL SHOP",
      content: [
        {
          heading: "Overview:",
          text: "The company will supply premium-quality branding stickers to be prominently displayed at the distributor’s retail outlet for enhanced visibility and impact.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Significantly enhances local brand visibility and improves customer recognition.",
            "Creates a professional, attractive, and consistently branded appearance for the store.",
            "Reinforces trust, credibility, and strong brand presence at the point of sale.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Stickers must be displayed prominently as per the company’s branding guidelines.",
            "Placement will be reviewed during routine audits or visits.",
          ],
        },
      ],
    },
    {
      title: "BRANDED OUTLET BOARD PROVIDED BY THE COMPANY",
      content: [
        {
          heading: "Overview:",
          text: "The company will provide a professionally designed and branded outlet board/signboard to enhance the distributor’s storefront appearance and brand presence.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Attracts customers with a professional, eye-catching, and appealing storefront.",
            "Strengthens brand identity and maximizes visibility in the competitive local market area.",
            "Enhances trust, professionalism, and brand consistency in overall customer perception.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "The design, size, and specifications of the board will be standardized and approved by the company.",
            "Installation guidelines must be followed as per the company’s branding policy.",
          ],
        },
      ],
    },
    {
      title: "COMPLIMENTARY SINGLE BATTERY CHARGER AS A GIFT",
      content: [
        {
          heading: "Overview:",
          text: "Distributors will receive a complimentary single battery charger with their initial bulk order or upon reaching specific sales milestones.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Adds practical and functional value to the distributor’s overall inventory and customer offerings.",
            "Can be utilized as a promotional item, customer incentive, or sold separately for additional profit.",
            "Enhances long-term distributor engagement and effectively rewards consistent sales performance.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "The complimentary charger will be issued based on company-defined targets and promotional policies.",
            "Offer subject to availability and applicable only for qualifying orders.",
          ],
        },
      ],
    },
    {
      title: "FOREIGN TOUR INCENTIVE PROGRAM",
      content: [
        {
          heading: "Overview:",
          text: "Top-performing distributors will qualify for an all-expenses-paid international tour as a prestigious reward for achieving exceptional sales milestones.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Serves as a powerful motivational incentive to boost consistent sales performance & growth.",
            "Offers valuable global opportunities for networking, team bonding, and professional rejuvenation.",
            "Recognizes and proudly celebrates outstanding business achievement in a truly memorable way.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Eligibility is based on predefined sales targets, performance period, and qualifying criteria.",
            "The destination, itinerary, and duration of the tour will be determined by the company and communicated in advance.",
          ],
        },
      ],
    },
    {
      title: "BRAND PROMOTION BY FAMOUS CELEBRITY",
      content: [
        {
          heading: "Overview:",
          text: "The company will leverage the influence of a well-known celebrity aligned with the brand's image to boost brand awareness and attract more customers. Distributors will have the opportunity to host exclusive celebrity-driven promotional events in their cities.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Significantly enhances brand credibility and visibility through celebrity endorsement.",
            "Drives increased customer footfall and engagement at the distributor's outlet.",
            "Creates buzz and excitement via meet-and-greet sessions, product launches, and social media campaigns.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "The distributor is responsible for venue arrangements and local event logistics.",
            "Specific promotional activities will be coordinated between the company and distributor.",
          ],
        },
      ],
    },
    {
      title: "BANNER & HOARDING SPONSORSHIP IN YOUR CITY",
      content: [
        {
          heading: "Overview:",
          text: "The company will sponsor the installation of large, high-impact banners and hoardings at prominent locations within the distributor's city to significantly increase brand visibility and establish a strong local market presence.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Enhances brand recognition and creates a powerful local presence.",
            "Attracts potential customers through high-traffic, strategically placed advertisements.",
            "Supports the distributor's marketing efforts by providing professional promotional displays.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Locations and installation schedules will be coordinated between the company and the distributor.",
            "Maintenance and security of the installed materials are the distributor’s responsibility.",
          ],
        },
      ],
    },
    {
      title: "SPECIAL VISIT TO FACTORY IN CHINA FOR DISTRIBUTORS",
      content: [
        {
          heading: "Overview:",
          text: "Top-performing distributors will be rewarded with an all-expenses-paid visit to the company’s state-of-the-art manufacturing facility in China. This initiative aims to strengthen trust, enhance product knowledge, and deepen brand engagement.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Builds greater confidence in product quality and company capabilities.",
            "Provides direct interaction with the leadership team for strategic discussions.",
            "Enhances motivation and loyalty by offering a prestigious and educational experience.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Eligibility is based on predefined sales performance and achievement criteria.",
            "The tour is subject to international travel guidelines, availability, and visa approvals.",
          ],
        },
      ],
    },
    {
      title: "DEALER GATHERING IN DISTRIBUTOR CITY WITH MEAL",
      content: [
        {
          heading: "Overview:",
          text: "The company will organize an exclusive dealer gathering in the distributor's city to strengthen relationships, foster collaboration, and build a strong community within the distribution network, followed by a premium dinner or lunch event.",
        },
        {
          heading: "Key Benefits:",
          items: [
            "Encourages open communication to discuss business strategies and overcome challenges.",
            "Recognizes and appreciates distributor contributions, boosting morale and loyalty.",
            "Enhances team spirit and fosters long-term collaboration among dealers.",
          ],
        },
        {
          heading: "Terms & Conditions:",
          items: [
            "Event details, including venue and timing, will be coordinated with the distributor.",
            "Participation may be subject to distributor performance and invitation criteria.",
          ],
        },
      ],
    },
    {
      title: "CONCLUSION",
      content: [
        {
          heading: "",
          text: "This distributor scheme is strategically crafted to build a strong and mutually beneficial partnership between the company and its distributors. Through comprehensive support—including transportation assistance, advertising materials, branded merchandise, exclusive discounts, and high-value incentives such as foreign tours and factory visits—the company is committed to empowering its distributors for sustained growth and market success. By aligning distributor efforts with brand goals, this initiative not only enhances regional visibility but also drives long-term profitability and loyalty.",
        },
        {
          heading: "",
          items: [
            "For further details or to become a part of this rewarding program, please contact our dedicated sales team.",
          ],
        },
      ],
    },
    {
      title: "CUSTOMER CARE : VOLTBULL ENERGY PVT. LTD.",
      content: [
        {
          heading: "Overview:",
          text: "The company is committed to providing exceptional customer service to ensure end-user satisfaction and distributor support. A dedicated customer care team will be available to handle inquiries, resolve issues, and maintain smooth communication between the company, distributors, and customers.",
        },
        {
          heading: "Seamless Support for Every Need:",
          items: [
            "Strengthens customer trust and enhances the overall brand reputation.",
            "Provides prompt resolution to product-related queries or concerns.",
            "Supports distributors by addressing customer feedback and service requests efficiently.",
            "Increases repeat business through positive post-sale experiences.",
            "Builds long-term customer loyalty through responsive service.",
            "Enhances customer satisfaction, leading to stronger word-of-mouth referrals.",
          ],
        },
      ],
    },
    {
      title: "BATTERY INSTALLATION GUIDELINE",
      content: [
        {
          heading: "Overview:",
          text: "Proper battery installation and regular maintenance are essential for optimal vehicle performance, safety, and battery life. Follow the guidelines below to ensure a safe, efficient, and long-lasting battery experience.",
        },
        {
          heading: "Verify the Cause of the Problem:",
          text: "Before replacing the battery, ensure it is the actual issue. Faults in the vehicle’s electrical system—such as a malfunctioning alternator, starter, or wiring—can mimic battery failure. Consult a certified mechanic or contact our service team for an accurate diagnosis.",
        },
        {
          heading: "Select the Correct Battery Size:",
          text: "Refer to your vehicle’s owner’s manual for the recommended battery group size. The group size indicates the correct dimensions and terminal orientation. Some vehicles support multiple group sizes—choose the one that provides the best fit and capacity.",
        },
        {
          heading: "Check Electrical System Health:",
          items: [
            "Cranking Voltage Test: Battery voltage during engine start should remain above 9.8V. Anything lower indicates a weak or failing battery.",
            "Alternator Charging Test: A healthy alternator output should be between 13.8V and 14.5V across battery terminals to ensure proper charging during operation.",
          ],
        },
      ],
    },
    {
      title: "BATTERY INSTALLATION IN VEHICLES",
      content: [
        {
          heading: "Installation Steps:",
          items: [
            "Turn OFF the engine and remove the key.",
            "Mark the positive (+) cable to ensure correct reconnection.",
            "Disconnect the negative (-) cable first to avoid short circuits.",
            "Use proper tools to prevent damage to cable clamp bolts.",
            "Remove the old battery and clean the battery tray and hold-down bracket. Ensure the area is free of debris or corrosion.",
            "Confirm the negative cable is properly grounded to the frame or engine block.",
            "Position the new battery securely in the tray, aligning the terminals correctly (note: the positive post is slightly larger and tapered).",
            "Connect the positive (+) cable first, followed by the negative (-) cable.",
            "Apply a thin layer of Vaseline or petroleum jelly to battery terminals to prevent corrosion.",
            "Before the vehicle leaves the shop, verify the charging system voltage is correct.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === idx}
          onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
};

export default Accordion;
