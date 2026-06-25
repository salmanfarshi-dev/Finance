import React from "react";
import { Accordion } from "@heroui/react";

function Faq() {
  return (
    <section className="max-w-330 mx-auto md:px-0 px-4">
      <h2 className="text-3xl md:text-[40px] font-bold text-center text-white mb-16">
        FAQS
      </h2>

      <div className="flex justify-center">
        <Accordion allowsMultipleExpanded className="w-full max-w-225">
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                What credit score do I need to apply for a credit card?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                How can I apply for a credit card online?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                Are there any annual fees associated with the credit card?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                How long does it take to receive the credit card once approved?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                How can I check my credit card balance and transactions?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                What should I do if my credit card is lost or stolen?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Heading>
              <Accordion.Trigger className="text-[16px] md:text-[24px] font-bold px-0">
                Is my credit card information secure?
                <Accordion.Indicator />
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-0 text-secondary text-sm md:text-[16px]">
                The required credit score may vary depending on the specific
                credit card. Generally, a good to excellent credit score
                (typically 670 or above) increases your chances of approval for
                premium credit cards.
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
