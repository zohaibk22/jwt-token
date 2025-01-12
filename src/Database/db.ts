export const users = [
    {
        name: "Zohaib Khan",
        email: "test@test.com",
        password: "password"
    }
]

export const getUser = <Record>(email: Record) => {
    const user = users.filter((element) => {
        console.log(element, "ELEMent")
        console.log(email)
        return element.email === email}
    )[0] || null
    console.log(user, "USER USER")
    if (!user){
        return null
    }
    return user
}

export const sessions: Record<
  string,
  { sessionId: string; email: string; valid: boolean }
> = {};

export const getSession = (sessionId) => {
    const session = sessions[sessionId]
    return session && session.valid ? session: null

}

export function createSession(email: string, name: string) {
  const sessionId = String(Object.keys(sessions).length + 1);

  const session = { sessionId, email, valid: true, name };

  sessions[sessionId] = session;
  console.log(sessions, "sessions")

  return session;
}