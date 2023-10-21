import React from "react"
import { Outlet, Link } from "react-router-dom"

type HeaderLink = {
  linkText: string
  path: string
}

type HeaderProps = {
  /**
   * That that will be rendered as the title of the app. In place of where a logo would be.
   */
  title?: string
  /**
   * Accepts an array of objects with the text and path for the link.
   */
  links?: HeaderLink[]
}

export default function Header({ title, links }: HeaderProps) {
  return (
    <>
      <div id="fakeHeader" style={{ border: "2px solid green" }}>
        <h1>{title}</h1>
        <nav>
          <ul>
            {links && links.map(link => (
              <li>
                <Link to={link.path}>{link.linkText}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
