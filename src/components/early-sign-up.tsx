"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/constants/schemas"

import { GraphQLClient } from "graphql-request"

const ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

export default function EarlySignUp() {
    const [success, setSuccess] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [err, setErr] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            number: "",
            email: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        setSuccess(false)
        setErr(false)

        try {
            const graphQLClient = new GraphQLClient(ENDPOINT!, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTHTOKEN}`
                },
                method: 'POST',
                jsonSerializer: {
                    parse: JSON.parse,
                    stringify: JSON.stringify
                }
            })

            const mutation = `
                mutation CreateUserAccount($name: String!, $number: String!, $email: String!) {
                    createAccount(data: {name: $name, number: $number, email: $email}) {
                        name,
                        email,
                        number
                    }
                }
            `

            const variables = {
                name: values.name,
                number: values.number,
                email: values.email
            }

            await graphQLClient.request(mutation, variables)
            setSuccess(true)
            form.reset()
        } catch (error: any) {
            console.log("Something went wrong, ", error.message)
            setErr(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mt-10 relative">
            {success && (
                <div className="bg-green-500 text-white p-3 rounded-md cursor-pointer mb-4" onClick={() => setSuccess(false)}>
                    Successfully signed up!
                </div>
            )}
            {err && (
                <div className="bg-red-500 text-white p-3 rounded-md cursor-pointer mb-4" onClick={() => setErr(false)}>
                    Something went wrong. Please try again.
                </div>
            )}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enter your name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input placeholder="012 345 6789" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="johndoe@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" size={'lg'} className="hover:cursor-pointer" disabled={loading}>
                        {loading ? "Submitting..." : "Get early access"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
