import { useState } from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;
  function handleSelect(selectButton) {
    // selectButton => 'components', 'jsx', 'props', state
    setSelectedTopic(selectButton);
  }

  if (selectTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
