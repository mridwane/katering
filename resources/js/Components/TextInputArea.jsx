import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextArea(
    { className = "", isFocused = false, rows = 3, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className="max-w-sm">
            <label htmlFor="textarea-label" className="sr-only">
                Comment
            </label>
            <textarea
                {...props}
                id="textarea-label"
                rows={rows}
                className={
                    "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 " +
                    className
                }
                ref={localRef}
                placeholder=""
            ></textarea>
        </div>
    );
});
