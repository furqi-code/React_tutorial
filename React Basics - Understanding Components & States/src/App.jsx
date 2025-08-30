import { Heroes } from "./components/Heroes/Heroes";
import { PROFILE } from "./constants";
import { Section } from "./components/section/Section";
import "./styles.css";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects/Projects";
export function App() {
  console.log('APP RENDERED')
  return (
    <>
      <Heroes {...PROFILE}></Heroes>

      <Section id="skills" WrapperName="main" title="Skills">
        <Skills></Skills>
      </Section>

      <Section id="projects" title="Projects">
        <Projects></Projects>
      </Section>
    </>
  );
}

{
  /* <Introduction
        title={PROFILE.title}
        description={PROFILE.description}
        primaryButtonTitle={PROFILE.primaryButtonTitle}
        secondaryButtonTitle={PROFILE.secondaryButtonTitle}
      ></Introduction> */
}
