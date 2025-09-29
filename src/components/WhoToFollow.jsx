import React from "react"
import styled from "styled-components"
import { SidebarData } from "../data/sampleData"
const UserCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`
const UserText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const UserName = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
`

const UserDesc = styled.span`
  font-size: 0.75rem;
  color: #555;
`
const FollowButton = styled.button`
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  border: 1px solid #000;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`
const WhoToFollow = () => {
  return (
    <div>
      {SidebarData.whoToFollow.map((user) => (
        <UserCard key={user.id}>
          <Avatar src={user.profilePicture} alt={user.name} />
          <UserText>
            <UserName>{user.name}</UserName>
            <UserDesc>{user.description}</UserDesc>
          </UserText>
          <FollowButton>Follow</FollowButton>
        </UserCard>
      ))}
    </div>
  )
}

export default WhoToFollow
