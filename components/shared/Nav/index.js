import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'
import Link from 'next/link'

import styles from './index.module.scss'

const NavComp = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='dark' dark expand='md' className={styles['nav-container']}>
        <NavbarBrand href='/'>Base Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link href='/'>
                <NavLink>Internal link</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='https://github.com/hangarlabs/ohg-nextjs-base'>
                <NavLink>External link</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu className='navbar-dark bg-dark' right>
                <Link href='/'>
                  <DropdownItem>Internal link</DropdownItem>
                </Link>
                <Link href='https://github.com/hangarlabs/ohg-nextjs-base'>
                  <DropdownItem>External link</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href='/'>
                  <DropdownItem>Another internal link</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavComp
