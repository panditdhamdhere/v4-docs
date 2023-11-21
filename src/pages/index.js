import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import "./styles.module.css";
import styled from "@emotion/styled";

import Discord from "@site/static/img/discord.svg";

import ThemedImage from "@theme/ThemedImage";

import {
  InformationCircleIcon,
  LightBulbIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ChatIcon,
  CodeIcon,
} from "@heroicons/react/outline";

export const actions = [
  {
    title: "What is PoolTogether",
    href: "#",
    icon: InformationCircleIcon,
    to: "./protocol/introduction/",
    text: `A brief explanation about what PoolTogether is. Governance, protocol, interface, inc.`,
  },
  {
    title: "Architecture",
    href: "#",
    icon: LightBulbIcon,
    to: "./protocol/design/",
    text: `Learn about the core concepts of the PoolTogether protocol. A prize savings network.`,
  },
  {
    title: "Deployments",
    href: "#",
    icon: BookOpenIcon,
    to: "./protocol/deployments/mainnet",
    text: `Comprehensive list of deployed contracts for both production and testnet.`,
  },
];

export const github = [
  {
    title: "PoolTogether V5 Code",
    href: "https://github.com/orgs/GenerationSoftware/repositories?q=pooltogether+solidity&type=all&language=&sort=stargazers",
    icon: CodeIcon,
  },
  {
    title: "Cabana Apps Code",
    href: "https://github.com/GenerationSoftware/pooltogether-client-monorepo",
    icon: CodeIcon,
  },
];

export const Guides = [
  {
    title: "Guides",
    text: "Learn about what you can do with PoolTogether",
    to: "./protocol/guides/",
  },
  {
    title: "Smart Contracts Reference",
    text: "Learn about the architecture of the PoolTogether protocol smart contracts.",
    to: "./protocol/reference/",
  },
  {
    title: "Subgraphs Overview",
    text: "See what Graph Protocol Subgraphs are available",
    to: "./protocol/api/subgraphs/",
  },
];

export const quick = [
  {
    title: "Smart Contracts",
    text: "Start swapping from a smart contract",
    to: "./protocol/tutorials/smart-contracts/",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  max-height: 250px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  transition: all 0.2s ease;
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-300);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
    color: #65f;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #00000010;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`;

const WideCard = styled(ShadowCard)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`;

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`;

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`;

const StyledGithubIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <Layout
      title={`PoolTogether Docs`}
      description="Technical Documentation For The PoolTogether Protocol"
    >
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: "3rem 0 1rem 0  ",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontWeight: "600" }}>
              {" "}
              Welcome to the PoolTogether Docs
            </h1>
          </div>
          <Row>
            {actions.map((action) => (
              <Link style={{ textDecoration: "none" }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon
                        style={{ width: "24px" }}
                        color={action.color}
                      />
                    </IconWrapper>

                    <svg
                      style={{ width: "24px", opacity: 0.5 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </TopSection>
                  <h3 style={{ marginBottom: ".75rem", color: action.color }}>
                    {action.title}
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>{action.text}</p>
                </ShadowCard>
              </Link>
            ))}
          </Row>
        </DocsHeader>
        <TwoRow>
          <div>
            <h2>Getting Started</h2>
            <p>
              Get started integrating the PoolTogether
              protocol in your dapp, smart contract or project.
            </p>
            <div>
              {Guides.map((action) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={action.title}
                  to={action.to}
                >
                  <Card key={action.title} style={{ marginBottom: "1rem" }}>
                    <LinkRow>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h3 style={{ marginBottom: "0.25rem" }}>{action.title}</h3>
                      </div>
                      <svg
                        style={{ width: "24px", opacity: 0.5 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </LinkRow>
                    <p style={{ marginBottom: "0rem" }}>{action.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2>Developer Links</h2>
            <p>
              The PoolTogether codebase is comprised of an ecosystem of open
              source components.
            </p>
            {github.map((action) => (
              <Link style={{ textDecoration: "none" }} href={action.href}>
                <Card key={action.title} style={{ marginBottom: "1rem" }}>
                  <LinkRow>
                    <StyledGithubIcon
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120.78 117.79"
                        style={{ width: "24px" }}
                      >
                        <defs></defs>
                        <title>testlogo</title>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <path
                              class="cls-1"
                              d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                            />
                            <path
                              class="cls-2"
                              d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                            />
                            <path
                              class="cls-2"
                              d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                            />
                            <path
                              class="cls-2"
                              d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                            />
                            <path
                              class="cls-2"
                              d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                            />
                            <path
                              class="cls-2"
                              d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                            />
                            <path
                              class="cls-2"
                              d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                            />
                            <path
                              class="cls-2"
                              d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                        {action.title}
                      </h3>
                    </StyledGithubIcon>
                    <svg
                      style={{ width: "24px", height: "24px", opacity: 0.5 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
            ))}
          </div>
        </TwoRow>

        <TwoRow>
        <div>
            <h2>Looking for V4 docs?</h2>
              <Link
                style={{ textDecoration: "none" }}
                href={"./protocol/V4/introduction"}
              >
                <Card key={"V3 Documentation"} style={{ marginBottom: "1rem" }}>
                  <LinkRow>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.45739 8.72727H5.22727L7.62784 16H10.3267L12.7273 8.72727H10.4972L9.00568 13.8551H8.94886L7.45739 8.72727ZM16.2828 16.0994C18.062 16.0994 19.3155 15.1939 19.3084 13.9119C19.3155 13.0206 18.7189 12.392 17.5471 12.2642V12.2074C18.4135 12.1151 19.0456 11.5575 19.0385 10.7443C19.0456 9.51918 17.9093 8.62784 16.2971 8.62784C14.6493 8.62784 13.4775 9.56889 13.4703 10.9006H15.3596C15.3667 10.4602 15.7537 10.1477 16.2971 10.1477C16.7942 10.1477 17.1422 10.4496 17.1351 10.8722C17.1422 11.3125 16.7303 11.625 16.1408 11.625H15.4022V12.9886H16.1408C16.78 12.9886 17.2275 13.3011 17.2203 13.7415C17.2275 14.1925 16.8439 14.5085 16.2971 14.5085C15.7289 14.5085 15.324 14.2067 15.3169 13.7841H13.3283C13.3354 15.1406 14.5605 16.0994 16.2828 16.0994Z"
                          fill="#E4DAEF"
                        />
                        <circle cx="12" cy="12" r="11.5" stroke="#E4DAEF" />
                      </svg>
                      <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                        V4 Docs
                      </h3>
                    </div>

                    <svg
                      style={{ width: "24px", height: "24px", opacity: 0.5 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
            </div>
          <div>
            <h2>Looking for V3 docs?</h2>
              <Link
                style={{ textDecoration: "none" }}
                href={"https://v3.docs.pooltogether.com"}
                target="_blank"
              >
                <Card key={"V3 Documentation"} style={{ marginBottom: "1rem" }}>
                  <LinkRow>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.45739 8.72727H5.22727L7.62784 16H10.3267L12.7273 8.72727H10.4972L9.00568 13.8551H8.94886L7.45739 8.72727ZM16.2828 16.0994C18.062 16.0994 19.3155 15.1939 19.3084 13.9119C19.3155 13.0206 18.7189 12.392 17.5471 12.2642V12.2074C18.4135 12.1151 19.0456 11.5575 19.0385 10.7443C19.0456 9.51918 17.9093 8.62784 16.2971 8.62784C14.6493 8.62784 13.4775 9.56889 13.4703 10.9006H15.3596C15.3667 10.4602 15.7537 10.1477 16.2971 10.1477C16.7942 10.1477 17.1422 10.4496 17.1351 10.8722C17.1422 11.3125 16.7303 11.625 16.1408 11.625H15.4022V12.9886H16.1408C16.78 12.9886 17.2275 13.3011 17.2203 13.7415C17.2275 14.1925 16.8439 14.5085 16.2971 14.5085C15.7289 14.5085 15.324 14.2067 15.3169 13.7841H13.3283C13.3354 15.1406 14.5605 16.0994 16.2828 16.0994Z"
                          fill="#E4DAEF"
                        />
                        <circle cx="12" cy="12" r="11.5" stroke="#E4DAEF" />
                      </svg>
                      <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                        V3 Docs
                      </h3>
                    </div>

                    <svg
                      style={{ width: "24px", height: "24px", opacity: 0.5 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </LinkRow>
                </Card>
              </Link>
          </div>
          </TwoRow>
        <hr />

        <Row>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://pooltogether.com/discord"}
          >
            <CenterCard>
              <Discord style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Discord</h3>
                <p>Hop in to the #dev-chat to get realtime help.</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://gov.pooltogether.com/"}
          >
            <CenterCard>
              <ChatIcon style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Forum</h3>
                <p>Dicsuss governance and more.</p>
              </div>
            </CenterCard>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={"https://github.com/orgs/GenerationSoftware/repositories?q=pooltogether&type=all&language=&sort=stargazers"}
          >
            <CenterCard>
              <StyledGithubIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120.78 117.79"
                  style={{ width: "48px" }}
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        class="cls-1"
                        d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                      />
                      <path
                        class="cls-2"
                        d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                      />
                      <path
                        class="cls-2"
                        d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                      />
                      <path
                        class="cls-2"
                        d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                      />
                      <path
                        class="cls-2"
                        d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                      />
                      <path
                        class="cls-2"
                        d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                      />
                      <path
                        class="cls-2"
                        d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                      />
                      <path
                        class="cls-2"
                        d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                      />
                    </g>
                  </g>
                </svg>{" "}
              </StyledGithubIcon>
              <div>
                <h3>Github</h3>
                <p>View PoolTogether V5 repositories.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
        <Link
          style={{
            textDecoration: "none",
            maxWidth: "960px",
            margin: "0 auto 4rem auto",
            width: "100%",
          }}
          href={"https://poolgrants.org"}
        >
          <ShadowCard>
            <TopSection>
              <IconWrapper>
                <CurrencyDollarIcon style={{ width: "24px" }} />
              </IconWrapper>

              <svg
                style={{ width: "24px", opacity: 0.5 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </TopSection>
            <div>
              <h2 style={{ marginBottom: "0.5rem" }}>
                PoolTogether Grants Program
              </h2>
              <p style={{ margin: "0rem" }}>
                PoolTogether Governance offers grant funding for people who are
                building apps, tools, and activities for PoolTogether protocol
                users, builders, and community members.{" "}
              </p>
            </div>
          </ShadowCard>
        </Link>
      </Container>
    </Layout>
  );
}

const V3IconComponent = function (props) {
  return (
    <svg
      {...props}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.949 8.273H3.273L6.153 17h3.239l2.88-8.727H9.598l-1.79 6.153h-.068l-1.79-6.153zm10.59 8.846c2.135 0 3.64-1.086 3.631-2.625.009-1.07-.707-1.823-2.114-1.977v-.068c1.04-.11 1.799-.78 1.79-1.756.009-1.47-1.355-2.54-3.29-2.54-1.977 0-3.383 1.13-3.392 2.728h2.268c.008-.529.473-.904 1.124-.904.597 0 1.015.362 1.006.87.009.528-.486.903-1.193.903h-.886v1.636h.886c.767 0 1.304.375 1.295.904.009.541-.451.92-1.108.92-.681 0-1.167-.362-1.176-.87h-2.386c.008 1.629 1.479 2.78 3.545 2.78z"
        fill="#fff"
      />
      <circle cx={12} cy={12} r={10.5} stroke="#fff" />
    </svg>
  );
};
