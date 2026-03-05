"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); // Only used for registration
    const [isRegistering, setIsRegistering] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (isRegistering) {
                const { error: signUpError } = await authClient.signUp.email({
                    email,
                    password,
                    name: name || "Admin User",
                });
                if (signUpError) throw new Error(signUpError.message);
            } else {
                const { error: signInError } = await authClient.signIn.email({
                    email,
                    password,
                });
                if (signInError) throw new Error(signInError.message);
            }

            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 h-[calc(100vh-200px)] flex items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="font-serif text-3xl">{isRegistering ? "Create Admin" : "Admin Login"}</CardTitle>
                    <CardDescription>
                        {isRegistering
                            ? "Create the master account for saqib.thinks."
                            : "Access the editorial dashboard."}
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        {error && <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">{error}</div>}

                        {isRegistering && (
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Processing..." : (isRegistering ? "Register" : "Sign In")}
                        </Button>
                        <button
                            type="button"
                            onClick={() => { setIsRegistering(!isRegistering); setError(""); }}
                            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            {isRegistering ? "Already have an account? Sign In" : "Need to setup? Register Account"}
                        </button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
