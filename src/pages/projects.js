import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import Stack from "../components/Stack";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Inline from "../components/Inline";
import TextContext from "../components/TextContext";
import Link from "../components/Link";

function ProjectCard(props) {
  return (
    <Stack gap={3}>
      <Text color="strong" sans weight="bold" size={8}>
        {props.title}
      </Text>
      <TextContext attrs={{ size: 4, bold: true, color: "link" }}>
        <Inline gap={3}>
          {props.url && (
            <Text>
              <Link target="_blank" href={props.url}>
                <Icon icon="arrow-up-right-from-square" /> Live demo
              </Link>
            </Text>
          )}
          <Text>
            <Link target="_blank" href={props.github}>
              <Icon icon={["fab", "github"]} /> GitHub
            </Link>
          </Text>
        </Inline>
      </TextContext>
      <Text align="justify">{props.description}</Text>
    </Stack>
  );
}

const IndexPage = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <ProjectCard
            title="Plastic design system"
            description="Culture Amp esque design system based on specimen using Culture Amps design tokens."
            github="https://github.com/felixsebastian/plastic"
          />
          <ProjectCard
            title="Gong simulator"
            description="Good for announcing releases."
            github="https://github.com/felixsebastian/gong-simulator"
            url="https://csb-g0fn1k-felixsebastian.vercel.app/"
          />
          <ProjectCard
            title="Specimen barebones design system"
            description="Collection of design system primitives to deal with layout, colour and typography."
            github="https://github.com/felixsebastian/specimen"
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default IndexPage;
