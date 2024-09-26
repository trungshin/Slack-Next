import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc" 
import { FaGithub } from "react-icons/fa"
import { BsSlack } from "react-icons/bs"
import { AuthFlow } from "../types"

interface SignUpCardProps {
    setAuth: (auth: AuthFlow) => void
}

export const SignUpCard = ({setAuth}: SignUpCardProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <div className="flex items-center gap-2 justify-center">
                    <BsSlack size={30}/> 
                    <span className="text-3xl font-bold">slack</span>
                </div>

                <CardTitle className="text-center">
                    First, enter your email
                </CardTitle>
            </CardHeader>
            <CardDescription className="pb-1 text-center">
                We suggest using the <span className="font-bold">email address you use at work</span>
            </CardDescription>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input 
                        disabled={false}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input 
                        disabled={false}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Input 
                        disabled={false}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        placeholder="Confirm password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size='lg' disabled={false}>
                        Continue
                    </Button>
                </form>
                <div className="flex items-center">
                    <Separator className="flex-1 bg-neutral-300" />
                    <span className="mx-4 text-sm text-gray-500 font-bold">OR</span>
                    <Separator className=" flex-1 bg-neutral-300" />
                </div>
                <div className="flex flex-col gap-y-2.5">
                    <Button 
                        onClick={() => {}}
                        variant="outline"
                        className="py-6 border-2 flex space-x-3 gap-2 font-bold"
                        size='lg'
                        disabled={false}
                    >
                        <FcGoogle size={30} />
                        Continue With Google    
                    </Button>
                    <Button 
                        onClick={() => {}}
                        variant="outline"
                        className="py-6 border-2 flex space-x-3 gap-2 font-bold"
                        size='lg'
                        disabled={false}
                    >
                        <FaGithub size={30} />
                        Continue With Github    
                    </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                    Already using Slack? 
                    <p 
                        onClick={() => setAuth("signIn")} 
                        className="hover:underline text-sky-700 cursor-pointer"
                    >
                        Sign in to an existing workspace
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}