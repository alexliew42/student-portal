import { Signup } from "./Signup.jsx"
import { Login } from "./Login.jsx"
import { LogoutLink } from "./LogoutLink.jsx"

export function Content() {
  return (
    <div>
      <Signup/>
      <Login/>
      <LogoutLink/>
    </div>
  )
}