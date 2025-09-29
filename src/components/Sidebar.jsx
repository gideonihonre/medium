import React from "react"
import styled from "styled-components"
import { SidebarData } from "../data/sampleData"
import { Bookmark } from "lucide-react"
import StaffPicks from "./StaffPicks"
import WhoToFollow from "./WhoToFollow"
const Container = styled.aside`
  width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 1px solid #e0e0e0;
  @media (max-width: 768px) {
    display: none;
  }
`

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const SeeMore = styled.span`
  font-size: 0.8rem;
  color: #1a8917;
  cursor: pointer;
`

const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Topic = styled.span`
  background: #f2f2f2;
  padding: 0.4rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background: #e8e8e8;
  }
`

const ReadingListText = styled.p`
  font-size: 0.8rem;
  color: #555;
`
const LinksContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const LinkItem = styled.span`
  font-size: 0.8rem;
  color: #555;
  cursor: pointer;

  &:hover {
    color: #1a8917;
  }
`
const Sidebar = () => {
  return (
    <Container>
      <SectionTitle>Staff Picks</SectionTitle>
      <StaffPicks />
      <SeeMore>See the full list</SeeMore>

      <SectionTitle>Recommended topics</SectionTitle>
      <Topics>
        {SidebarData.topics.map((topic) => (
          <Topic key={topic.id}>{topic.name}</Topic>
        ))}
      </Topics>
      <SeeMore>See more topics</SeeMore>

      <SectionTitle>Who to follow</SectionTitle>
      <WhoToFollow />
      <SeeMore>See more suggestions</SeeMore>

      <SectionTitle>Reading list</SectionTitle>
      <ReadingListText>
        Click the <Bookmark size={13} /> on any story to easily add it to your
        reading list or a custom list that you can share.
      </ReadingListText>
      <LinksContainer>
        {SidebarData.footerLinks.map((link) => (
          <LinkItem key={link.id}>{link.name}</LinkItem>
        ))}
      </LinksContainer>
    </Container>
  )
}

export default Sidebar
