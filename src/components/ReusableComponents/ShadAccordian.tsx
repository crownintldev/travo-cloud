import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/shadcn/ui/accordion"
  
  export function ShadAccordian() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam expedita minus quos temporibus corrupti? Nobis architecto deserunt cum delectus ut expedita amet, porro nostrum tenetur accusamus ipsa iste voluptates.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore itaque repellendus, repudiandae beatae neque iure, quae ad voluptatem provident mollitia quibusdam officiis? Fuga consequuntur ullam error aspernatur odit explicabo dicta!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi laudantium consequuntur repudiandae quia tempore quis repellat, doloremque, beatae quam vel at, reiciendis odio totam similique nam provident pariatur amet perferendis.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  