import React from "react"
import {
  Heart,
  MessageCircle,
  Bookmark,
  CircleMinus,
  Ellipsis,
  Sparkle
} from "lucide-react"

import styled from "styled-components"

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  &:last-child {
    border-bottom: none;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
`
const Content = styled.div`
  display: flex;
  align-items: flex-start;

  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`

const Badge = styled.span`
  background: ${(props) => props.color || "#000"};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 2px;

  display: inline-block;
`
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  margin: 8px 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin: 0;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  font-size: 13px;
  color: #6b6b6b;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    font-size: 8px;
    flex-wrap: wrap;
  }
`

const LeftMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`

const RightMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`
const ThumbnailContainer = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 110px;
  margin-top: 4px;
  @media (max-width: 768px) {
    width: 120px;
    height: 82px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 68px;
  }
`
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

const ArticleCard = ({ article }) => {
  return (
    <Post>
      <Header>
        <Badge color={article.badgeColor}>{article.badgeText}</Badge>
        <span>{article.publicationName}</span>
      </Header>
      <Content>
        <TextGroup>
          <Title>{article.title}</Title>
          <Subtitle>{article.subtitle}</Subtitle>
          <Meta>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Sparkle size={16} />
              <span>{article.date}</span>
              <LeftMeta>
                <Heart size={16} />
                <span> {article.hearts}</span>

                <MessageCircle size={16} />
                <span> {article.commentsCount}</span>
              </LeftMeta>
            </div>

            <RightMeta>
              <Bookmark size={16} />
              <CircleMinus size={16} />
              <Ellipsis size={16} />
            </RightMeta>
          </Meta>
        </TextGroup>
        <ThumbnailContainer>
          <Thumbnail src={article.thumbnail} alt={article.title} />
        </ThumbnailContainer>
      </Content>
    </Post>
  )
}

export default ArticleCard
