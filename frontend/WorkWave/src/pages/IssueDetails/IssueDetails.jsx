import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
  

const IssueDetails=()=>{
    const{projectId,issueId}=useParams();

    const handleUpdateIssuStatus=(select)=>{
        console.log(select);

    }

    return (
        
        
        <div className="flex justify-between border p-10 rounded-lg">
           
             {/* Left portion  */}

           <ScrollArea className="h-[80vh] w-[60%]">

            <div className>
                <h1 className="text-lg fomt-semibold text-gray-400">Create Navbar</h1>
           
                <div className="py-5">
                    <h2 className="font-semibold text-gray-400">Description</h2>
                
                    <p className="text-gray-400 text-sm mt-3">lorem fbhdss kfdkfbf fsdbf fusdufbd bsdfsdbf fsbufs vsbukvk</p>
                
                </div>
           
                <div className="mt-5">
                    <h1 className="pb-3">Activity</h1>

                    {/* for creating tabs  */}

                    <Tabs defaultValue="comments" className="w-[400px]">
                        <TabsList className="mb-5">
                            <TabsTrigger value="all" >
                                All
                            </TabsTrigger>
                            <TabsTrigger value="comments" >
                                Comments
                            </TabsTrigger>
                            <TabsTrigger value="history" >
                            History
                            </TabsTrigger>
                        </TabsList> 

                        <TabsContent value="all">
                            abc
                        </TabsContent>

                        <TabsContent value="comments">
                            <CreateCommentForm issueId={issueId} />

                            <div className="mt-8 space-y-6"> 
                            {
                                [1,1,1].map((item)=> <CommentCard key={item}/>)
                            }

                            </div>
                        </TabsContent>

                        <TabsContent value="history">
                        History
                        </TabsContent>
                    </Tabs>


                </div>
            </div>
           </ScrollArea>


               {/* right portion  */}

               <div className="w-full lg:w-[30%] space-y-2">
                    
               <Select onValueChange={handleUpdateIssuStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="To Do" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pending">To Do</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                </Select>

                
                <div className="border rounded-lg">
                    <p className="border-b py-3 px-5">Details</p>
                
                    <div className="p-5">
                        <div className="space-y-7">
                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Assignee</p>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>
                                            C
                                        </AvatarFallback>
                                    </Avatar>
                                    <p>code with VD</p>
                                </div>
                            </div>

                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Labels</p>
                                <p>None</p>
                            </div>

                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Status</p>
                                <Badge>in_progress</Badge>
                            </div>

                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Realese</p>
                                <p>30-05-2024</p>
                            </div>


                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Reporter</p>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>
                                            R
                                        </AvatarFallback>
                                    </Avatar>
                                    <p>Ram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                </div>

               </div>

        </div>
    )
}
export default IssueDetails