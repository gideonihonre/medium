import styled from "styled-components"
import { useState } from "react"
import { articles } from "../data/sampleData"
import ArticleCard from "./ArticleCard"

const FeedContainer = styled.div`
  width: 100%;
  padding: 0 140px;
  margin: 40px auto;

  @media (max-width: 1024px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e0e0e0;
`

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  color: #555;

  ${({ active }) =>
    active &&
    `
    border-bottom-color: black;
    color: black;
  `}
`

const TabContent = styled.div`
  padding: 0;
`

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Feed = () => {
  const [activeTab, setActiveTab] = useState("forYou")

  return (
    <FeedContainer>
      <TabsWrapper>
        <TabButtons>
          <TabButton
            active={activeTab === "forYou"}
            onClick={() => setActiveTab("forYou")}
          >
            For you
          </TabButton>
          <TabButton
            active={activeTab === "featured"}
            onClick={() => setActiveTab("featured")}
          >
            Featured
          </TabButton>
        </TabButtons>
      </TabsWrapper>

      <TabContent>
        <ArticleContainer>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ArticleContainer>
      </TabContent>
    </FeedContainer>
  )
}

export default Feed
