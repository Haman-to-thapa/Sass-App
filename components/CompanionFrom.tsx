"use client"

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { createCompanion } from '@/lib/companionAction'
import { redirect } from 'next/navigation'

// Schema definition
const formSchema = z.object({
  name: z.string().min(1, { message: 'Companion is required' }),
  topic: z.string().min(1, { message: 'Topic is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  voice: z.string().min(1, { message: 'Voice is required' }),
  style: z.string().min(1, { message: 'Style is required' }),
  duration: z.coerce.number().min(1, { message: 'Duration is required' }),
});



type FormValues = z.infer<typeof formSchema>

const CompanionForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      topic: "",
      subject: "",
      voice: "",
      style: "",
      duration: 1,

    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      const companion = await createCompanion(values);

      if (companion?.id) {
        redirect(`/companions/${companion.id}`);
      } else {
        console.error("Companion created but missing ID");
        redirect('/');
      }
    } catch (error) {
      console.error("Failed to create a companion:", error);
      redirect('/');
    }
  };


  return (
    <div className='flex items-center justify-center'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion Name</FormLabel>
                <FormControl>
                  <Input placeholder="John AI" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic</FormLabel>
                <FormControl>
                  <textarea cols={2} placeholder="E.g., Space Exploration" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Science" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a voice" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="style" // ✅ correct field name
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />



          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (minutes)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className='w-full cursor-pointer'>Submit</Button>
        </form>
      </Form>

    </div>
  )
}

export default CompanionForm
