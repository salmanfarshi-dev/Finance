import React from "react";
import Cards from "../Components/Cards";
import Imageone from "../assets/client (1).png";
import Imagetwo from "../assets/client (2).png";
import Imagethree from "../assets/client (3).png";

function Card() {
  return (
    <section className="max-w-330 mx-auto px-4 md:px-0 mb-10 md:mb-32">
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:justify-between ">
        <Cards
          des='"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."'
          src={Imagethree}
          name="Hadid Khan"
          status="UIUX Designer"
        />
        <Cards
          des={`"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`}
          src={Imageone}
          name="Wade Warren"
          status="Web Designer"
        />
        <Cards
          des={`"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking."`}
          src={Imagetwo}
          name="Jenny Wilson"
          status="Trust Administrator"
        />
      </div>
    </section>
  );
}

export default Card;
