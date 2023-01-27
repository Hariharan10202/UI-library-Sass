accordionProperty = {
  Accordion: document.querySelector(".Accordion"),
  accordionContent: document.querySelector(".Accordion-Content"),
};

const toggleAccordionHandler = () => {
  accordionProperty.Accordion.children[0].addEventListener("click", () => {
    accordionProperty.accordionContent.classList.toggle("showAccord");

    accordionProperty.Accordion.children[0].children[1].style.transform =
      accordionProperty.Accordion.children[0].children[1].style.transform ===
      "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
  });
};

toggleAccordionHandler();
