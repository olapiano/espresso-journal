'use client'

import { useUser } from '@auth0/nextjs-auth0/client'

export default function UserProfile() {
    const { user, error, isLoading } = useUser()

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
                {user ? (<div>
                    {user.picture && user.name && 
                    <img src={user.picture} alt={user.name} className="rounded-full" />
                }
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>

                ): <div>No user</div>}
                
            </div>
    )
}