import { Outlet, Link } from "react-router-dom"

/**
 * TODO: Create change file name to Layout
 *
 * TODO: Add JSDoc description for Root
 */

export default function Root() {
  return (
    <>
      <div id="fakeHeader" style={{ border: "2px solid green" }}>
        <h1>Layout component</h1>
        <nav>
          <ul>
            <li>
              <Link to={`sign-in`}>Sign in</Link>
            </li>
            <li>
              <Link to={`dashboard`}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}
