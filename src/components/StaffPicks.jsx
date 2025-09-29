import React from "react"
import styled from "styled-components"
import { SidebarData } from "../data/sampleData"
const StaffPick = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  object-fit: cover;
  flex-shrink: 0;
`
const PickText = styled.div`
  display: flex;
  flex-direction: column;
`

const Publication = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
`

const Subtitle = styled.span`
  font-size: 0.8rem;
  color: #555;
`

const Date = styled.span`
  font-size: 0.7rem;
  color: #888;
`
const StaffPicks = () => {
  return (
    <div>
      {SidebarData.staffpicks.map((item) => (
        <StaffPick key={item.id}>
          <Thumbnail src={item.thumbnail} alt={item.publicationName} />
          <PickText>
            <Publication>{item.publicationName}</Publication>
            <Subtitle>{item.subtitle}</Subtitle>
            <Date>{item.date}</Date>
          </PickText>
        </StaffPick>
      ))}
    </div>
  )
}

export default StaffPicks
