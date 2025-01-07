export const users = [
    {
        name: "Zohaib Khan",
        email: "test@test.com",
        password: "password"
    }
]

export const getUser = <Record>(email: Record) => {
    const user = users.filter((element) => element == email)[0]
    if (!user){
        return null
    }
    return user
}
