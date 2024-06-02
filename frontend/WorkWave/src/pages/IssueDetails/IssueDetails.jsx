import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Tabs } from "@radix-ui/react-tabs";
import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchIssueById, updateIssueStatus } from "../Redux/Issue/Action";
import { store } from "../Redux/Store";
import { fetchComments } from "../Redux/Comment/Action";
  

const IssueDetails=()=>{
    const{projectId,issueId}=useParams();
    const dispatch=useDispatch();
    const {issue,comment}=useSelector(store=>store)
    const handleUpdateIssuStatus=(status)=>{
        dispatch(updateIssueStatus({id:issueId,status:status}))
        console.log(status);
    };
    useEffect(()=>{
       dispatch(fetchIssueById(issueId));
       dispatch(fetchComments(issueId));
    },[issueId])
    return (
        
        
        <div className="flex justify-between border p-10 rounded-lg">
           
             {/* Left portion  */}

           <ScrollArea className="h-[80vh] w-[60%]">

            <div className>
                <h1 className="text-lg fomt-semibold text-gray-400">{issue.issueDetails?.title} </h1>
           
                <div className="py-5">
                    <h2 className="font-semibold text-gray-400">Description</h2>
                
                    <p className="text-gray-400 text-sm mt-3">{issue.issueDetails?.description}</p>
                
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
                               comment.comments.map((item)=> <CommentCard item={item} key={item.key}/>)
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
                                {issue.issueDetails?.assignee?<div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8 text-xs">
                                        <AvatarFallback>
                                           {issue.issueDetails?.assignee.fullName[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <p>{issue.issueDetails?.assignee.fullName}</p>
                                </div>:<p>Unassigned</p>}
                            </div>

                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Labels</p>
                                <p>None</p>
                            </div>

                            <div className="flex gap-10 item-center">

                                <p className="w-[7rem]">Status</p>
                                <Badge>{issue.issueDetails?.status}</Badge>
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