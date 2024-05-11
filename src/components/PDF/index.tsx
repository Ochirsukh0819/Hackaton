import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import {
  defaultLayoutPlugin,
  ToolbarProps,
} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface DocumentProps {
  documentUrl: string;
}

export default function PDF({ documentUrl }: DocumentProps) {
  const [initialPage, setInitialPage] = useState<number>(1);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
  //   <Toolbar>
  //     {(props) => {
  //       const {
  //         Download,
  //         OpenFile,
  //         Print,
  //       } = props;
  //       return (
  //         <>
  //           {/* Customize your toolbar here */}
  //         </>
  //       );
  //     }}
  //   </Toolbar>
  // );

  return (
    <div className="w-full  overflow-y-auto md:h-[650px] h-[400px] md:p-0 py-6">
      <Viewer fileUrl={documentUrl} plugins={[defaultLayoutPluginInstance]} />
    </div>
  );
}
