import styled from "styled-components";

type Widget = {
  name: string;
  component: JSX.Element;
};

interface PanelProps {
  position: string;
  widgets: Widget[];
}

const PanelDiv = styled.div`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  width: calc(100% - 0.6em);
  margin: 0;
  column-gap: 0.3em;
  padding: 0 0.3em;
  line-height: 0.9cm;
  height: 0.9cm;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--primary-bg), var(--bgopacity));
  user-select: none;
`;

export const Panel = ({ position, widgets }: PanelProps) => {
  return (
    <PanelDiv>
      {widgets.map((widget, index) => (
        <div key={index}>{widget.component}</div>
      ))}
    </PanelDiv>
  );
};
