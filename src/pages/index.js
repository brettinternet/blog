import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Section from "components/Section"
import A from "components/Link"
import Card from "components/Card"

import { media } from "utils/mixins"
import GithubSvg from "images/icons/github.svg"
import InstagramSvg from "images/icons/instagram.svg"
import TwitterSvg from "images/icons/twitter.svg"
import KeybaseSvg from "images/icons/keybase.svg"
import LinkedinSvg from "images/icons/linkedin.svg"

const cards = [
  { title: "resume", description: "this is my resume" },
  { title: "resume", description: "this is my resume" },
  { title: "resume", description: "this is my resume" },
]

const icons = {
  linkedin: LinkedinSvg,
  github: GithubSvg,
  twitter: TwitterSvg,
  instagram: InstagramSvg,
  keybase: KeybaseSvg,
}

const IndexPage = ({ data, location }) => {
  const socialLinks = data.site.siteMetadata.socialLinks
  const { postBasePath } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges.slice(0, 2)

  return (
    <Layout
      headProps={{
        title: "",
        keywords: ["about", "brettinternet", "brettgardiner"],
      }}
      location={location}
    >
      <Section thin>
        <h1>
          Hi! I'm Brett{" "}
          <span role="img" aria-label="hand wave">
            👋
          </span>
        </h1>
        <P>
          I thrive on finding better solutions to challenging tasks and learning
          new technologies. Whether science, tech, or dinner table discussion, I
          enjoy dissecting, improving, and creating.
        </P>
        <P>
          I am passionate about solving problems through software. I enjoy
          collaborating with other productive individuals and teams where I can
          grow and add value.
        </P>
      </Section>

      <Section skinny>
        <Ul>
          {socialLinks.map(({ href, name }, index) => {
            const Svg = icons[name]
            return (
              <li key={index}>
                <A href={href}>
                  <Svg height="20" />
                </A>
              </li>
            )
          })}
        </Ul>
      </Section>

      <Section
        thin
        css={`
          padding-bottom: 0;
        `}
      >
        <h3>Featured projects:</h3>
      </Section>

      <Section
        css={`
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <Cards>
          {cards.slice(0, 2).map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </Cards>
      </Section>

      <Section
        thin
        css={`
          padding-bottom: 0;
        `}
      >
        <h3>Recent blog posts:</h3>
      </Section>

      <Section
        css={`
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        <Cards>
          {posts.map(({ node }) => {
            const link = (postBasePath || "") + node.fields.slug
            return (
              <div key={link}>
                <Card
                  to={link}
                  title={node.frontmatter.title || node.fields.slug}
                  description={node.frontmatter.description || node.excerpt}
                  details={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                />
              </div>
            )
          })}
        </Cards>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        postBasePath
        socialLinks {
          name
          href
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  text-align: center;

  li {
    display: inline-block;
    a {
      padding: 0.5rem;

      &:hover {
        color: ${props => props.theme.neutralPrimary};

        svg {
          transform: translateY(-1px);
        }
      }

      svg {
        fill: currentColor;
        transition: transform 200ms;
        transform: translateY(0);
      }
    }
  }
`

const P = styled.p`
  line-height: 1.6;
  font-weight: 400;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  ${media.sm`
    flex-direction: row;

    & > div {
      width: 50%;

      &:first-child a {
        margin-left: 0;
      }

      &:last-child a {
        margin-right: 0;
      }
    }
    
    a {
      margin: 1em;
    }
  `}
`
