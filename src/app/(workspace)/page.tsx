"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useWorkspaceStore } from "@/modules/Layout/store";
import TabbedSidebar from "@/modules/workspace/components/sidebar";
import RequestPlayground from "@/modules/request/components/request-playground";


import { useGetWorkspace } from "@/modules/workspace/hooks/workspace";
import { Loader } from "lucide-react";

const Page = () => {
  const { selectedWorkspace } = useWorkspaceStore();
  const { data: currentWorkspace, isLoading } = useGetWorkspace( selectedWorkspace?.id!);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <Loader className="animate-spin h-6 w-6 text-indigo-500" />
      </div>
    );
  }

return (
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel defaultSize={70} minSize={40}>
        <RequestPlayground />
    </ResizablePanel>

    <ResizableHandle withHandle />

    <ResizablePanel defaultSize={30} maxSize={40} minSize={25} className="flex">
      <div className="flex-1">
        <TabbedSidebar currentWorkspace={currentWorkspace} />
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
)
};

export default Page;
