import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import CreateProjectForm from "../Project/CreateProjectForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <>
        <div className="border-b py-4 px-5 items-center justify-between flex">
            <div className="flex items-center gap-3">
                <p onClick={()=>navigate("/")} className="cursor-pointer">WorkWave</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                    <DialogHeader>Create New Project</DialogHeader>
                       <CreateProjectForm/>
                    </DialogContent>
                </Dialog>
                <Button  onClick={()=>navigate("/upgrade_plane")} variant="ghost">Upgrade</Button>
            </div>
            <div className="flex gap-3 items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="rounded-full border-2 border-gray-500" variant="outline" size="icon">
                            <PersonIcon/>
                        </Button>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuTrigger>
                </DropdownMenu>
                <p>Kartik Dhandhala</p>
            </div>
        </div>
        </>
    )
}
export default Navbar