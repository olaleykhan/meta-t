import Teams from "../pages/analytics/Teams"
// import KnowledgeBase from "../pages/analytics/KnowledgeBase";
// import TrainingSAM from "../pages/analytics/TrainingSAM";
// import HelpCenter from "../pages/analytics/HelpCenter";
import DummyPage from "../pages/dummy/DummyPage";

type RouteType = {
    title: string,
    path: string,
    Component: React.ComponentType,
    nestedRoutes?: RouteType[],
};

export const pages:RouteType[] = [
    
      {title: "Admin",path:"/admin", Component: DummyPage},
    { title: "Knowledge Base", path: "/knowledge-base", Component: DummyPage },
    { title: "Train SAM", path: "/train-sam", Component: DummyPage },
    { title: "Agent Inbox", path: "/agent-inbox", Component: DummyPage },
    { title: "Help Center", path: "/help-center", Component: DummyPage },    
    {
        title: "Analytics",
        path: "/analytics",
        Component: DummyPage,
        nestedRoutes:[
        { title: "Teams", path: "teams", Component: Teams },
        { title: "Knowledge Base", path: "knowledge-base", Component: DummyPage },
        { title: "Train SAM", path: "training-sam", Component: DummyPage },
        { title: "Agent Inbox", path: "agent-inbox", Component: DummyPage },
        { title: "Help Center", path: "help-center", Component: DummyPage },
        // { title: "Analytics", path: "/analytics", Component: DummyPage }
    ]
    }
    
]