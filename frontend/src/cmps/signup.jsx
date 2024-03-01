import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'





export function SignupPage() {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [isHaveAccount, setIsHaveAccount] = useState(false)

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function handleChangeLogin(ev) {
        const field = ev.target.name
        const value = ev.target.value
        console.log(field)
        console.log(value)
        if (field === 'username-login') {
            setCredentials({ ...credentials, username: value });
        } else {
            setCredentials({ ...credentials, password: value });
        }

    }

    async function onLogin(ev = null) {
        console.log('new login')
        if (ev) ev.preventDefault()
        if (!credentials.username && !credentials.password) return
        const user = await userService.login(credentials)
        if (user === false) return console.log('check username and password')
        try {
            navigate('/userDashboard')
            clearState()
        } catch {
            console.log('failed to login')
        }
    }

    async function onSignup(ev = null) {
        console.log('new sign up')
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        await userService.signup(credentials)
        clearState()
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }

    function onHaveAccClick() {
        setIsHaveAccount(true)
    }

    return (
        <div className="sign-up-container">
            {!isHaveAccount ? <div className="signup-form-container">
                <h2> Create an account</h2>
                <form className="signup-form" onSubmit={onSignup}>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <button >Signup!</button>
                    <p onClick={() => setIsHaveAccount(!isHaveAccount)} className='pointer'>Already have account? sign in</p>
                </form>
            </div> : <section>
                <div>
                    <form className="signup-form" onSubmit={onLogin}>
                        <input
                            type="text"
                            name="username-login"
                            placeholder="Username"
                            onChange={handleChangeLogin}
                            required
                        />
                        <input
                            type="password"
                            name="password-login"
                            placeholder="Password"
                            onChange={handleChangeLogin}
                            required
                        />
                        <button>Login</button>
                    </form>
                </div>
                <h2>hi login</h2>
            </section>}
        </div>

    )
}