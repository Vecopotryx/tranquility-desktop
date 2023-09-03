type Widget = {
    name: string;
    component: JSX.Element;
}

interface PanelProps {
    position: string;
    widgets: Widget[];
}

export const Panel = ({ position, widgets }: PanelProps) => {
  return (
    <div style={{backgroundColor: "rgba(var(--primary-bg), var(--bgopacity))"}}>
        {widgets.map((widget, index) => (
            <div key={index}>{widget.component}</div>
        ))}
    </div>
  )
}
