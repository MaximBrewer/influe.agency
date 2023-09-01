import * as React from "react";
import {
    makeMoveable,
    DraggableProps,
    ScalableProps,
    RotatableProps,
    Rotatable,
    Draggable,
    Scalable
} from "react-moveable";
import MoveableHelper from "moveable-helper";

// In order to use only some able, make a component with makeMoveable function.
const Moveable = makeMoveable([
    Draggable,
    Scalable,
    Rotatable
]);

export default function Element(props) {

    const { icon, icons, setIcons, del, containerRef, index } = props

    const [helper] = React.useState(() => {
        return new MoveableHelper();
    });

    const targetRef = React.useRef(null);

    return (
        <>
            <div className="absolute" ref={targetRef}
                style={{
                    width: icon.width,
                    height: icon.width,
                    background: `url(${icon.src}) no-repeat center/contain`

                }}>

                <button onClick={e => {
                    console.log(1)
                    del()
                }} onTouchStart={e => {
                    console.log(1)
                    del()
                }} className={`p-1 rounded bg-red-500 absolute bottom-0 right-0 text-white translate-full z-10`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>

            <Moveable
                target={targetRef}
                container={containerRef}
                draggable={true}
                scalable={true}
                keepRatio={true}
                origin={false}
                rotatable={true}
                onDragStart={helper.onDragStart}
                onDrag={helper.onDrag}
                onScaleStart={helper.onScaleStart}
                onScale={helper.onScale}
                onRotateStart={helper.onRotateStart}
                onRotate={helper.onRotate}
                onDragEnd={({ target, isDrag, clientX, clientY }) => {
                    setIcons(prev => {
                        let array = prev.slice();
                        array[index].transform = target.style.transform;
                        return array;
                    })
                }}
                onResizeEnd={({ target, isDrag, clientX, clientY }) => {
                    setIcons(prev => {
                        let array = prev.slice();
                        array[index].transform = target.style.transform;
                        return array;
                    })
                }}
                onScaleEnd={({ target, isDrag, clientX, clientY }) => {
                    setIcons(prev => {
                        let array = prev.slice();
                        array[index].transform = target.style.transform;
                        return array;
                    })
                }}
                onRotateEnd={({ target, isDrag, clientX, clientY }) => {
                    setIcons(prev => {
                        let array = prev.slice();
                        array[index].transform = target.style.transform;
                        return array;
                    })
                }}
            />
        </>
    );
}