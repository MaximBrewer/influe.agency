import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', bg = 'bg-blue-400 bg-opacity-20', border = "border-0", rounded = 'rounded-xl', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    `${rounded} ${bg} ${border} ring-0 ${className}`
                }
                ref={input}
            />
        </div>
    );
});
