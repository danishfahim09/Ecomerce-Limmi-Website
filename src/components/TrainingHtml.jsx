import React from 'react'
import parse from 'html-react-parser';

function TrainingHtml({content}) {
    return (

        <article className=''>
            {/* Actual Blogs */}
            {parse(`<p>${content}</p>`)}
        </article>
    )
}

export default TrainingHtml