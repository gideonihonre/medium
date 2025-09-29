import { Menu } from "lucide-react"
import { Search } from "lucide-react"
import { SquarePen } from "lucide-react"
import { Bell } from "lucide-react"

import styled from "styled-components"
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  top: 0;
  z-index: 100;
  padding: 0 32px;
  height: 52px;
  min-height: 52px;
  border-bottom: 1px solid #e0e0e0;

  font-size: 18px;
  font-style: sans-serif;
  @media (max-width: 768px) {
    padding: 0 16px;
    height: 52px;
  }
`
const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 12px;
  }
`
const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 12px;
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const SearchWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 300px;
  @media (max-width: 768px) {
    display: none;
  }
`
const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
`
const Write = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`
const ProfileIcon = styled.div`
  background-color: #5926d9;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`
const MobileSearch = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbar = () => {
  return (
    <Header>
      <LeftGroup>
        <Logo>
          <Menu size={20} color="#cccccc" />
          <h2>Medium</h2>
        </Logo>
        <SearchWrapper>
          <Search color="#cccccc" />
          <Input type="text" placeholder="Search" />
        </SearchWrapper>
      </LeftGroup>
      <RightGroup>
        <MobileSearch>
          <Search size={25} />
        </MobileSearch>
        <Write>
          <SquarePen size={25} />
          <h5>Write</h5>
        </Write>
        <IconButton>
          {" "}
          <Bell />
        </IconButton>

        <ProfileIcon>G</ProfileIcon>
      </RightGroup>
    </Header>
  )
}

export default Navbar
