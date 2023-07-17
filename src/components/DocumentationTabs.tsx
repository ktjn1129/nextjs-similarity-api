"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/Tabs";
import Code from "@/ui/Code";
import { FC } from "react";
import { nodejs, python } from "@/helpers/documentation-code";

interface DocumentationTabsProps {}

const DocumentationTabs: FC<DocumentationTabsProps> = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <Code animated code={nodejs} language="javascript" show />
      </TabsContent>
      <TabsContent value="python">
        <Code animated code={python} language="python" show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
