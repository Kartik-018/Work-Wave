import React from "react";
import { useParams } from "react-router-dom";

const IssueDetails=()=>{
    const{projectId,issueId}=useParams();
    return (
        <div>
            Issue details
        </div>
    )
}
export default IssueDetails