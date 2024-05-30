import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';


const CreateCommentForm = ({issueId}) => {

    const form=useForm({
        // resolver:
        defaultValues:{
            content:"",
        }
    })

    const onSubmit=(data)=>{
        console.log("Create project data",data);
    }

  return (
    <div>
      
      <Form {...form}>
        <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control}
            name="content"
            render={({field})=>
            <FormItem >

            <div className="flex gap-2">
            <div>
                <Avatar>
                    <AvatarFallback>R</AvatarFallback>
                </Avatar>

            </div>
                <FormControl>
                    <Input {...field}
                    type="text"
                    className="w-[20rem]"
                    placeholder="Add Comment Here..."/>
                </FormControl>
                <FormMessage/>
            </div>
            
            </FormItem>}/>
            
                <Button type="submit">Save</Button>
           
        </form>
    </Form> 

    </div>
  )
}

export default CreateCommentForm
