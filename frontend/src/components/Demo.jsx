import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Demo = () => {
    const [tableData, setTableData] = useState({ todos: [], comments: [] })

    useEffect(() => {
        const fetchData = async () => {
            const todo = await axios('https://jsonplaceholder.typicode.com/todos');
            const comment = await axios('https://jsonplaceholder.typicode.com/comments');
            setTableData({ todos: todo.data, comments: comment.data });
        };

        fetchData();
    }, []);

    return (
        <>
            <div style={{ display: 'flex' }}>
                <ul>
                    <h2>Todos</h2>
                    {tableData.todos.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
                <ul>
                    <h2>Comments:</h2>
                    {tableData.comments.map(comment => (
                        <li key={comment.id}>{comment.email}</li>
                    ))}
                </ul>
            </div>
        </>

    )
}
export default Demo