import { useEffect, useRef, useState } from "react"

const Curve = ({
    item,
    setItem,
    canvasRef
}) => {

    const [transform, setTransform] = useState({
        translateX: 0,
        translateY: 0,
        rotate: 0
    })

    const [style, setStyle] = useState({
        width: item.w,
        height: item.h
    })

    const [svgStyle, setSvgStyle] = useState({})

    useEffect(() => {
        setStyle(prev => ({
            ...prev,
            transform: `translateX(${transform.translateX}px) translateY(${transform.translateY}px) rotate(${transform.rotate}deg)`
        }))
    }, [transform])

    useEffect(() => {
        setSvgStyle({
            width: style.width,
            height: style.width
        })
    }, [style])

    const itemRef = useRef(null)
    const rotateElRef = useRef(null)

    const dragXRef = useRef(0)
    const dragYRef = useRef(0)
    const startXRef = useRef(0)
    const startYRef = useRef(0)

    const dragWRef = useRef(0)
    const dragHRef = useRef(0)
    const startWRef = useRef(0)
    const startHRef = useRef(0)

    return <div style={style} ref={itemRef} className="absolute">
        <div className="absolute top-0 left-0 bottom-0 right-0 border opacity-0" draggable
            onDragStart={e => {
                e.stopPropagation()
                dragXRef.current = e.clientX
                dragYRef.current = e.clientY
                startXRef.current = transform.translateX
                startYRef.current = transform.translateY
            }}
            onDrag={e => {
                e.stopPropagation()
                if (e.clientX || e.clientY) {
                    setTransform(prev => ({
                        ...prev,
                        translateX: (e.clientX - dragXRef.current) + startXRef.current,
                        translateY: (e.clientY - dragYRef.current) + startYRef.current
                    }))
                }
            }}
        >
            <div className="w-0 h-6 border-r border-purple-900 absolute top-0 left-1/2 -translate-y-full flex flex-col items-center opacity-0" draggable
                ref={rotateElRef}
                onDrag={e => {
                    e.stopPropagation()
                    if (e.clientX || e.clientY) {
                        const itemX = itemRef.current.getBoundingClientRect().x + itemRef.current.getBoundingClientRect().width / 2
                        const itemY = itemRef.current.getBoundingClientRect().y + itemRef.current.getBoundingClientRect().height / 2
                        const ax = itemX - e.clientX;
                        const ay = itemY - e.clientY;
                        const cos = ax / Math.sqrt(ax * ax + ay * ay)
                        const rad = Math.asin(e.clientY > itemY ? cos : -cos)
                        setTransform(prev => ({
                            ...prev,
                            rotate: 180 * rad / Math.PI + (e.clientY > itemY ? -180 : 0)
                        }))
                    }
                }}
            >
                <div className="border border-purple-900 w-2 h-2 bg-white -top-1 absolute" />
                <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 absolute" />
            </div>
            <div className="border border-purple-900 w-2 h-2 bg-white -top-1 -left-1 absolute" draggable
                onDragStart={e => {
                    e.stopPropagation()
                    dragWRef.current = e.clientX
                    dragHRef.current = e.clientY
                    startWRef.current = style.width
                    startHRef.current = style.height
                }}
                onDrag={e => {
                    e.stopPropagation()
                    if (e.clientX || e.clientY) {
                        console.log(startWRef.current)
                        console.log(startHRef.current)
                        setStyle(prev => ({
                            ...prev,
                            width: (e.clientX - dragWRef.current) + startWRef.current,
                            height: (e.clientY - dragHRef.current) + startHRef.current
                        }))
                    }
                }} />
            <div className="border border-purple-900 w-2 h-2 bg-white -top-1 -right-1 absolute" />
            <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 -left-1 absolute" />
            <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 -right-1 absolute" />
        </div>
        <div className="absolute top-0 left-0 bottom-0 right-0 border pointer-events-none">
            <div className="w-0 h-6 border-r border-purple-900 absolute top-0 left-1/2 -translate-y-full flex flex-col items-center">
                <div className="border border-purple-900 w-2 h-2 bg-white -top-1 absolute" />
                <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 absolute" />
            </div>
            <div className="w-0 h-6 border-r border-purple-900 absolute top-0 left-1/2 -translate-y-full flex flex-col items-center">
                <div className="border border-purple-900 w-2 h-2 bg-white -top-1 absolute" />
                <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 absolute" />
            </div>
            <div className="border border-purple-900 w-2 h-2 bg-white -top-1 -left-1 absolute" />
            <div className="border border-purple-900 w-2 h-2 bg-white -top-1 -right-1 absolute" />
            <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 -left-1 absolute" />
            <div className="border border-purple-900 w-2 h-2 bg-white -bottom-1 -right-1 absolute" />
        </div>
        <svg style={svgStyle} viewBox={`0 0 ${svgStyle.width} ${svgStyle.height}`} xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
            <path d={`M 0 0 C ${item.c[0][0] / 50 * svgStyle.width} ${item.c[0][1] / 50 * svgStyle.height}, ${item.c[1][0] / 50 * svgStyle.width} ${item.c[1][1] / 50 * svgStyle.height}, ${item.c[2][0] / 50 * svgStyle.width} ${item.c[2][1] / 50 * svgStyle.height}`} stroke="#56326E" strokeWidth="3" fill="transparent" />
        </svg>
    </div>
}

export default function Canvas({ width, height, bg }) {

    const [curves, setCurves] = useState([])

    const canvasRef = useRef(null)
    const canvasRefY = useRef(0)
    const canvasRefX = useRef(0)

    useEffect(() => {
        if (canvasRef.current) {
            canvasRefY.current = canvasRef.current.getBoundingClientRect().top
            canvasRefX.current = canvasRef.current.getBoundingClientRect().left
        }
    }, [canvasRef])

    return <div>
        <div className="bg-center bg-no-repeat relative" ref={canvasRef} style={{
            width: width,
            height: height,
            backgroundImage: `url('${bg}')`
        }}>
            {curves.map((item, idx) => <Curve
                key={idx}
                item={item}
                canvasRef={canvasRef}
                canvasRefY={canvasRefY}
                canvasRefX={canvasRefX}
                setItem={item => setCurves(prev => {
                    let arr = [...prev]
                    arr[idx] = item;
                    return arr
                })} />)}
        </div>
        <div className="flex items-center">
            <div>
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" onClick={e => setCurves(prev => [...prev].concat({
                    rotate: 0,
                    top: 0,
                    left: 0,
                    w: 50,
                    h: 50,
                    m: [0, 0],
                    c: [
                        [20, 20],
                        [40, 20],
                        [50, 10]
                    ]
                }))}>
                    <path d="M 0 0 C 20 20, 40 20, 50 10" stroke="#56326E" strokeWidth="3" fill="transparent" />
                </svg>
            </div>
        </div>
    </div>
}