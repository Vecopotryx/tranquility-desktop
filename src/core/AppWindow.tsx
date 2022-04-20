import React from "react";
import { Rnd } from "react-rnd";
import "../assets/styles/componentStyles/AppWindow.css";
import styled from 'styled-components';

interface AppWindowProps {
  children: JSX.Element;
  appId: number;
  isFocused: boolean;
  title: string;
  index: number;
  updateFrameOverlay: (visible: boolean) => void;
  handleClose: (appId: number) => void;
  handleFocus: (appId: number) => void;
}

const TBButton = styled.button<{ place: string }>`
  background: none;
  border: none;
  margin: 0 10px 0 10px;
  padding: 0;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s;
  float: ${(props) => props.place};

  &:hover {
    transform: scale(1.5);
  }
`;

const Titlebar = styled.div<{ focused: boolean }>`
  width: 100%;
  user-select: none;
  background: ${p => p.focused ? p.theme.titlebarBackground : p.theme.unfocusedTitlebarBackground};
  color: ${p => p.focused ? p.theme.text : p.theme.unfocusedText};
  text-align: ${p => p.theme.titlebarTextAlignment};
  height: 0.7cm;

  & button {
    color: ${p => p.focused ? p.theme.text : p.theme.unfocusedText};
  }

  & p {
    font-size: 15px;
    line-height: 0.7cm;
  }
`;

const InternalFrameOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0.7cm;
  left: 0;
  display: block;
`

const AppWindow = (props: AppWindowProps) => {
  const [dimensions, setDimensions] = React.useState({
    maxHeight: 20000,
    storedHeight: document.documentElement.clientHeight / 2,
  });

  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [frameOverlay, setFrameOverlay] = React.useState(false);

  const updateCollapse = () => {
    if (rndRef != null) {
      if (isCollapsed) {
        setDimensions({
          maxHeight: 20000,
          storedHeight: dimensions.storedHeight,
        });
        rndRef.updateSize({
          width: rndRef.getSelfElement()?.clientWidth as number,
          height: dimensions.storedHeight,
        });
      } else {
        setDimensions({
          maxHeight: 0,
          storedHeight: rndRef.getSelfElement()?.clientHeight as number,
        });
        rndRef.updateSize({
          width: rndRef.getSelfElement()?.clientWidth as number,
          height: 0,
        });
      }
    }

    setIsCollapsed(!isCollapsed);
  };

  let rndRef: Rnd | null;

  const handleResizeOrDrag = (status: boolean) => {
    setFrameOverlay(status);
    props.updateFrameOverlay(status);
  };

  return (
    <>
      <Rnd
        className="appWindow"
        style={{ zIndex: props.index }}
        maxHeight={dimensions.maxHeight}
        ref={(c) => {
          rndRef = c;
        }}
        cancel={"." + TBButton.styledComponentId + ", .appContent>*"}
        onResizeStart={() => {
          handleResizeOrDrag(true);
        }}
        onResizeStop={() => {
          handleResizeOrDrag(false);
        }}
        onDragStart={() => {
          handleResizeOrDrag(true);
        }}
        onDragStop={() => {
          handleResizeOrDrag(false);
        }}
        default={{
          x:
            (document.documentElement.clientWidth -
              document.documentElement.clientWidth / 2) /
            2,
          y:
            (document.documentElement.clientHeight - dimensions.storedHeight) /
            2,
          width: document.documentElement.clientWidth / 2,
          height: dimensions.storedHeight,
        }}
      >
        <div className="appWrapper" onMouseEnter={() => props.handleFocus(props.appId)}>
          <Titlebar focused={props.isFocused}>
            <TBButton place="left" onClick={() => props.handleClose(props.appId)}> × </TBButton>
            <p>{props.title}</p>
            <TBButton place="right" onClick={() => updateCollapse()}>
              {isCollapsed ? "▼" : "▲"}
            </TBButton>
          </Titlebar>
          <div
            className="appContent"
            style={{ display: isCollapsed ? "none" : "block" }}
          >
            {frameOverlay && <InternalFrameOverlay />}
            {props.children}
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default AppWindow;