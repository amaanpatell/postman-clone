"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { Loader, Plus, User } from "lucide-react";
import React, { useEffect, useState } from "react";

// import CreateWorkspace from "./create-workspace";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const WorkSpace = () => {
  return (
    <>
      <Hint label="Change Workspace ">
        <Select>
        </Select>
      </Hint>
    </>
  );
};

export default WorkSpace;
