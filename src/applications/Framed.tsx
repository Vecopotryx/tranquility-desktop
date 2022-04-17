interface FrameProps {
    src: string;
}

const Framed = (props: FrameProps) => {
    return (
        <div style={{ height: "100%", overflow: "hidden" }}>
            <iframe
                title="Framed"
                height="100%"
                width="100%"
                src={props.src}
                style={{ border: "none" }}
            />
        </div>
    )
}

export default Framed;
