import * as React from "react";
import PageLayout from "../components/PageLayout";
import BasicPage from "../components/BasicPage";
import Stack from "../components/Stack";
import Text from "../components/Text";
import Icon from "../components/Icon";
import Link from "../components/Link";
import gs from "../utils/gs";
import { css } from "@emotion/react";

const SideLink = (props) => (
  <Link href={props.url} target="_blank">
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: ${gs(1)};
      `}
    >
      {props.children}
      <Text size={0} color="weak">
        <Icon icon="arrow-up-right-from-square" />
      </Text>
    </div>
  </Link>
);

const BookPost = (props) => (
  <Stack gap={4}>
    <Stack>
      <Text bold sans tight color="strong" size={6}>
        <Icon icon="book" /> {props.title}
      </Text>
      <Text weight={500} sans color="weak" size={4}>
        {props.author} ({props.year})
      </Text>
    </Stack>
    <Text>{props.comments}</Text>
  </Stack>
);

const PaperPost = (props) => (
  <Stack gap={4}>
    <Stack>
      <SideLink {...props}>
        <Text bold sans tight color="strong" size={6}>
          <Icon icon="file-lines" /> {props.title}
        </Text>
      </SideLink>
      <Text weight={500} sans color="weak" size={4}>
        {props.author} ({props.year})
      </Text>
    </Stack>
    <Text>{props.comments}</Text>
  </Stack>
);

const BlogPost = (props) => (
  <Stack gap={4}>
    <Stack>
      <SideLink {...props}>
        <Text bold sans tight color="strong" size={6}>
          <Icon icon="pen-clip" /> {props.title}
        </Text>
      </SideLink>
      <Text weight={500} sans color="weak" size={4}>
        {props.author} ({props.year})
      </Text>
    </Stack>
    <Text>{props.comments}</Text>
  </Stack>
);

const YouTubePost = (props) => (
  <Stack gap={4}>
    <Stack>
      <Text bold sans tight color="strong" size={6}>
        <Icon icon={["fab", "youtube"]} /> {props.title}
      </Text>
    </Stack>
    <Text>{props.description}</Text>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </Stack>
);

const IndexPage = () => {
  return (
    <PageLayout>
      <BasicPage>
        <Stack gap={10}>
          <BookPost
            title="The DevOps Handbook"
            author="Gene Kim et al."
            year="2016"
            comments="This book is so hard to get through, but shines a light on the DevOps revolution that took place over the past 20 years which is good for those who weren’t around to experience it. I think DevOps practices are great but Gene Kim et al. do make it sound a bit dogmatic."
          />
          <BookPost
            title="Designing Data Intensive Applications"
            author="Martin Kleppmann"
            year="2017"
            comments="This book is gold dust, I read it 3 times. It contains a lot of extreme pessimism (this thing can fall over in many terrifying ways) which is helpful for thinking about other areas of software development not covered by this book."
          />
          <BookPost
            title="Building Microservices"
            author="Sam Newman"
            year="2014"
            comments="This is such an important book for anyone developing web apps and thinking about microservices. It's pretty basic and easy to understand, and a good prelude to more in depth books like Designing Data Intensive Applications."
          />
          <BookPost
            title="Continuous Discovery Habits"
            author="Teresa Torres"
            year="2021"
            comments="Some chapters of this are relevant to engineers who want to understand and work better with product people."
          />
          <BookPost
            title="A Philosophy of Software Design"
            author="John Ousterhout"
            year="2018"
            comments="This book was good but many chapters seemed a bit empty to me. I did find a few great (simple) ideas such as 'deep' abstractons and optimising for the common-case."
          />
          <PaperPost
            title="Static Typing Where Possible, Dynamic Typing When Needed"
            author="Eric Meijer, Peter Drayton"
            year="2004"
            url="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.69.5966&rep=rep1&type=pdf"
            comments="Thankfully TypeScript affords us this flexibility."
          />
          <BookPost
            title="The Pragmatic Programmer"
            author="Andy Hunt & Dave Thomas"
            year="1999"
            comments="Some excellent general advice in this book around basic things like honest communication and version control. Some of it seemed a bit outdated. Some of it just seemed like random opinions deemed to be the 'most pragmatic' way."
          />
          <YouTubePost
            title="Scrum et al."
            id="IyNPeTn8fpo"
            description="Scrum doesn't need to be complicated"
          />
          <BookPost
            title="Domain-Driven Design Distilled"
            author="Vaughn Vernon"
            year="2016"
            comments="A good introduction to DDD concepts, which are cool but much more relevant for enterprises where domain experts are the norm."
          />
          <BookPost
            title="Clean Architecture"
            author="Robert C. Martin"
            year="2017"
            comments="A great reference on SOLID principles and other patterns. A good starting point for thinking about software design."
          />
          <BookPost
            title="The Phoenix Project"
            author="Gene Kim et al."
            year="2013"
            comments="Good to see how the IT industry worked in the 90s and 00s. Made me appreciate modern practices and better understand what the motivation behind them was."
          />
          <BookPost
            title="Clean Code"
            author="Robert C. Martin"
            year="2008"
            comments="Most of the advice in this book is either obvious enough or already widely adopted, such that most experienced coders would be doing it anyway. Still, it's good to have your habits validated by an industry legend and get a deeper understanding of the reasoning behind it."
          />
        </Stack>
      </BasicPage>
    </PageLayout>
  );
};

export default IndexPage;
