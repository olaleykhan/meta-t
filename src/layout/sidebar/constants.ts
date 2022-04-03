import {ReactComponent as AdminIcon} from "../../assets/images/admin-icon.svg"
import {ReactComponent as KnowledgeBaseIcon} from "../../assets/images/knowledge-base-icon.svg"
import {ReactComponent as TrainSamIcon} from "../../assets/images/knowledge-base-icon.svg"
import { ReactComponent as AgentInboxIcon } from "../../assets/images/calender-icon.svg"
import { ReactComponent as HelpCenterIcon } from "../../assets/images/clock-icon.svg"
import { ReactComponent as AnalyticsIcon } from "../../assets/images/analytics-icon.svg"

export const links = [
    {
        title: "Admin",
        slug:"/admin",
        Icon: AdminIcon,
        subTitles:[]
    },
    {
        title: "Knowledge Base",
        slug:"/knowledge-base",
        Icon: KnowledgeBaseIcon,
        subTitles:[]
    },
    {
        title: "Train SAM",
        slug:"/train-sam",
        Icon: TrainSamIcon,
        subTitles:[]
    },
    {
        title: "Agent Inbox",
        slug: "/agent-inbox",
        Icon: AgentInboxIcon,
        subTitles:[]
    },
    {
        title: "Help Center",
        slug: "/help-center",
        Icon: HelpCenterIcon,
        subTitles:[]
    },
    {
        title: "Analytics",
        slug:"/analytics",
        Icon: AnalyticsIcon,
        subTitles: [
            {url: "/analytics/teams", title: "teams"},
            {url: "/analytics/knowledge-base", title: "Knowledge Base"},
            {url: "/analytics/training-sam", title: "Training SAM"},
            {url: "/analytics/help-center", title: "Help Center"},
        ]
    },
]