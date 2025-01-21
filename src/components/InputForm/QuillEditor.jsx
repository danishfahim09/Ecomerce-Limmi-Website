'use client'
import React from 'react'
import ReactQuill from "react-quill";

function QuillEditor({
    lable,
    content,
    onChange,
    modules,
}) {
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "indent",
        "image",
        "code-block",
        "color",
    ];
    return (
        <div className="sm:col-span-2">
            <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {lable}
            </label>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={onChange}
                modules={modules}
                formats={formats}
            />
        </div>
    )
}

export default QuillEditor