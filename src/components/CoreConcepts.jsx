import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts({}) {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} key={conceptItem.title} />
        ))}
      </ul>
    </Section>
  );
}
