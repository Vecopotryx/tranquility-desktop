import styled from "styled-components";

type Widget = {
    name: string;
    component: JSX.Element;
}

interface PanelProps {
    position: string;
    widgets: Widget[];
}

const PanelDiv = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    // grid-template-columns: auto 1fr auto;
    height: 1cm;
    background-color: rgba(var(--primary-bg), var(--bgopacity));
    backdrop-filter: blur(10px);
`;

export const Panel = ({ position, widgets }: PanelProps) => {
  return (
    <PanelDiv>
        {widgets.map((widget, index) => (
            <div key={index}>{widget.component}</div>
        ))}
    </PanelDiv>
  )
}
